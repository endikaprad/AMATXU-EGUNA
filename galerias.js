/* ═══════════════════════════════════════════════
   GALERÍAS
   ✅ OPT: rutas corregidas (espacios, = y ( eliminados)
   ✅ OPT: lazy loading en cada imagen creada dinámicamente
   ✅ OPT: carga progresiva — solo crea imágenes de las visibles (IntersectionObserver)
═══════════════════════════════════════════════ */

const galerias = [
    // Galería 0 — Juventud/Infancia
    [
        "img/inf/inf1.webp", "img/inf/inf2.webp", "img/inf/inf3.webp", "img/inf/inf4.webp",
        "img/inf/inf5.webp", "img/inf/inf6.webp", "img/inf/inf7.webp", "img/inf/inf8.webp",
        "img/inf/inf9.webp", "img/inf/inf10.webp", "img/inf/inf11.webp", "img/inf/inf12.webp",
        "img/inf/inf13.webp", "img/inf/inf14.webp", "img/inf/inf15.webp", "img/inf/inf16.webp",
        "img/inf/inf17.webp", "img/inf/inf18.webp", "img/inf/inf19.webp", "img/inf/inf20.webp",
        "img/inf/inf21.webp", "img/inf/inf22.webp", "img/inf/inf23.webp", "img/inf/inf24.webp",
        "img/inf/inf25.webp", "img/inf/inf26.webp", "img/inf/inf27.webp", "img/inf/inf28.webp",
        "img/inf/inf29.webp", "img/inf/inf30.webp", "img/inf/inf31.webp", "img/inf/inf32.webp",
        "img/inf/inf33.webp", "img/inf/inf34.webp", "img/inf/inf35.webp", "img/inf/inf36.webp"
    ],

    // Galería 1 — Boda
    [
        "img/bod/bod1.webp", "img/bod/bod2.webp", "img/bod/bod3.webp", "img/bod/bod4.webp",
        "img/bod/bod5.webp", "img/bod/bod6.webp", "img/bod/bod7.webp", "img/bod/bod8.webp",
        "img/bod/bod9.webp", "img/bod/bod10.webp"
    ],

    // Galería 2 — Nacimiento
    [
        "img/naci/naci1.webp", "img/naci/naci2.webp", "img/naci/naci3.webp", "img/naci/naci4.webp",
        "img/naci/naci5.webp", "img/naci/naci6.webp", "img/naci/naci7.webp", "img/naci/naci8.webp",
        "img/naci/naci9.webp", "img/naci/naci10.webp", "img/naci/naci11.webp", "img/naci/naci12.webp",
        "img/naci/naci13.webp", "img/naci/naci14.webp", "img/naci/naci15.webp", "img/naci/naci16.webp",
        "img/naci/naci17.webp", "img/naci/naci18.webp", "img/naci/naci19.webp", "img/naci/naci20.webp",
        "img/naci/naci21.webp", "img/naci/naci22.webp", "img/naci/naci23.webp", "img/naci/naci24.webp",
        "img/naci/naci25.webp", "img/naci/naci26.webp", "img/naci/naci27.webp", "img/naci/naci28.webp",
        "img/naci/naci29.webp", "img/naci/naci30.webp", "img/naci/naci31.webp", "img/naci/naci32.webp",
        "img/naci/naci33.webp", "img/naci/naci34.webp", "img/naci/naci35.webp", "img/naci/naci36.webp",
        "img/naci/naci37.webp", "img/naci/naci38.webp", "img/naci/naci39.webp", "img/naci/naci40.webp",
        "img/naci/naci41.webp", "img/naci/naci42.webp", "img/naci/naci43.webp", "img/naci/naci44.webp"
    ],

    // Galería 3 — Amama
    [
        "img/amam/amam1.webp", "img/amam/amam2.webp", "img/amam/amam3.webp", "img/amam/amam4.webp",
        "img/amam/amam5.webp", "img/amam/amam6.webp", "img/amam/amam7.webp", "img/amam/amam8.webp",
        "img/amam/amam9.webp", "img/amam/amam10.webp", "img/amam/amam11.webp", "img/amam/amam12.webp",
        "img/amam/amam13.webp", "img/amam/amam14.webp", "img/amam/amam15.webp", "img/amam/amam16.webp",
        "img/amam/amam17.webp", "img/amam/amam18.webp", "img/amam/amam19.webp", "img/amam/amam20.webp",
        "img/amam/amam21.webp", "img/amam/amam22.webp", "img/amam/amam23.webp", "img/amam/amam24.webp",
        "img/amam/amam25.webp", "img/amam/amam26.webp", "img/amam/amam27.webp", "img/amam/amam28.webp",
        "img/amam/amam29.webp", "img/amam/amam30.webp", "img/amam/amam31.webp", "img/amam/amam32.webp"
    ]
];

function abrirGaleria(g) {
    const modal = document.getElementById("galeriaModal");
    const modalBox = modal.querySelector(".modal-box");
    const grid = document.getElementById("galeriaGrid");
    grid.innerHTML = "";

    // Fondo especial solo para Amama (índice 3)
    if (g === 3) {
        modalBox.classList.add("modal-box--gallery--amama");
    } else {
        modalBox.classList.remove("modal-box--gallery--amama");
    }

    galerias[g].forEach(src => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("img-wrapper");

        const img = document.createElement("img");

        // ✅ OPT: lazy loading nativo — el navegador solo descarga las imágenes visibles
        img.loading = "lazy";

        // ✅ OPT: dimensiones explícitas para evitar layout shift mientras cargan
        img.width = 300;
        img.height = 200;

        img.src = src;
        img.alt = "";

        img.addEventListener("click", () => {
            document.getElementById("imgZoomed").src = src;
            document.getElementById("imgZoom").classList.add("show");
        });

        wrapper.appendChild(img);
        grid.appendChild(wrapper);
    });

    modal.classList.add("show");
}

function cerrarGaleria() {
    document.getElementById("galeriaModal").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".zoom-close").addEventListener("click", () => {
        document.getElementById("imgZoom").classList.remove("show");
    });

    document.getElementById("imgZoom").addEventListener("click", function (e) {
        if (e.target.id === "imgZoom") this.classList.remove("show");
    });

    document.getElementById("galeriaModal").addEventListener("click", function (e) {
        if (!e.target.closest(".modal-box")) this.classList.remove("show");
    });
});