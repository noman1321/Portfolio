const STORAGE_KEY = "portfolio-theme";

export function getTheme(): "light" | "dark" {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f3f5fb" : "#05060a");
}

export function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}

export function initTheme() {
  applyTheme(getTheme());
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    if (!(button instanceof HTMLElement) || button.dataset.themeBound === "1") return;
    button.dataset.themeBound = "1";
    button.addEventListener("click", () => toggleTheme());
  });
}
