/* ═══════════════════════════════════════════════
   GALERÍAS — v2 OPTIMIZADO
   ✅ Paginación: carga solo 12 fotos iniciales
   ✅ Botón "Ver más" para cargar el resto bajo demanda
   ✅ Zoom con precarga de imagen (no espera al click)
   ✅ Skeleton loader mientras carga cada imagen
   ✅ lazy loading nativo en todos los imgs
   ✅ dimensiones explícitas para evitar CLS
═══════════════════════════════════════════════ */

const FOTOS_INICIAL = 12;

const galerias = [
    // Galería 0 — Juventud/Infancia
    [
        "img/inf/inf1.webp",
        "img/inf/inf2.webp",
        "img/inf/inf3.webp",
        "img/inf/inf4.webp",
        "img/inf/inf5.webp",
        "img/inf/inf6.webp",
        "img/inf/inf7.webp",
        "img/inf/inf8.webp",
        "img/inf/inf9.webp",
        "img/inf/inf10.webp",
        "img/inf/inf11.webp",
        "img/inf/inf12.webp",
        "img/inf/inf13.webp",
        "img/inf/inf14.webp",
        "img/inf/inf15.webp",
        "img/inf/inf16.webp",
        "img/inf/inf17.webp",
        "img/inf/inf18.webp",
        "img/inf/inf19.webp",
        "img/inf/inf20.webp",
        "img/inf/inf21.webp",
        "img/inf/inf22.webp",
        "img/inf/inf23.webp",
        "img/inf/inf24.webp",
        "img/inf/inf25.webp",
        "img/inf/inf26.webp",
        "img/inf/inf27.webp",
        "img/inf/inf28.webp",
        "img/inf/inf29.webp",
        "img/inf/inf30.webp",
        "img/inf/inf31.webp",
        "img/inf/inf32.webp",
        "img/inf/inf33.webp",
        "img/inf/inf34.webp",
        "img/inf/inf35.webp",
        "img/inf/inf36.webp",
        "img/inf/inf37.webp",
        "img/inf/inf38.webp",
        "img/inf/inf39.webp",
        "img/inf/inf40.webp",
        "img/inf/inf41.webp",
        "img/inf/inf42.webp",
        "img/inf/inf43.webp",
        "img/inf/inf44.webp",
        "img/inf/inf45.webp",
        "img/inf/inf46.webp",
        "img/inf/inf47.webp",
        "img/inf/inf48.webp",
        "img/inf/inf49.webp",
        "img/inf/inf50.webp",
        "img/inf/inf51.webp",
        "img/inf/inf52.webp",
        "img/inf/inf53.webp",
        "img/inf/inf54.webp",
        "img/inf/inf55.webp",
        "img/inf/inf56.webp",
        "img/inf/inf57.webp",
        "img/inf/inf58.webp",
        "img/inf/inf59.webp",
        "img/inf/inf60.webp",
        "img/inf/inf61.webp",
        "img/inf/inf62.webp",
        "img/inf/inf63.webp",
        "img/inf/inf64.webp",
        "img/inf/inf65.webp",
        "img/inf/inf66.webp",
        "img/inf/inf67.webp",
        "img/inf/inf68.webp",
        "img/inf/inf69.webp",
        "img/inf/inf70.webp",
        "img/inf/inf71.webp",
        "img/inf/inf72.webp",
        "img/inf/inf73.webp",
        "img/inf/inf74.webp",
        "img/inf/inf75.webp",
        "img/inf/inf76.webp",
        "img/inf/inf77.webp",
        "img/inf/inf78.webp",
        "img/inf/inf79.webp",
        "img/inf/inf80.webp",
        "img/inf/inf81.webp",
        "img/inf/inf82.webp",
        "img/inf/inf83.webp",
        "img/inf/inf84.webp",
    ],
    // Galería 1 — Boda
    [
        "img/bod/bod1.webp",
        "img/bod/bod2.webp",
        "img/bod/bod3.webp",
        "img/bod/bod4.webp",
        "img/bod/bod5.webp",
        "img/bod/bod6.webp",
        "img/bod/bod7.webp",
        "img/bod/bod8.webp",
        "img/bod/bod9.webp",
        "img/bod/bod10.webp",
        "img/bod/bod11.webp",
        "img/bod/bod12.webp",
        "img/bod/bod13.webp",
        "img/bod/bod14.webp",
    ],
    // Galería 2 — Nacimiento
    [
        "img/naci/naci1.webp",
        "img/naci/naci2.webp",
        "img/naci/naci3.webp",
        "img/naci/naci4.webp",
        "img/naci/naci5.webp",
        "img/naci/naci6.webp",
        "img/naci/naci7.webp",
        "img/naci/naci8.webp",
        "img/naci/naci9.webp",
        "img/naci/naci10.webp",
        "img/naci/naci11.webp",
        "img/naci/naci12.webp",
        "img/naci/naci13.webp",
        "img/naci/naci14.webp",
        "img/naci/naci15.webp",
        "img/naci/naci16.webp",
        "img/naci/naci17.webp",
        "img/naci/naci18.webp",
        "img/naci/naci19.webp",
        "img/naci/naci20.webp",
        "img/naci/naci21.webp",
        "img/naci/naci22.webp",
        "img/naci/naci23.webp",
        "img/naci/naci24.webp",
        "img/naci/naci25.webp",
        "img/naci/naci26.webp",
        "img/naci/naci27.webp",
        "img/naci/naci28.webp",
        "img/naci/naci29.webp",
        "img/naci/naci30.webp",
        "img/naci/naci31.webp",
        "img/naci/naci32.webp",
        "img/naci/naci33.webp",
        "img/naci/naci34.webp",
        "img/naci/naci35.webp",
        "img/naci/naci36.webp",
        "img/naci/naci37.webp",
        "img/naci/naci38.webp",
        "img/naci/naci39.webp",
        "img/naci/naci40.webp",
        "img/naci/naci41.webp",
        "img/naci/naci42.webp",
        "img/naci/naci43.webp",
        "img/naci/naci44.webp",
    ],
    // Galería 3 — Amama
    [
        "img/amam/amam1.webp",
        "img/amam/amam2.webp",
        "img/amam/amam3.webp",
        "img/amam/amam4.webp",
        "img/amam/amam5.webp",
        "img/amam/amam6.webp",
        "img/amam/amam7.webp",
        "img/amam/amam8.webp",
        "img/amam/amam9.webp",
        "img/amam/amam10.webp",
        "img/amam/amam11.webp",
        "img/amam/amam12.webp",
        "img/amam/amam13.webp",
        "img/amam/amam14.webp",
        "img/amam/amam15.webp",
        "img/amam/amam16.webp",
        "img/amam/amam17.webp",
        "img/amam/amam18.webp",
        "img/amam/amam19.webp",
        "img/amam/amam20.webp",
        "img/amam/amam21.webp",
        "img/amam/amam22.webp",
        "img/amam/amam23.webp",
        "img/amam/amam24.webp",
        "img/amam/amam25.webp",
        "img/amam/amam26.webp",
        "img/amam/amam27.webp",
        "img/amam/amam28.webp",
        "img/amam/amam29.webp",
        "img/amam/amam30.webp",
        "img/amam/amam31.webp",
        "img/amam/amam32.webp",
    ],
];

