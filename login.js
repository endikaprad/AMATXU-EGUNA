const FECHA_CORRECTA_DIA = 12;
const FECHA_CORRECTA_MES = 9;
const FECHA_CORRECTA_ANYO = 1971;

let intentos = 0;
const mensajes = [
    "No cuela eh 😏",
    "Piensa un poco 🤔",
    "Casi… 😂",
    "Te acercas 😅",
    "Última oportunidad 😈"
];

function limitarInput(input, maxLen) {
    input.addEventListener("input", () => {
        if (input.value.length > maxLen) input.value = input.value.slice(0, maxLen);
    });
    input.addEventListener("keydown", (e) => {
        const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
        if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) e.preventDefault();
        if (input.value.length >= maxLen && !allowed.includes(e.key)) e.preventDefault();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const loginScreen = document.getElementById("login-screen");
    const overlay     = document.getElementById("welcome-overlay");

    // Si ya autenticó en esta sesión del navegador, saltamos el login directamente
    if (sessionStorage.getItem("amatxu_acceso") === "1") {
        if (loginScreen) loginScreen.style.display = "none";
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
        return;
    }

    const ddInput   = document.getElementById("dd");
    const mmInput   = document.getElementById("mm");
    const yyyyInput = document.getElementById("yyyy");
    const errorDiv  = document.getElementById("error");

    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");

    limitarInput(ddInput, 2);
    limitarInput(mmInput, 2);
    limitarInput(yyyyInput, 4);

    ddInput.addEventListener("input",   () => { if (ddInput.value.length   >= 2) mmInput.focus();   });
    mmInput.addEventListener("input",   () => { if (mmInput.value.length   >= 2) yyyyInput.focus(); });
    yyyyInput.addEventListener("keydown", e => { if (e.key === "Enter") comprobarFecha(); });

    function cerrarOverlay() {
        overlay.style.transition = "";
        overlay.style.opacity    = "";
        overlay.offsetHeight;
        overlay.style.transition = "opacity 0.9s ease, transform 0.9s cubic-bezier(0.4,0,0.2,1)";
        overlay.style.opacity    = "0";
        overlay.style.transform  = "scale(1.04)";
        setTimeout(() => {
            overlay.style.display = "none";
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }, 900);
    }

    function mostrarPaso2() {
        overlay.style.transition = "opacity 0.3s ease";
        overlay.style.opacity    = "0";
        setTimeout(() => {
            overlay.innerHTML = `
                <span class="welcome-flower">😂</span>
                <div class="welcome-line" style="opacity:1"></div>
                <p class="welcome-text" style="opacity:1">Qué bien se te da <em>mentir</em></p>
                <p class="welcome-tap">Toca para continuar</p>
            `;
            overlay.style.transition = "opacity 0.5s ease";
            overlay.style.opacity    = "1";
            overlay.addEventListener("click", cerrarOverlay, { once: true });
        }, 300);
    }

    function entrar() {
        sessionStorage.setItem("amatxu_acceso", "1");   // ← persiste sesión
        loginScreen.classList.add("fade-out");
        setTimeout(() => {
            loginScreen.style.display = "none";
            overlay.classList.add("show");
            document.getElementById("btn-hare-caso")
                .addEventListener("click", mostrarPaso2, { once: true });
        }, 700);
    }

    window.comprobarFecha = function () {
        const dia  = parseInt(ddInput.value, 10);
        const mes  = parseInt(mmInput.value, 10);
        const anyo = parseInt(yyyyInput.value, 10);

        if (isNaN(dia) || isNaN(mes) || isNaN(anyo)) {
            errorDiv.textContent = "Rellena todos los campos 😊";
            return;
        }
        if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anyo < 1900 || anyo > 2099) {
            errorDiv.textContent = mensajes[intentos] || "Eso no parece una fecha válida 🤨";
            return;
        }
        if (dia === FECHA_CORRECTA_DIA && mes === FECHA_CORRECTA_MES && anyo === FECHA_CORRECTA_ANYO) {
            entrar();
        } else {
            errorDiv.textContent = mensajes[intentos] || "Ya no sabes ni lo que poner 🤣";
            intentos++;
            const box = document.querySelector(".login-box");
            box.style.animation = "none";
            box.offsetHeight;
            box.style.animation = "shake 0.4s ease";
        }
    };
});