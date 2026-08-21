export function initAnimations() {
  if (typeof window === "undefined") return;

  const reveal = () => {
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el, index) => {
      el.style.animationDelay = `${index * 80}ms`;
      el.classList.add("is-visible");
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", reveal);
  } else {
    reveal();
  }

  import("gsap")
    .then(({ gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0.88, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 88%", once: true },
            }
          );
        });
      })
    )
    .catch(() => undefined);
}
