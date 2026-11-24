import resumeUrl from "./assets/resume/Rajkumar_Resume.pdf?url";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  navLinks?.classList.toggle("open", !expanded);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href="assets/resume/Rajkumar_Resume.pdf"]').forEach((link) => {
  link.href = resumeUrl;
});

const copyButton = document.querySelector(".copy-email");
const toast = document.querySelector(".toast");
let toastTimer;

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyButton.innerHTML = 'Copied <span aria-hidden="true">✓</span>';
    toast.textContent = "Email address copied to clipboard";
  } catch {
    toast.textContent = `Email: ${email}`;
  }
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
    copyButton.innerHTML = 'Copy email <span aria-hidden="true">▢</span>';
  }, 2400);
});
