import type {
  BuildStep,
  CaseStudy,
  Education,
  Experience,
  LabExperiment,
  Project,
  SocialLinks,
  TimelineItem,
} from "./types";

export const siteConfig = {
  name: "Ansari Noman",
  shortName: "Noman",
  title: "AI Engineer / Forward Deployed AI Engineer",
  headline: "I build AI systems that move from idea → production.",
  subheadline: "AI Engineer · Forward Deployed AI · GenAI · RAG · Agents",
  focusLine: "GenAI · RAG · AI Agents · LLM Applications · Automation · Production AI",
  description:
    "AI Engineer and Forward Deployed AI Engineer building production GenAI systems — agents, RAG, LLM applications, and enterprise AI workflows.",
  accentColor: "#22d3ee",
  location: "Mumbai, Maharashtra, India",
  resumeFile: "/Ansari_Noman_Resume_v4.docx",
  social: {
    email: "ansarinoman1321@gmail.com",
    phone: "+91 81047 13429",
    linkedin: "https://linkedin.com/in/noman1321",
    twitter: "",
    github: "https://github.com/noman1321",
    resume: "/resume",
  } satisfies SocialLinks,
  currently: {
    role: "AI Developer @ Supervity",
    focus: "GenAI • AI Agents • RAG • Enterprise AI",
    openTo: "AI Engineer • Forward Deployed AI Engineer",
  },
  aboutMe:
    "Results-driven AI Developer and Data Analyst with hands-on experience building and deploying AI-powered applications, automation workflows, and intelligent systems. Proficient in Python, NLP, LangChain, and modern AI tools. Experienced across EdTech, fintech, and enterprise settings, translating complex business requirements into scalable AI solutions.",
  whatIBuild: [
    "AI Agents",
    "RAG systems",
    "LLM applications",
    "AI automation",
    "Data / AI platforms",
    "Enterprise integrations",
  ],
  howIWork: [
    "Business-first",
    "Engineering-driven",
    "Experimentation-oriented",
    "Production-focused",
  ],
  exploring: [
    "Agentic AI",
    "Enterprise RAG",
    "LLM Evaluation",
    "Multimodal AI",
    "AI + FinTech",
    "Production AI Infrastructure",
  ],
  openToRoles: [
    "AI Engineer",
    "Forward Deployed AI Engineer",
    "GenAI Engineer",
    "Applied AI Engineer",
  ],
  skills: [
    "Python",
    "C",
    "SQL",
    "MySQL",
    "MongoDB",
    "HTML/CSS",
    "R",
    "Flask",
    "Django",
    "Streamlit",
    "LangChain",
    "Hugging Face",
    "Ollama",
    "NLP",
    "Git",
    "Docker",
    "TravisCI",
    "Google Cloud Platform",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Power BI",
    "Framer",
    "WIX",
    "Shopify",
  ],
  pipeline: [
    { id: "idea", label: "Idea" },
    { id: "problem", label: "Business Problem" },
    { id: "system", label: "AI System" },
    { id: "deploy", label: "Deployment" },
    { id: "impact", label: "Impact" },
  ],
  buildSteps: [
    { number: "01", title: "Understand", detail: "Business problem" },
    { number: "02", title: "Define", detail: "AI opportunity" },
    { number: "03", title: "Design", detail: "System architecture" },
    { number: "04", title: "Build", detail: "Models + agents + workflows" },
    { number: "05", title: "Integrate", detail: "APIs / databases / enterprise systems" },
    { number: "06", title: "Deploy", detail: "Production environment" },
    { number: "07", title: "Measure", detail: "Performance + cost + reliability" },
    { number: "08", title: "Iterate", detail: "Based on real usage" },
  ] satisfies BuildStep[],
  careerTimeline: [
    { year: "2023", label: "Data Science", detail: "Foundation in ML pipelines, exploration, and model evaluation." },
    { year: "2024", label: "Data Analytics + Development", detail: "Dashboards, product interfaces, and data-driven workflows." },
    { year: "2025", label: "AI / ML Engineering", detail: "NLP systems, deployed AI apps, and institutional automation." },
    { year: "2026", label: "Forward Deployed AI", detail: "Enterprise GenAI, agents, RAG, and production ownership." },
  ] satisfies TimelineItem[],
  projects: [
    {
      slug: "lead-generation-agent",
      name: "AI-Powered Lead Generation & Outreach Agent",
      tagline: "An AI-powered web application that automates lead discovery, outreach generation, and follow-up workflows.",
      description:
        "Designed and built an AI-powered web application that automates lead discovery, outreach generation, and follow-up workflows. Implemented intelligent content generation to personalize communication at scale, with a focus on automation, reliability, and end-to-end system ownership — translating AI capabilities into a usable product beyond model development.",
      problem:
        "Manual lead discovery and outreach does not scale. Teams spend hours researching prospects, writing one-off messages, and chasing follow-ups with little consistency.",
      solution:
        "An AI agent workflow that finds leads, qualifies them, generates personalized outreach, and runs follow-up sequences as a connected system.",
      overview:
        "This project is an applied AI system: discovery, processing, generation, and automation wired together so a user can run outreach as a workflow instead of a pile of disconnected tools.",
      whatIBuilt: [
        "Lead discovery pipeline that collects and structures prospect data",
        "LLM-driven personalization for outreach copy",
        "Qualification logic so the model focuses on relevant leads",
        "Follow-up automation to keep conversations moving",
        "A web application wrapping the full workflow",
      ],
      howItWorks: [
        "A user starts a campaign and defines the target profile.",
        "The system discovers and structures lead data.",
        "An LLM agent qualifies the lead and drafts personalized outreach.",
        "The workflow sends outreach and schedules follow-ups.",
        "The user reviews results and iterates on messaging.",
      ],
      architecture: {
        title: "Lead Generation Agent",
        layers: [
          [{ id: "user", label: "User" }],
          [{ id: "discovery", label: "Lead Discovery" }],
          [{ id: "processing", label: "Data Processing" }],
          [{ id: "agent", label: "LLM / AI Agent" }],
          [
            { id: "personalization", label: "Personalization" },
            { id: "qualification", label: "Qualification" },
          ],
          [{ id: "outreach", label: "Outreach" }],
          [{ id: "followup", label: "Follow-up" }],
        ],
      },
      technicalDecisions: [
        {
          title: "Agent over a single prompt",
          detail:
            "Outreach quality depends on research, qualification, and copy. I structured this as a multi-step agent workflow instead of one LLM call so each stage has a job.",
        },
        {
          title: "Personalization from structured data",
          detail:
            "The model writes from processed lead fields rather than raw dumps, which keeps messages specific and reduces hallucination in outreach.",
        },
        {
          title: "End-to-end ownership",
          detail:
            "The work covers ingestion, generation, and automation — the same shape as production AI systems, not a chatbot demo.",
        },
      ],
      aiWorkflow: [
        "Collect lead signals and normalize them into a usable record",
        "Qualify against campaign criteria before spending generation budget",
        "Generate personalized outreach from structured context",
        "Trigger follow-up sequences based on workflow state",
      ],
      challenges: [
        {
          challenge:
            "Generic LLM copy sounded fluent but did not convert because it ignored lead context.",
          decision:
            "Moved from a single prompt to a staged workflow: process data first, then generate from structured fields.",
          result:
            "Outreach became specific to the prospect instead of templated AI language.",
        },
      ],
      learned: [
        "Agent systems fail at the seams — data quality and stage design matter more than a clever prompt.",
        "Personalization is a retrieval and structuring problem before it is a writing problem.",
        "Owning the workflow from discovery to follow-up is what makes applied AI useful.",
      ],
      impact: [
        "Replaced a manual research-and-write loop with a connected AI workflow",
        "Showed applied AI engineering beyond model development",
        "Created a reusable pattern for agent-style automation",
      ],
      github: "https://github.com/noman1321/Lead",
      skills: ["Python", "LLMs", "AI Agents", "NLP", "Automation"],
      domains: ["AI Agents", "LLMs", "Automation"],
      featured: true,
    },
    {
      slug: "question-generator",
      name: "Ques Generator",
      tagline: "A live NLP application that generates exam and quiz questions for faculty at Atlas SkillTech University.",
      description:
        "Developed and deployed a live web application that automatically generates exam and quiz questions using AI and NLP techniques. Enabled faculty to create customized assessments more efficiently across departments. Now live at Atlas SkillTech University, built with Python, NLP models, and web technologies as a production tool.",
      problem:
        "Creating high-quality assessments by hand is slow. Faculty repeat similar work across departments with little reuse of source material.",
      solution:
        "A deployed web app that takes academic content and generates customized questions, turning source material into usable assessments.",
      overview:
        "Built for Atlas SkillTech University. The system is a practical NLP product: ingest content, generate questions, and put them in a live application faculty can actually use.",
      whatIBuilt: [
        "A live web application for question generation",
        "NLP pipeline for turning source material into assessment items",
        "Customization so faculty can steer question type and scope",
        "A workflow that shortens exam preparation across departments",
      ],
      howItWorks: [
        "Faculty provide source material or a topic scope.",
        "The system processes the content with NLP techniques.",
        "An LLM generates candidate questions aligned to the material.",
        "Users review, refine, and use the questions in assessments.",
      ],
      architecture: {
        title: "Question Generator",
        layers: [
          [{ id: "faculty", label: "Faculty" }],
          [{ id: "app", label: "Web Application" }],
          [{ id: "nlp", label: "NLP Processing" }],
          [{ id: "llm", label: "LLM Generation" }],
          [{ id: "review", label: "Review & Export" }],
        ],
      },
      technicalDecisions: [
        {
          title: "Generation tied to source content",
          detail:
            "Questions are produced from processed academic material rather than unconstrained prompting, so outputs stay on-topic.",
        },
        {
          title: "Deploy as a product, not a notebook",
          detail:
            "The value is a live application faculty can use. Shipping the UI and workflow was part of the engineering, not an afterthought.",
        },
      ],
      aiWorkflow: [
        "Ingest academic content",
        "Extract and structure relevant concepts",
        "Generate questions with an LLM constrained by that context",
        "Return a reviewable set for faculty",
      ],
      challenges: [
        {
          challenge:
            "Unconstrained generation drifted off syllabus and produced questions that looked good but were not usable.",
          decision:
            "Anchored generation to processed source content and added a review step before questions leave the system.",
          result:
            "Outputs stayed closer to the material faculty actually teach.",
        },
      ],
      learned: [
        "Education tools succeed when they save time without lowering academic quality.",
        "Context control is the difference between a novelty generator and a useful NLP product.",
        "Deployment is part of the AI system — a model in a notebook does not change a department.",
      ],
      impact: [
        "Reduced blank-page effort for exam and quiz creation",
        "Deployed as a live application used in an academic setting",
        "Demonstrated NLP + product delivery, not just model experiments",
      ],
      github: "https://github.com/noman1321/Question-Bank",
      skills: ["Python", "NLP", "LLMs", "Web Technologies"],
      domains: ["LLM", "NLP", "Education"],
      featured: true,
    },
    {
      slug: "ai-finance-platform",
      name: "Accounting Dashboard",
      tagline: "An AI-driven Streamlit web app that automates financial statements and surfaces insights for finance teams.",
      description:
        "Developed an end-to-end accounting dashboard leveraging AI for automation and financial insights. Features include automated balance sheet and trial balance generation, interactive BI dashboards, AI-powered suggestions, manual data entry, and document uploads. Built with Python, Streamlit, and data analysis libraries to streamline finance workflows.",
      problem:
        "Finance teams still assemble statements and insights by hand. Data lives in uploads and spreadsheets, and analysis happens after the reporting work is already done.",
      solution:
        "A Streamlit platform that ingests financial data, automates core statements, and uses AI to suggest insights on top of the numbers.",
      overview:
        "This is an AI + data product for finance operations. The system handles entry, documents, statement generation, and analysis in one place so reporting and insight are not separate jobs.",
      whatIBuilt: [
        "Automated balance sheet and trial balance generation",
        "Interactive business intelligence dashboards",
        "AI-powered suggestions on top of financial data",
        "Manual data entry and document upload flows",
        "A Streamlit application finance teams can operate",
      ],
      howItWorks: [
        "Users enter data or upload financial documents.",
        "The platform processes records into accounting structures.",
        "Core statements are generated automatically.",
        "Dashboards visualize the business position.",
        "An AI layer suggests follow-up analysis.",
      ],
      architecture: {
        title: "AI Finance Platform",
        layers: [
          [{ id: "user", label: "Finance User" }],
          [
            { id: "entry", label: "Data Entry" },
            { id: "upload", label: "Document Upload" },
          ],
          [{ id: "processing", label: "Processing Engine" }],
          [
            { id: "statements", label: "Statements" },
            { id: "bi", label: "BI Dashboards" },
            { id: "ai", label: "AI Suggestions" },
          ],
        ],
      },
      technicalDecisions: [
        {
          title: "Automation first, generation second",
          detail:
            "The core value is correct statements from structured data. AI suggestions sit on top of that, not instead of accounting logic.",
        },
        {
          title: "Streamlit for a usable internal product",
          detail:
            "Finance users needed a working interface quickly. Streamlit let me ship data workflows, uploads, and AI features in one app.",
        },
      ],
      aiWorkflow: [
        "Ingest entries and documents",
        "Map them into accounting records",
        "Generate statements from those records",
        "Run AI suggestions against the resulting metrics",
      ],
      challenges: [
        {
          challenge:
            "AI commentary is useless if the underlying statements are wrong or incomplete.",
          decision:
            "Separated deterministic accounting generation from the AI insight layer so suggestions always sit on computed numbers.",
          result:
            "The product stayed trustworthy as a finance tool while still adding an AI surface.",
        },
      ],
      learned: [
        "In regulated or numbers-heavy domains, AI should advise on top of deterministic logic.",
        "Document intake and data entry are part of the AI system, not plumbing.",
        "Internal tools win when they compress a real workflow, not when they demo a model.",
      ],
      impact: [
        "Automated core statement generation for finance teams",
        "Combined reporting, BI, and AI suggestions in one product",
        "Showed AI applied to operations, not only chat interfaces",
      ],
      github: "https://github.com/noman1321/Banking",
      skills: ["Python", "Streamlit", "AI", "Data Analysis", "Finance"],
      domains: ["AI", "Finance", "Data Analytics"],
      featured: true,
    },
    {
      slug: "al-falaah",
      name: "Al-Falaah",
      tagline:
        "A live Azaan and masjid utility app for Jama Masjid Ahle Hadees, Mominpura — published on Google Play.",
      description:
        "Al-Falaah is a religious utility application for the local community of Jama Masjid Ahle Hadees, Mominpura, Mumbai. Developed and published by Moosa Ansari / MBAHJ, it streams live Azaan, shows daily prayer timings, and keeps worshippers updated with masjid announcements — no login required.",
      problem:
        "People who cannot be at the masjid still need the live Azaan, prayer times, and local announcements from Jama Masjid Ahle Hadees, Mominpura. Generic azan apps do not carry this mosque's broadcast or its community calendar.",
      solution:
        "A Google Play app that streams live Azaan from the masjid and packages prayer timings, Qibla, Islamic calendar events, and announcements in one simple interface.",
      overview:
        "Al-Falaah is a production Android app built for a real congregation. It is developed and published by Moosa Ansari / MBAHJ. The first version is live on the Play Store and is designed so the local community can hear Azaan and stay current with masjid updates without creating an account.",
      whatIBuilt: [
        "Live Azaan audio streaming from Jama Masjid Ahle Hadees, Mominpura",
        "Daily prayer timings with a dashboard for Azaan, Jama'at, and Qaza",
        "Hijri calendar with Islamic events and a Ramadan Sehri/Iftar schedule",
        "Qibla finder and masjid announcements",
        "Light and dark themes, with no login or registration required",
        "Play Store release for Android so the community can install it directly",
      ],
      howItWorks: [
        "A Raspberry Pi at the masjid captures live audio from the sound system.",
        "Audio is streamed over Icecast so listeners can hear Azaan in real time.",
        "The Flutter app plays that stream and shows prayer times, Qibla, and calendar data.",
        "Firebase Cloud Messaging and Firestore trigger broadcast state and notifications.",
        "Worshippers install the app from Google Play and use it without an account.",
      ],
      architecture: {
        title: "Al-Falaah",
        layers: [
          [{ id: "masjid", label: "Masjid Audio" }],
          [{ id: "pi", label: "Raspberry Pi" }],
          [{ id: "stream", label: "Icecast Stream" }],
          [
            { id: "firebase", label: "Firebase" },
            { id: "app", label: "Flutter App" },
          ],
          [{ id: "user", label: "Worshipper" }],
        ],
      },
      technicalDecisions: [
        {
          title: "Live stream, not a recorded azan file",
          detail:
            "The product is the masjid's own Azaan. Capture at the source and stream it, instead of shipping a generic recording that would not represent this congregation.",
        },
        {
          title: "No login for a community utility",
          detail:
            "The Play Store listing is explicit: no registration. Prayer times, Qibla, and announcements should be available without creating an account.",
        },
        {
          title: "Flutter + Firebase for a shippable first version",
          detail:
            "Flutter delivered the Android client. Firebase Cloud Messaging and Firestore handle live broadcast state and notifications so the app can ship as a real product, not a local prototype.",
        },
      ],
      challenges: [
        {
          challenge:
            "A masjid utility only works if the Azaan people hear is this masjid's Azaan, on time, on a phone they already have.",
          decision:
            "Pair on-site Raspberry Pi capture with an Icecast stream and a Play Store Flutter app, instead of stopping at a demo on one laptop.",
          result:
            "Al-Falaah is live on Google Play as Al-Falaah; Mominpura Azaan App, with live streaming, prayer times, Qibla, calendar, and announcements.",
        },
      ],
      learned: [
        "Community software has to ship where people already install apps — in this case Google Play.",
        "IoT at the masjid and a mobile client are one system: the stream is useless if the phone UI is not simple.",
        "Privacy-sensitive religious tools should collect as little as possible. This app does not require login.",
      ],
      impact: [
        "Live on Google Play for the Mominpura community",
        "Connects worshippers to Jama Masjid Ahle Hadees Azaan and announcements remotely",
        "Shows a full production path: hardware capture, streaming, mobile client, and store release",
      ],
      demo: "https://play.google.com/store/apps/details?id=com.ahlehadees.azaan_app",
      skills: ["Flutter", "Firebase", "Python", "Raspberry Pi", "Icecast", "Android"],
      domains: ["Mobile", "IoT", "Community"],
      featured: true,
    },
  ] satisfies Project[],
  caseStudies: [
    {
      slug: "enterprise-ai-workflow",
      number: "01",
      title: "Building an Enterprise AI Workflow",
      summary:
        "How I turn an ambiguous customer problem into a deployable AI workflow — architecture, retrieval, integration, and iteration.",
      tags: ["Enterprise AI", "RAG", "FDE", "Production"],
      pipeline: [
        "Business Problem",
        "Requirements",
        "AI Architecture",
        "Model Selection",
        "RAG / Agent Design",
        "Integration",
        "Deployment",
        "Monitoring",
        "Iteration",
      ],
      context:
        "At Supervity I work as an AI Developer in a forward-deployed style: sit with the customer problem, translate it into a system, and own it in a real environment.",
      businessProblem:
        "Teams want AI that answers from their own knowledge and fits existing operations. A generic chatbot does not survive contact with messy documents, permissions, and real users.",
      requirements: [
        "Ground answers in the customer's own content",
        "Fit the workflow people already use",
        "Be reliable enough to put in front of non-technical users",
        "Be something we can deploy, debug, and iterate",
      ],
      architecture:
        "Separate the system into retrieval, generation, tools, and the application shell. The LLM is a component. The product is the workflow around it.",
      modelSelection:
        "Choose the model based on the job: latency, context needs, and cost in a customer environment — not the newest name on a leaderboard.",
      ragOrAgent:
        "If the job is grounded Q&A, design retrieval first (chunking, metadata, filters). If the job is a multi-step task, design an agent with tools and a clear state machine.",
      integration:
        "AI only creates value when it talks to the customer's APIs, files, and databases. Integration is the product, not an afterthought.",
      deployment:
        "Own the path into the real environment: configuration, failure modes, and the difference between a demo and something a customer can use.",
      monitoring:
        "Watch answer quality, failure cases, and whether people actually complete the workflow — not just whether the API returned 200.",
      iteration:
        "Every production AI system is version 1. Retrieval, prompts, and tools change once real questions show up.",
      challenge: {
        challenge:
          "An early implementation generated fluent answers but struggled with context retrieval — the model was fine, the evidence it received was not.",
        decision:
          "Changed the retrieval strategy: tighter chunking, metadata filtering, and passing less irrelevant context into the prompt.",
        result:
          "Answers became more relevant, and the model spent fewer tokens on noise. The lesson: retrieval design is the system.",
      },
    },
    {
      slug: "ambiguous-problem-to-production",
      number: "02",
      title: "From Ambiguous Problem to Production AI",
      summary:
        "Forward deployed work is mostly translation: a vague business pain into requirements, then into an AI system someone can run.",
      tags: ["FDE", "Requirements", "Deployment"],
      pipeline: [
        "Listen",
        "Reframe the job",
        "Decide if AI belongs",
        "Design the thinnest system",
        "Ship into the workflow",
        "Tighten from usage",
      ],
      context:
        "Customers rarely ask for a RAG pipeline. They ask to reduce manual work, answer from internal knowledge, or automate a messy process.",
      businessProblem:
        "The stated request is often 'add AI'. The real request is: make this operational job faster, more consistent, and less dependent on one expert.",
      requirements: [
        "Name the user and the job to be done",
        "Write down what 'good' looks like in business terms",
        "Identify which steps need a model vs rules vs a human",
        "Define the integration surface before choosing a model",
      ],
      architecture:
        "Start from the workflow, then place models where they remove a bottleneck. Avoid wrapping the entire process in a single agent if a smaller system will do.",
      modelSelection:
        "Pick enough capability for the task. Over-buying a model does not fix missing requirements or bad data.",
      ragOrAgent:
        "Use RAG when the system must speak from documents. Use agents when the system must take actions. Mix them only when the job actually needs both.",
      integration:
        "Map systems of record early. If the AI cannot read or write the places work already lives, it will stay a demo.",
      deployment:
        "Deploy next to the user: the same environment, the same files, the same failure cases. That is where FDE work is won.",
      monitoring:
        "Sit with the first real users. Watch where they hesitate, where they override the model, and where the workflow breaks.",
      iteration:
        "Change the system from those observations — retrieval, tools, UX — rather than from abstract prompt tweaking.",
      challenge: {
        challenge:
          "Stakeholders described a broad 'AI assistant' without a bounded job, which would have produced an impressive demo and a weak product.",
        decision:
          "Narrowed the first release to one workflow with clear inputs, outputs, and a human review point.",
        result:
          "The system could be deployed, evaluated, and improved instead of remaining a generic chatbot.",
      },
    },
    {
      slug: "agent-system-design",
      number: "03",
      title: "Designing an AI Agent That Actually Finishes the Job",
      summary:
        "Lead generation taught a concrete lesson: agents need stages, structured context, and a definition of done.",
      tags: ["AI Agents", "LLMs", "Workflow Design"],
      pipeline: [
        "Job to be done",
        "Break into stages",
        "Give each stage tools + context",
        "Gate with qualification",
        "Generate",
        "Act",
        "Follow up",
      ],
      context:
        "The lead generation agent is the public example of how I design multi-step AI systems rather than single prompts.",
      businessProblem:
        "Outreach fails when research, writing, and follow-up are disconnected. People want the whole job done, not a paragraph.",
      requirements: [
        "Discover leads",
        "Qualify them",
        "Write from real context",
        "Follow up without starting over",
      ],
      architecture:
        "A linear agent workflow with a branch for personalization vs qualification, then outreach and follow-up. Each node has a contract.",
      modelSelection:
        "The LLM is used where language and judgment are needed (qualification + copy). Deterministic steps handle collection and sequencing.",
      ragOrAgent:
        "This is an agent with tools and state, not a retrieval Q&A bot. Context comes from processed lead records.",
      integration:
        "The agent is only useful if it can take workflow actions — generate, sequence, and continue — not just chat.",
      deployment:
        "Wrapped as an application so a user can run the workflow, not a notebook full of cells.",
      monitoring:
        "Quality is judged on whether outreach is specific and whether the workflow completes, not on prompt eloquence.",
      iteration:
        "When copy was generic, the fix was upstream data structuring, not a longer prompt.",
      challenge: {
        challenge:
          "A one-shot generation step produced fluent email that ignored the lead.",
        decision:
          "Split discovery, processing, qualification, and generation into explicit stages.",
        result:
          "The agent could finish a real workflow instead of emitting text.",
      },
    },
  ] satisfies CaseStudy[],
  lab: [
    {
      slug: "rag-experiments",
      title: "RAG Experiments",
      subtitle: "Testing retrieval methods",
      status: "active",
      summary:
        "Notes from testing how chunking, metadata filters, and retrieval strategy change answer quality in grounded systems.",
      focus: ["Chunking", "Metadata filtering", "Context windows", "Grounding"],
      notes: [
        "Fluent answers can still be wrong if retrieval sends the model the wrong slices of a corpus.",
        "Smaller, labeled chunks with metadata filters beat dumping large overlapping windows into the prompt.",
        "Passing less noise often improves relevance more than switching the generator.",
        "Enterprise RAG is a data and retrieval problem first.",
      ],
      takeaways: [
        "Evaluate retrieval separately from generation.",
        "Design chunk boundaries around how people will ask questions.",
        "Metadata is a control surface, not decoration.",
      ],
    },
    {
      slug: "ai-agents",
      title: "AI Agents",
      subtitle: "Tool calling experiments",
      status: "ongoing",
      summary:
        "Working notes on agents that use tools, keep state, and complete multi-step jobs instead of chatting.",
      focus: ["Tool calling", "State machines", "Qualification gates", "Workflows"],
      notes: [
        "An agent without a definition of done becomes an expensive chatbot.",
        "Tool calling only helps when each tool has a tight contract and the model is not asked to do deterministic work.",
        "Lead generation, outreach, and follow-up are a good testbed because the job is sequential and observable.",
        "Most failures are orchestration failures: missing context, no gate, no stop condition.",
      ],
      takeaways: [
        "Stage the job before you add more tools.",
        "Keep language tasks and system tasks separate.",
        "Inspect traces. The interesting bugs are between steps.",
      ],
    },
    {
      slug: "llm-evaluation",
      title: "LLM Evaluation",
      subtitle: "Testing model performance",
      status: "ongoing",
      summary:
        "How I think about evaluating LLM systems in applied settings: relevance, groundedness, and whether the workflow completed.",
      focus: ["Groundedness", "Task success", "Cost", "Failure cases"],
      notes: [
        "Leaderboard scores do not tell you if a customer workflow is finished.",
        "I care about: did we retrieve the right context, did the answer stay faithful, did the user complete the job.",
        "Cost and latency are product constraints, not afterthoughts.",
        "A handful of real traces beats a large synthetic eval that does not match production questions.",
      ],
      takeaways: [
        "Define success in business terms first.",
        "Keep a set of hard real questions, not only happy-path prompts.",
        "Measure retrieval and generation as different failure modes.",
      ],
    },
    {
      slug: "production-ai",
      title: "Production AI",
      subtitle: "What survives contact with users",
      status: "notes",
      summary:
        "Field notes from deploying AI into real environments: integration, failure modes, and iteration after the demo.",
      focus: ["Deployment", "Integration", "Reliability", "Iteration"],
      notes: [
        "The gap between a notebook and a customer environment is where most AI projects stall.",
        "Own troubleshooting: bad retrieval, missing files, unclear UX, model timeouts.",
        "Forward deployed work means changing the system from observed usage, not from a slide.",
        "Reliability is a feature. A slightly simpler system that stays up beats a clever one that flakes.",
      ],
      takeaways: [
        "Ship the thinnest system that can be used.",
        "Instrument the workflow, not only the model call.",
        "Iterate in the customer's context.",
      ],
    },
  ] satisfies LabExperiment[],
  experience: [
    {
      company: "Supervity",
      title: "AI Developer",
      dateRange: "Jan 2026 - Present",
      location: "Remote",
      bullets: [
        "Collaborate closely with customers and internal teams to deploy AI solutions in real-world environments, owning deployment, troubleshooting, and optimization of AI systems in production settings",
        "Translate ambiguous business problems into actionable technical requirements and AI-driven systems",
        "Customize, integrate, and iterate AI models and workflows to meet client-specific needs",
        "Act as a bridge between product, engineering, and stakeholders to ensure successful adoption",
        "Officially joined Supervity in 2026 (working from Aug 2025)",
      ],
    },
    {
      company: "ATLAS Skill Tech University",
      title: "AI Developer",
      dateRange: "Aug 2025 - Dec 2025",
      location: "Mumbai",
      bullets: [
        "Developed and deployed multiple AI models contributing to advanced projects that streamline operational processes and drive university-wide automation",
        "Gained hands-on experience in natural language processing, automation, and intelligent system design",
        "Enhanced efficiency across departments, demonstrating the impactful role of AI in education and institutional management",
        "Integrated and worked alongside Supervity, collaborating on AI deployments and real-world implementations",
      ],
    },
    {
      company: "366 DIGITX",
      title: "Data Analyst & Developer",
      dateRange: "Feb 2024 - Jul 2025",
      location: "Mumbai",
      bullets: [
        "Developed and maintained responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript",
        "Created interactive dashboards and data visualizations using Python and Power BI to present key business metrics, enabling data-driven decision-making",
        "Collaborated with cross-functional teams to integrate analytical solutions into existing business workflows, improving data accessibility and operational efficiency",
      ],
    },
    {
      company: "Codsoft",
      title: "Data Science Intern",
      dateRange: "Sep 2023 - Oct 2023",
      location: "Mumbai",
      bullets: [
        "Gained a solid foundation in data science through three core projects covering data exploration, preprocessing, model building, and evaluation",
      ],
    },
  ] satisfies Experience[],
  education: [
    {
      school: "University of Mumbai",
      degree: "B.E. in Artificial Intelligence and Data Science",
      dateRange: "Sep 2021 - May 2025",
      location: "Mumbai, India",
      achievements: [
        "GPA: 3.5/4.0",
        "Coursework: Operating Systems, Machine Learning, Computer Architecture & Digital Logic, Microprocessors, Blockchain, Data Warehouse and Mining, Web Computing, Statistics, Distributed Computing",
      ],
    },
  ] satisfies Education[],
  assistant: {
    greeting: "Ask me anything about Noman's work.",
    suggested: [
      "What AI systems has Noman built?",
      "What is his strongest project?",
      "What technologies does he use?",
      "Tell me about his FDE experience.",
      "Why should I hire him?",
      "Show me his GenAI projects.",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
