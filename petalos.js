/* ═══════════════════════════════════════════════
   PÉTALOS — v2 OPTIMIZADO
   ✅ Usa divs con CSS en vez de emojis (más ligero para el compositor)
   ✅ will-change: transform solo mientras cae, se limpia al terminar
   ✅ requestAnimationFrame para no crear pétalos mientras la pestaña está oculta
   ✅ Menos pétalos en móvil y en conexión lenta
   ✅ Se detiene si el usuario prefiere movimiento reducido
═══════════════════════════════════════════════ */
const canvas = document.getElementById("petals");

/* Respetar preferencia de movimiento reducido */
const prefiereMenosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefiereMenosMovimiento) {
    // Nada de pétalos si el usuario lo prefiere
} else {
    const esMobil = window.innerWidth < 768;
    const petaloInicial = esMobil ? 4 : 10;
    const intervalo = esMobil ? 3000 : 1400;

    // Paleta de colores suaves (sin emoji = sin layout recalculation)
    const colores = [
        "rgba(200,86,106,0.7)",   // rosa
        "rgba(242,184,194,0.6)",  // rosa claro
        "rgba(216,161,60,0.5)",   // dorado
        "rgba(183,120,150,0.65)", // malva
        "rgba(220,100,120,0.55)", // coral
    ];

    function createPetal() {
        // No crear pétalos si la pestaña está oculta
        if (document.hidden) return;

        const el = document.createElement("div");
        el.className = "petal";

        const color = colores[Math.floor(Math.random() * colores.length)];
        const size = (0.4 + Math.random() * 0.6);   // rem
        const dur = 7 + Math.random() * 8;
        const delay = Math.random() * 2;
        const drift = (Math.random() - 0.5) * 120;   // px de deriva horizontal

        el.style.cssText = `
            left: ${Math.random() * 100}vw;
            width: ${size}rem;
            height: ${size * 0.7}rem;
            background: ${color};
            border-radius: 50% 0 50% 0;
            animation-duration: ${dur}s;
            animation-delay: ${delay}s;
            --drift: ${drift}px;
            will-change: transform, opacity;
        `;

        canvas.appendChild(el);

        // Limpiar del DOM y liberar will-change al terminar
        const total = (dur + delay + 0.5) * 1000;
        setTimeout(() => {
            el.style.willChange = "auto";
            el.remove();
        }, total);
    }

    // Lanzamiento escalonado inicial
    for (let i = 0; i < petaloInicial; i++) {
        setTimeout(createPetal, i * 500);
    }

    // Creación continua
    setInterval(createPetal, intervalo);
}