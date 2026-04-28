/* ═══════════════════════════════════════════════
   PÉTALOS
   ✅ OPT: en móvil se reduce la cantidad y la frecuencia
           para no saturar la CPU de dispositivos lentos
═══════════════════════════════════════════════ */
const canvas = document.getElementById("petals");
const emojis = ["🌸", "🌺", "🌷", "💮", "🪷"];

// ✅ OPT: detecta móvil una sola vez al arrancar
const esMobil = window.innerWidth < 768;

// En móvil: menos pétalos iniciales y menos frecuencia de creación
const petaloInicial = esMobil ? 5 : 12;
const intervalo = esMobil ? 2400 : 1200;

function createPetal() {
    const el = document.createElement("span");
    el.className = "petal";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (0.8 + Math.random() * 1.2) + "rem";

    const dur = 6 + Math.random() * 8;
    el.style.animationDuration = dur + "s";
    el.style.animationDelay = Math.random() * 4 + "s";

    canvas.appendChild(el);

    // ✅ se elimina del DOM al terminar la animación para no acumular nodos
    setTimeout(() => el.remove(), (dur + 4) * 1000);
}

// Lanzamiento escalonado inicial
for (let i = 0; i < petaloInicial; i++) {
    setTimeout(createPetal, i * 400);
}

// Creación continua a ritmo reducido en móvil
setInterval(createPetal, intervalo);