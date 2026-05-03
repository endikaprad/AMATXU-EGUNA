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
    // Galería 0 — Infancia
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
    ],
    // Galería 1 — Juventud
    [
        "img/juv/juv1.webp",
        "img/juv/juv2.webp",
        "img/juv/juv3.webp",
        "img/juv/juv4.webp",
        "img/juv/juv5.webp",
        "img/juv/juv6.webp",
        "img/juv/juv7.webp",
        "img/juv/juv8.webp",
        "img/juv/juv9.webp",
        "img/juv/juv10.webp",
        "img/juv/juv11.webp",
        "img/juv/juv12.webp",
        "img/juv/juv13.webp",
        "img/juv/juv14.webp",
        "img/juv/juv15.webp",
        "img/juv/juv16.webp",
        "img/juv/juv17.webp",
        "img/juv/juv18.webp",
        "img/juv/juv19.webp",
        "img/juv/juv20.webp",
        "img/juv/juv21.webp",
        "img/juv/juv22.webp",
        "img/juv/juv23.webp",
        "img/juv/juv24.webp",
        "img/juv/juv25.webp",
        "img/juv/juv26.webp",
        "img/juv/juv27.webp",
        "img/juv/juv28.webp",
        "img/juv/juv29.webp",
        "img/juv/juv30.webp",
        "img/juv/juv31.webp",
        "img/juv/juv32.webp",
        "img/juv/juv33.webp",
        "img/juv/juv34.webp",
        "img/juv/juv35.webp",
        "img/juv/juv36.webp",
        "img/juv/juv37.webp",
        "img/juv/juv38.webp",
        "img/juv/juv39.webp",
        "img/juv/juv40.webp",
        "img/juv/juv41.webp",
        "img/juv/juv42.webp",
        "img/juv/juv43.webp",
        "img/juv/juv44.webp",
        "img/juv/juv45.webp",
        "img/juv/juv46.webp",
        "img/juv/juv47.webp",
        "img/juv/juv48.webp",
        "img/juv/juv49.webp",
        "img/juv/juv50.webp",
        "img/juv/juv51.webp",
        "img/juv/juv52.webp",
        "img/juv/juv53.webp",
        "img/juv/juv54.webp",
        "img/juv/juv55.webp",
        "img/juv/juv56.webp",
        "img/juv/juv57.webp",
        "img/juv/juv58.webp",
        "img/juv/juv59.webp",
        "img/juv/juv60.webp",
        "img/juv/juv61.webp",
        "img/juv/juv62.webp",
        "img/juv/juv63.webp",
        "img/juv/juv64.webp",
        "img/juv/juv65.webp",
        "img/juv/juv66.webp",
        "img/juv/juv67.webp",
        "img/juv/juv68.webp",
        "img/juv/juv69.webp",
        "img/juv/juv70.webp",
        "img/juv/juv71.webp",
        "img/juv/juv72.webp",
        "img/juv/juv73.webp",
        "img/juv/juv74.webp",
        "img/juv/juv75.webp",
        "img/juv/juv76.webp",
        "img/juv/juv77.webp",
        "img/juv/juv78.webp",
        "img/juv/juv79.webp",
        "img/juv/juv80.webp",
        "img/juv/juv81.webp",
        "img/juv/juv82.webp",
    ],
    // Galería 2 — Boda
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
    // Galería 3 — Nacimiento
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
        "img/naci/naci45.webp",
        "img/naci/naci46.webp",
        "img/naci/naci47.webp",
        "img/naci/naci48.webp",
        "img/naci/naci49.webp",
        "img/naci/naci50.webp",
    ],
    // Galería 4 — Amama
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
        "img/amam/amam33.webp",
        "img/amam/amam34.webp",
        "img/amam/amam35.webp",
        "img/amam/amam36.webp",
        "img/amam/amam37.webp",
        "img/amam/amam38.webp",
        "img/amam/amam39.webp",
        "img/amam/amam40.webp",
        "img/amam/amam41.webp",
        "img/amam/amam42.webp",
        "img/amam/amam43.webp",
        "img/amam/amam44.webp",
        "img/amam/amam45.webp",
        "img/amam/amam46.webp",
        "img/amam/amam47.webp",
        "img/amam/amam48.webp",
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

    if (g === 4) {
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