/* Estado de la galería actualmente abierta */
let galeriaActual = -1;
let paginaActual = 0;

/* ── Crea un elemento imagen con skeleton ── */
function crearImgWrapper(src, index) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("img-wrapper");
    // Skeleton visible hasta que cargue
    wrapper.classList.add("img-skeleton");

    const img = document.createElement("img");
    img.loading = "lazy";
    img.width = 300;
    img.height = 200;
    img.src = src;
    img.alt = "";
    img.decoding = "async"; // no bloquea el hilo principal

    // Quitar skeleton cuando cargue
    img.addEventListener("load", () => wrapper.classList.remove("img-skeleton"), {
        once: true,
    });

    // En crearImgWrapper — sustituye el click del img
    img.addEventListener("click", () => {
        const zoom = document.getElementById("imgZoom");
        const zoomed = document.getElementById("imgZoomed");

        // Guardar posición de la miniatura para la animación de cierre
        const rect = img.getBoundingClientRect();
        zoom.dataset.originX = rect.left + rect.width / 2;
        zoom.dataset.originY = rect.top + rect.height / 2;

        zoomed.src = src;
        zoom.classList.remove("closing");
        zoom.classList.add("show");
    });

    // Precargar imagen de zoom al pasar el ratón (o touch start en móvil)
    const preload = () => {
        new Image().src = src;
    };
    wrapper.addEventListener("mouseenter", preload, { once: true });
    wrapper.addEventListener("touchstart", preload, {
        once: true,
        passive: true,
    });

    wrapper.appendChild(img);
    return wrapper;
}

