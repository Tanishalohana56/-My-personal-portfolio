
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
}


if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("mode", body.classList.contains("dark") ? "dark" : "light");
  });
}
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  const existingLink = document.querySelector('link[href*="font-awesome"]');
  if (!existingLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);
  }

  // Ensure button label is correct on load (for project toggle)
  const wrapper = document.getElementById("projectsWrapper");
  const btn = document.querySelector("#projects .toggle-btn");
  if (wrapper && btn) {
    btn.textContent = wrapper.classList.contains("show") ? "Hide Projects" : "Show Projects";
  }
});
function toggleProjects() {
  const wrapper = document.getElementById("projectsWrapper");
  const btn = document.querySelector("#projects .toggle-btn");

  if (wrapper && btn) {
    wrapper.classList.toggle("show");
    btn.textContent = wrapper.classList.contains("show") ? "Hide Projects" : "Show Projects";
  }
}
