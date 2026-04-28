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
        if (input.value.length > maxLen) {
            input.value = input.value.slice(0, maxLen);
        }
    });
    input.addEventListener("keydown", (e) => {
        const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
        if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
        if (input.value.length >= maxLen && !allowed.includes(e.key)) {
            e.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const ddInput = document.getElementById("dd");
    const mmInput = document.getElementById("mm");
    const yyyyInput = document.getElementById("yyyy");
    const errorDiv = document.getElementById("error");

    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");

    // Limitar longitud máxima
    limitarInput(ddInput, 2);
    limitarInput(mmInput, 2);
    limitarInput(yyyyInput, 4);

    /* ── Avance automático entre campos ── */
    ddInput.addEventListener("input", () => {
        if (ddInput.value.length >= 2) mmInput.focus();
    });
    mmInput.addEventListener("input", () => {
        if (mmInput.value.length >= 2) yyyyInput.focus();
    });
    yyyyInput.addEventListener("keydown", e => {
        if (e.key === "Enter") comprobarFecha();
    });

    /* ── Validación y acceso ── */
    window.comprobarFecha = function () {
        const dia = parseInt(ddInput.value, 10);
        const mes = parseInt(mmInput.value, 10);
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
            document.getElementById("login-screen").style.display = "none";
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
            setTimeout(() => document.getElementById("modal1").classList.add("show"), 300);
        } else {
            errorDiv.textContent = mensajes[intentos] || "Ya no sabes ni lo que poner 🤣";
            intentos++;
            const box = document.querySelector(".login-box");
            box.style.animation = "none";
            box.offsetHeight;
            box.style.animation = "shake 0.4s ease";
        }
    };

    /* ── Modal 2 ── */
    window.siguienteModal = function () {
        document.getElementById("modal1").classList.remove("show");
        setTimeout(() => document.getElementById("modal2").classList.add("show"), 150);
    };
    document.getElementById("modal2").addEventListener("click", e => {
        if (!e.target.closest(".modal-box")) e.currentTarget.classList.remove("show");
    });
});