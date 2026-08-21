import { siteConfig } from "../config";
import type { CaseStudy, LabExperiment, Project } from "../types";

const STOP = new Set([
  "the", "and", "for", "his", "her", "you", "your", "with", "what", "who",
  "how", "why", "does", "did", "are", "is", "me", "any", "this", "that",
  "from", "into", "has", "have", "been", "was", "were", "can", "tell",
  "show", "give", "about", "please", "more", "info", "information",
  "details", "detail", "explain", "describe", "talk",
]);

const GENERIC = new Set([
  "project", "projects", "system", "systems", "work", "built", "build",
  "agent", "agents", "ai", "llm", "llms", "genai", "app", "application",
]);

const PROJECT_ALIASES: Record<string, string[]> = {
  "lead-generation-agent": [
    "lead generation",
    "lead gen",
    "outreach agent",
    "lead discovery",
    "lead agent",
    "outreach",
  ],
  "question-generator": [
    "question generator",
    "ques generator",
    "question bank",
    "assessment",
    "exam questions",
    "quiz",
    "atlas",
    "faculty",
  ],
  "ai-finance-platform": [
    "finance platform",
    "accounting dashboard",
    "accounting",
    "banking",
    "balance sheet",
    "trial balance",
    "fintech",
    "streamlit",
  ],
};

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(value: string): string[] {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !STOP.has(token));
}

function includesPhrase(haystack: string, phrase: string): boolean {
  return normalize(haystack).includes(normalize(phrase));
}

function scoreAgainst(query: string, phrases: string[]): number {
  const q = normalize(query);
  return phrases.reduce((score, phrase) => {
    if (!includesPhrase(q, phrase)) return score;
    return score + Math.max(3, phrase.split(" ").filter(Boolean).length * 3);
  }, 0);
}

function matchProject(query: string): Project | undefined {
  const ranked = siteConfig.projects
    .map((project) => {
      const phrases = [
        project.slug.replace(/-/g, " "),
        project.name,
        ...(PROJECT_ALIASES[project.slug] || []),
      ];
      return { project, score: scoreAgainst(query, phrases) };
    })
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const second = ranked[1];
  if (!top || top.score < 3) return undefined;
  if (second && top.score - second.score < 2 && second.score >= 3) return undefined;
  return top.project;
}

function matchCaseStudy(query: string): CaseStudy | undefined {
  const q = normalize(query);
  const named = siteConfig.caseStudies.find(
    (study) =>
      includesPhrase(q, study.title) || includesPhrase(q, study.slug.replace(/-/g, " "))
  );
  if (named) return named;
  if (!/case study|case-study|how he thinks|decision|challenge/.test(q)) return undefined;
  return siteConfig.caseStudies.find((study) =>
    study.tags.some((tag) => includesPhrase(q, tag))
  );
}

function matchLab(query: string): LabExperiment | undefined {
  const q = normalize(query);
  if (!/lab|experiment|rag|evaluation|eval|production ai/.test(q)) {
    return siteConfig.lab.find(
      (item) => includesPhrase(q, item.title) || includesPhrase(q, item.slug.replace(/-/g, " "))
    );
  }
  return siteConfig.lab.find(
    (item) =>
      includesPhrase(q, item.title) ||
      includesPhrase(q, item.slug.replace(/-/g, " ")) ||
      includesPhrase(q, item.subtitle)
  );
}

function isListProjects(query: string): boolean {
  const q = normalize(query);
  if (matchProject(q)) return false;
  return /what (ai )?systems|which projects|genai projects|all projects|projects has|has noman built|what did he build|show me (his )?(genai )?projects/.test(
    q
  );
}

function formatProject(project: Project): string {
  const challenge = project.challenges[0];
  return [
    project.name,
    project.tagline,
    "",
    `Problem: ${project.problem}`,
    "",
    `Solution: ${project.solution}`,
    "",
    "How it works:",
    ...project.howItWorks.map((step, index) => `${index + 1}. ${step}`),
    "",
    `Impact: ${project.impact.join("; ")}`,
    `Stack: ${project.skills.join(" · ")}`,
    challenge
      ? `\nChallenge: ${challenge.challenge}\nDecision: ${challenge.decision}\nResult: ${challenge.result}`
      : "",
    project.github ? `GitHub: ${project.github}` : "",
    `Read more: /projects/${project.slug}`,
  ]
    .filter((line) => line !== "")
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}

function formatCaseStudy(study: CaseStudy): string {
  return [
    `Case Study ${study.number}: ${study.title}`,
    study.summary,
    "",
    study.context,
    "",
    `Challenge: ${study.challenge.challenge}`,
    `Decision: ${study.challenge.decision}`,
    `Result: ${study.challenge.result}`,
    "",
    `Read more: /case-studies/${study.slug}`,
  ].join("\n");
}

