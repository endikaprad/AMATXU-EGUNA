/* ═══════════════════════════════════════════════
   VÍDEOS — v2 OPTIMIZADO
   ✅ connection-aware: en 2G/slow-3G desactiva autoplay
   ✅ placeholder SVG mientras carga (sin layout shift)
   ✅ un solo IntersectionObserver para todos los vídeos
   ✅ pausa inmediata al salir del viewport (libera CPU/RAM)
   ✅ manejo de errores silencioso en play()
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
    /* ── Detecta conexión lenta ── */
    const conn =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
    const esConexionLenta = conn
        ? conn.saveData || ["slow-2g", "2g"].includes(conn.effectiveType)
        : false;

    /* ── Placeholder SVG inline para evitar espacio vacío ── */
    function setPlaceholder(video) {
        const w = video.offsetWidth || 300;
        const h = video.offsetHeight || 200;
        // Fondo oscuro sepia mientras carga — sin petición de red
        if (!video.poster) {
            video.poster = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'%3E%3Crect width='100%25' height='100%25' fill='%231a0a08'/%3E%3C/svg%3E`;
        }
    }

    /* ── Preprocesar todos los vídeos antes del observer ── */
    const videos = document.querySelectorAll("video[data-src]");
    videos.forEach((video) => {
        setPlaceholder(video);

        // En conexión lenta: sólo carga el primer fotograma, no hace autoplay
        if (esConexionLenta) {
            video.preload = "none";
        }
    });

    /* ── IntersectionObserver unificado ── */
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                if (video.dataset.src && !video.getAttribute("src")) {
                    video.setAttribute("src", video.dataset.src);
                    video.load();
                }
                if (!esConexionLenta) {
                    video.play().catch(() => { });
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px 800px 0px" // ← antes era 200px, ahora empieza a cargar 800px antes
    });

    videos.forEach((v) => videoObserver.observe(v));

    /* ── Si cambia la conexión en tiempo real, detener reproducciones ── */
    if (conn) {
        conn.addEventListener("change", () => {
            if (["slow-2g", "2g"].includes(conn.effectiveType) || conn.saveData) {
                document.querySelectorAll("video").forEach((v) => v.pause());
            }
        });
    }
});
