const HOVER_SELECTOR =
  "a, button, [role='button'], label, summary, [data-theme-toggle], [data-open-assistant], .orch-agent, .orch-agent, .glass-hover";

const TEXT_SELECTOR = "input, textarea, select, [contenteditable='true']";

export function initCursor() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  const root = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  const dot = document.getElementById("cursor-dot");
  if (!root || !ring || !dot) return;

  document.documentElement.classList.add("has-custom-cursor");
  root.classList.add("is-ready");

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lag = reduced ? 1 : 0.18;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let visible = false;
  let raf = 0;

  const setHover = (target: EventTarget | null) => {
    if (!(target instanceof Element)) {
      root.classList.remove("is-hover", "is-text");
      return;
    }
    const text = Boolean(target.closest(TEXT_SELECTOR));
    const hover = !text && Boolean(target.closest(HOVER_SELECTOR));
    root.classList.toggle("is-text", text);
    root.classList.toggle("is-hover", hover);
  };

  const tick = () => {
    ringX += (mouseX - ringX) * lag;
    ringY += (mouseY - ringY) * lag;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    raf = requestAnimationFrame(tick);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) {
        visible = true;
        ringX = mouseX;
        ringY = mouseY;
        root.classList.add("is-on");
      }
      setHover(event.target);
    },
    { passive: true }
  );

  window.addEventListener("pointerdown", () => root.classList.add("is-down"));
  window.addEventListener("pointerup", () => root.classList.remove("is-down"));
  document.addEventListener("mouseleave", () => {
    visible = false;
    root.classList.remove("is-on", "is-hover", "is-text", "is-down");
  });
  window.addEventListener("blur", () => root.classList.remove("is-down"));

  raf = requestAnimationFrame(tick);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(raf));
}
