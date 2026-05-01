/* ═══════════════════════════════════════════════
   NAVBAR — menú flotante central
   Detecta la página actual y marca el item activo
   Cierra al hacer click fuera o en un enlace
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("navToggle");
  const menu   = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  /* ── Abrir / cerrar ── */
  function abrirMenu() {
    menu.classList.add("open");
    toggle.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
  }

  function cerrarMenu() {
    menu.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    menu.classList.contains("open") ? cerrarMenu() : abrirMenu();
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  /* ── Cerrar al click fuera ── */
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      cerrarMenu();
    }
  });

  /* ── Cerrar con Escape ── */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarMenu();
  });

  /* ── Cerrar al tocar un enlace ── */
  menu.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      setTimeout(cerrarMenu, 180);
    });
  });

  /* ── Marcar página activa ── */
  const pagina = window.location.pathname.split("/").pop() || "index.html";
  menu.querySelectorAll(".nav-item[data-page]").forEach(item => {
    if (item.dataset.page === pagina) item.classList.add("active");
  });

});