/* ═══════════════════════════════════════════════
   VÍDEOS — Lazy load + autoplay al entrar en pantalla
   ✅ OPT: ahora también gestiona .era-film-img (era 1971)
   ✅ OPT: selector unificado — un solo observer para todos los vídeos con data-src
   ✅ OPT: manejo de errores silencioso en play()
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            // ✅ OPT: lazy-load — solo asigna el src la primera vez que es visible
            if (entry.isIntersecting && video.dataset.src && !video.getAttribute("src")) {
                video.setAttribute("src", video.dataset.src);
                video.load();
            }

            if (entry.isIntersecting) {
                // play() devuelve una Promise; el catch silencia el error si el navegador
                // bloquea el autoplay (frecuente en móvil antes de interacción del usuario)
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.15 });

    // Cubre TODOS los vídeos con data-src:
    //   .section-video  → eras de fondo
    //   .era-film-img   → vídeo polaroid de 1971
    //   .amama-vid      → vídeos sección Amama
    document.querySelectorAll("video[data-src]").forEach(v => videoObserver.observe(v));

});