if (sessionStorage.getItem("amatxu_acceso") !== "1") {
    window.location.replace("index.html");
}

const personas = {
    antonia: {
        nombre: "Amama Antonia",
        rol: "Abuela paterna",
        inicial: "A",
        foto: "img/arbol/amamaant.jpg",
        frase: "Se vaciaba por los demás sin hacer ruido, sin pedir nada, sin guardar nada para ella. Nunca he conocido a nadie mejor, y sé que nunca lo haré."
    },
    anselmo: {
        nombre: "Aitite Anselmo",
        rol: "Abuelo materno",
        inicial: "A",
        foto: "img/arbol/aitite.jpg",
        frase: "El abuelo que sembró en Ama todo lo que ella luego nos daría a nosotros."
    },
    tere: {
        nombre: "Amama Tere",
        rol: "Abuela materna",
        inicial: "T",
        foto: "img/arbol/amamater.jpg",
        frase: "De ella heredó Ama su ternura y esa sonrisa que ilumina cualquier cuarto."
    },
    aita: {
        nombre: "Aita",
        rol: "Tu marido",
        inicial: "A",
        foto: "img/arbol/aita.jpg",
        frase: "El hombre que eligió bien. Juntos formasteis la familia más bonita del mundo."
    },
    auro: {
        nombre: "Tía Auro",
        rol: "Hermana de Aita",
        inicial: "Au",
        foto: "img/arbol/tia.jpg",
        frase: "La tía que siempre ha estado ahí, con una sonrisa y los brazos abiertos."
    },
    ama: {
        nombre: "Ama",
        rol: "Mi madre ❤️",
        inicial: "M",
        foto: "img/arbol/ama.jpg",
        frase: "El centro de todo. La persona que hizo de nuestra casa un hogar con solo estar en él."
    },
    endika: {
        nombre: "Endika",
        rol: "Tu hijo",
        inicial: "E",
        foto: "img/arbol/endika.jpg",
        frase: "El que más te quiere, aunque no siempre lo diga :)"
    }
};

function abrirModal(id) {
    const p = personas[id];
    if (!p) return;

    document.getElementById("modalNombre").textContent = p.nombre;
    document.getElementById("modalRol").textContent = p.rol;
    document.getElementById("modalFrase").textContent = p.frase;
    document.getElementById("modalInicial").textContent = p.inicial;

    const img = document.getElementById("modalImg");
    if (p.foto) {
        img.src = p.foto;
        img.style.display = "block";
        document.getElementById("modalInicial").style.display = "none";
    } else {
        img.style.display = "none";
        document.getElementById("modalInicial").style.display = "flex";
    }

    document.getElementById("arbolModalBg").classList.add("show");
    document.body.style.overflow = "hidden";
}

function cerrarModal(e) {
    if (e && e.target !== document.getElementById("arbolModalBg")) return;
    document.getElementById("arbolModalBg").classList.remove("show");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") cerrarModal(null);
});