function formatLab(item: LabExperiment): string {
  return [
    `${item.title} — ${item.subtitle}`,
    item.summary,
    "",
    "Notes:",
    ...item.notes.slice(0, 3).map((note) => `• ${note}`),
    "",
    `Explore: /lab/${item.slug}`,
  ].join("\n");
}

function formatProjectList(): string {
  return [
    "Noman's flagship AI systems:",
    "",
    ...siteConfig.projects.map(
      (project, index) =>
        `${index + 1}. ${project.name} — ${project.tagline}\n   /projects/${project.slug}`
    ),
    "",
    "Ask about one by name for architecture, decisions, and GitHub.",
  ].join("\n");
}

export function answerQuestion(query: string): string {
  const q = query.trim();
  if (!q) {
    return "Ask about a project, his FDE work at Supervity, his stack, or why to hire him.";
  }

  const project = matchProject(q);
  if (project) return formatProject(project);

  if (/strongest|best project|flagship|most impressive/.test(normalize(q))) {
    return formatProject(siteConfig.projects[0]);
  }

  if (isListProjects(q)) return formatProjectList();

  const study = matchCaseStudy(q);
  if (study) return formatCaseStudy(study);

  const lab = matchLab(q);
  if (lab) return formatLab(lab);

  if (/why (should i )?hire|why hire|good fit|why him/.test(normalize(q))) {
    const lead = siteConfig.projects[0];
    return [
      `${siteConfig.name} is a fit when you need AI that ships — agents, RAG, and production workflows — not another chatbot demo.`,
      `He currently works as ${siteConfig.currently.role}, sitting with customers, translating messy problems into systems, and owning deployment and iteration.`,
      `Strongest public proof: ${lead.name} — ${lead.tagline}`,
      `Open to: ${siteConfig.openToRoles.join(", ")}.`,
      `Contact: ${siteConfig.social.email}`,
    ].join("\n\n");
  }

  if (/^(his )?experience$|work history|where (has|did) he work/.test(normalize(q))) {
    return [
      "Experience:",
      "",
      ...siteConfig.experience.map(
        (job) =>
          `${job.title} @ ${job.company} (${job.dateRange})\n${job.bullets.map((bullet) => `• ${bullet}`).join("\n")}`
      ),
      "",
      "More: /about",
    ].join("\n");
  }

  if (/fde|forward deployed|supervity|enterprise ai/.test(normalize(q))) {
    const fde = siteConfig.experience[0];
    return [
      `${fde.title} @ ${fde.company} (${fde.dateRange})`,
      "This is forward-deployed AI work: customer problems, custom workflows, production ownership.",
      "",
      ...fde.bullets.map((bullet) => `• ${bullet}`),
      "",
      "How he thinks: /case-studies/enterprise-ai-workflow",
    ].join("\n");
  }

  if (/tech(nolog(y|ies))?|stack|tools|languages|skills|what does he use/.test(normalize(q))) {
    return `Focus: ${siteConfig.focusLine}\n\nTools: ${siteConfig.skills.join(" · ")}`;
  }

  if (/contact|email|linkedin|github|reach|resume/.test(normalize(q))) {
    return `Email: ${siteConfig.social.email}\nPhone: ${siteConfig.social.phone}\nLocation: ${siteConfig.location}\nLinkedIn: ${siteConfig.social.linkedin}\nGitHub: ${siteConfig.social.github}\nResume: ${siteConfig.resumeFile}\n\nOpen to: ${siteConfig.openToRoles.join(", ")}`;
  }

  if (/who is|who are you|about noman|about him|introduce/.test(normalize(q))) {
    return `${siteConfig.aboutMe}\n\nCurrently: ${siteConfig.currently.role}\nFocus: ${siteConfig.currently.focus}\nOpen to: ${siteConfig.currently.openTo}\n\nMore: /about`;
  }

  const ranked = siteConfig.projects
    .map((item) => {
      const tokens = tokenize(q).filter((token) => !GENERIC.has(token));
      const hay = normalize(
        `${item.name} ${item.tagline} ${item.skills.join(" ")} ${item.domains.join(" ")} ${item.problem}`
      );
      const points = tokens.reduce((sum, token) => sum + (hay.includes(token) ? 2 : 0), 0);
      return { item, points };
    })
    .filter((row) => row.points > 0)
    .sort((a, b) => b.points - a.points);

  if (
    ranked[0] &&
    ranked[0].points >= 4 &&
    (!ranked[1] || ranked[0].points >= ranked[1].points + 2)
  ) {
    return formatProject(ranked[0].item);
  }

  return [
    "I can answer from this portfolio. Try a specific question:",
    "• Tell me about the lead generation agent",
    "• What is his strongest project?",
    "• Tell me about his FDE experience",
    "• What technologies does he use?",
    "• Why should I hire him?",
  ].join("\n");
}

export const assistantMeta = siteConfig.assistant;
