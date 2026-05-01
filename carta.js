/* ═══════════════════════════════════════════════
   CARTA — Lógica de animación
   1. Protección de sesión
   2. Generación de líneas de pauta
   3. Fecha dinámica en la carta
   4. Abrir sobre → desplegar carta
   5. IntersectionObserver para revelar párrafos
═══════════════════════════════════════════════ */

// ── 1. Protección de sesión ──
if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    sessionStorage.removeItem("amatxu_acceso");
    window.location.replace("index.html");
}
if (sessionStorage.getItem("amatxu_acceso") !== "1") {
    window.location.replace("index.html");
}

// ── 2. Estado global ──
let cartaAbierta = false;

document.addEventListener("DOMContentLoaded", () => {

    // ── Fecha en la carta ──
    const opciones = { day: "numeric", month: "long", year: "numeric" };
    const fechaHoy = new Date().toLocaleDateString("es-ES", opciones);
    const elFecha = document.getElementById("cartaFecha");
    if (elFecha) elFecha.textContent = `Laudio, ${fechaHoy}`;

    // ── Generar líneas de pauta ──
    const contenedor = document.getElementById("pautaLineas");
    if (contenedor) {
        // Calcula cuántas líneas caben según la altura estimada de la carta
        for (let i = 0; i < 80; i++) {
            const linea = document.createElement("div");
            linea.className = "pauta-linea";
            contenedor.appendChild(linea);
        }
    }

    // ── Sobre: click / Enter para abrir ──
    const sobreWrap = document.getElementById("sobreWrap");
    if (sobreWrap) {
        sobreWrap.addEventListener("click", abrirSobre);
        sobreWrap.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                abrirSobre();
            }
        });
    }

    // ── Observer para revelar elementos de la carta ──
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseFloat(el.dataset.delay || 0);
                setTimeout(() => {
                    el.classList.add("visible");
                }, delay);
                revealObs.unobserve(el);
            }
        });
    }, { threshold: 0.12 });

    // Asignar delays escalonados a cada elemento reveal
    document.querySelectorAll(".reveal-carta").forEach((el, i) => {
        el.dataset.delay = i * 120; // 120ms entre cada uno
        revealObs.observe(el);
    });

});

// ════════════════════════════════════════════
//  ABRIR SOBRE
// ════════════════════════════════════════════
function abrirSobre() {
    if (cartaAbierta) return;
    cartaAbierta = true;

    const sobre       = document.getElementById("sobre");
    const sobreWrap   = document.getElementById("sobreWrap");
    const cartaWrap   = document.getElementById("cartaWrap");
    const hint        = document.getElementById("sobreHint");
    const cartaFooter = document.getElementById("cartaFooter");

    

    // 1. Ocultar hint
    if (hint) {
        hint.style.transition = "opacity 0.3s";
        hint.style.opacity = "0";
        setTimeout(() => hint.remove(), 300);
    }

    // 2. Abrir la solapa del sobre
    if (sobre) sobre.classList.add("abierto");

    // 3. Pequeño shake de emoción
    if (sobreWrap) {
        setTimeout(() => {
            sobreWrap.style.animation = "shake 0.4s ease";
        }, 200);
    }

    // 4. Elevar y desvanecer el sobre
    setTimeout(() => {
        if (sobreWrap) {
            sobreWrap.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)";
            sobreWrap.style.opacity    = "0";
            sobreWrap.style.transform  = "translateY(-30px) scale(0.95)";
        }
    }, 700);

    // 5. Mostrar la carta
    setTimeout(() => {
        if (sobreWrap) sobreWrap.style.display = "none";

        if (cartaWrap) {
            cartaWrap.setAttribute("aria-hidden", "false");

            // Forzar reflow para que la transición arranque
            cartaWrap.offsetHeight;

            cartaWrap.classList.add("visible");

            // Animación de "salir del sobre" para la hoja
            const hoja = document.getElementById("cartaHoja");
            if (hoja) {
                hoja.style.animation = "salirDelSobre 0.9s cubic-bezier(0.34,1.1,0.64,1) both";
            }
        }
    }, 500);

    // 6. Mostrar footer al final
    setTimeout(() => {
        if (cartaFooter) {
            cartaFooter.style.display = "";
            cartaFooter.style.opacity = "0";
            cartaFooter.style.transition = "opacity 1s ease";
            cartaFooter.offsetHeight;
            cartaFooter.style.opacity = "1";
        }
    }, 2500);
}