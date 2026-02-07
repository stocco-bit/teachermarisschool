const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("show");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  const clickedInside = e.target.closest(".nav");
  if (!clickedInside) {
    menu.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  }
});