/* ── Renderiza la siguiente página de fotos ── */
function renderPagina(g, pagina) {
    const fotos = galerias[g];
    const desde = pagina * FOTOS_POR_PAGINA;
    const hasta = Math.min(desde + FOTOS_POR_PAGINA, fotos.length);
    const grid = document.getElementById("galeriaGrid");

    const btnAnterior = document.getElementById("btnVerMas");
    if (btnAnterior) btnAnterior.remove();

    // ← Insertar fotos escalonadas, una cada 40ms
    for (let i = desde; i < hasta; i++) {
        setTimeout(
            () => {
                grid.appendChild(crearImgWrapper(fotos[i], i));

                // Añadir el botón solo tras la última foto
                if (i === hasta - 1 && hasta < fotos.length) {
                    const btn = document.createElement("button");
                    btn.id = "btnVerMas";
                    btn.className = "galeria-ver-mas";
                    btn.textContent = `Ver más (${fotos.length - hasta} restantes)`;
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        paginaActual++;
                        renderPagina(galeriaActual, paginaActual);
                    });
                    grid.appendChild(btn);
                }
            },
            (i - desde) * 40,
        ); // ← 40ms entre foto y foto
    }
}

function abrirGaleria(g) {
    galeriaActual = g;
    const modal = document.getElementById("galeriaModal");
    const modalBox = modal.querySelector(".modal-box");
    const grid = document.getElementById("galeriaGrid");
    grid.innerHTML = "";

    if (g === 3) {
        modalBox.classList.add("modal-box--gallery--amama");
    } else {
        modalBox.classList.remove("modal-box--gallery--amama");
    }

    const fotos = galerias[g];

    // Cargar las primeras 6
    for (let i = 0; i < Math.min(FOTOS_INICIAL, fotos.length); i++) {
        setTimeout(() => grid.insertBefore(crearImgWrapper(fotos[i], i), document.getElementById("btnVerMas")), i * 40);
    }

    // Botón ver más si hay más fotos
    if (fotos.length > FOTOS_INICIAL) {
        const btn = document.createElement("button");
        btn.id = "btnVerMas";
        btn.className = "galeria-ver-mas";
        btn.textContent = `Ver todas (${fotos.length - FOTOS_INICIAL} más)`;
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            btn.remove();
            // Cargar el resto de golpe escalonado
            for (let i = FOTOS_INICIAL; i < fotos.length; i++) {
                setTimeout(() => grid.appendChild(crearImgWrapper(fotos[i], i)), (i - FOTOS_INICIAL) * 40);
            }
        });
        grid.appendChild(btn);
    }

    modal.classList.add("show");
}

function cerrarGaleria() {
    document.getElementById("galeriaModal").classList.remove("show");
    // Limpiar el grid al cerrar para liberar memoria
    setTimeout(() => {
        if (!document.getElementById("galeriaModal").classList.contains("show")) {
            document.getElementById("galeriaGrid").innerHTML = "";
        }
    }, 400);
}

function cerrarZoom() {
    const zoom = document.getElementById("imgZoom");
    const zoomed = document.getElementById("imgZoomed");

    const originX = zoom.dataset.originX || window.innerWidth / 2;
    const originY = zoom.dataset.originY || window.innerHeight / 2;

    // Transform-origin apunta al origen de la miniatura
    const rect = zoomed.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = originX - cx;
    const dy = originY - cy;

    zoomed.style.setProperty("--close-dx", `${dx}px`);
    zoomed.style.setProperty("--close-dy", `${dy}px`);

    zoom.classList.add("closing");
    setTimeout(() => {
        zoom.classList.remove("show", "closing");
        zoomed.style.removeProperty("--close-dx");
        zoomed.style.removeProperty("--close-dy");
    }, 200);
}

document.querySelector(".zoom-close").addEventListener("click", cerrarZoom);
document.getElementById("imgZoom").addEventListener("click", function (e) {
    if (e.target.id === "imgZoom") cerrarZoom();
});