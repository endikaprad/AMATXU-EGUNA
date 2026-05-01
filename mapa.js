// ── Protección de sesión ──
if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    sessionStorage.removeItem("amatxu_acceso");
    window.location.replace("index.html");
}
if (sessionStorage.getItem("amatxu_acceso") !== "1") {
    window.location.replace("index.html");
}

// ════════════════════════════════
//  DATOS DE LOS LUGARES
//  ✏️  Edita aquí los lugares importantes de tu madre
// ════════════════════════════════
const lugares = [
    {
        id: "nacimiento",
        nombre: "Cruces, Baracaldo",
        anyo: "12 · 09 · 1971",
        emoji: "🌸",
        desc: "El lugar donde empezó todo. Donde diste tu primer llanto y tu primera sonrisa al mundo.",
        lat: 43.2809,
        lng: -2.9812,
        color: "#c8566a"
    },
    {
        id: "crecio",
        nombre: "Artziniega",
        anyo: "Tu pueblo",
        emoji: "🌲",
        desc: "Donde creciste, donde corriste libre, donde se formó la persona que eres.",
        lat: 43.1206,
        lng: -3.1294,
        color: "#3e8838"
    },
    {
        id: "estudio",
        nombre: "IES Laudio BHI",
        anyo: "Tus años de estudio",
        emoji: "📚",
        desc: "Donde aprendiste, donde hiciste amigos, donde fuiste tú entre tus compañeros.",
        lat: 43.1440,
        lng: -2.9627,
        color: "#c4a47c"
    },
    {
        id: "boda",
        nombre: "Santuario Ntra. Sra. de la Encina",
        anyo: "El día de vuestra boda",
        emoji: "💍",
        desc: "El lugar donde dijisteis sí. El día más bonito. El día que empezó nuestra familia.",
        lat: 43.1273,
        lng: -3.1360,
        color: "#f2b8c2"
    },
    {
        id: "vivio",
        nombre: "Laudio / Llodio",
        anyo: "Vuestra vida juntos",
        emoji: "🏠",
        desc: "Donde construisteis vuestro hogar. Donde fui creciendo a tu lado.",
        lat: 43.1406,
        lng: -2.9699,
        color: "#c4a47c"
    },
    {
        id: "ahora",
        nombre: "Donde vives ahora",
        anyo: "Hoy · Siempre",
        emoji: "❤️",
        desc: "El sitio que huele a casa. El lugar donde más te quiero.",
        lat: 43.13865153310397,
        lng: -2.9671061258389386,
        color: "#c8566a"
    },
];

// ════════════════════════════════
//  INIT MAPA
// ════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {

    const mapa = L.map("mapa-leaflet", {
        zoomControl: true,
        attributionControl: true,
        scrollWheelZoom: false
    });

    // Tiles CartoDB Dark Matter — estilo noche elegante
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap © CARTO",
        subdomains: "abcd",
        maxZoom: 19
    }).addTo(mapa);

    // Ajustar vista para que se vean TODOS los marcadores con margen
    const bounds = L.latLngBounds(lugares.map(l => [l.lat, l.lng]));
    mapa.fitBounds(bounds, { padding: [40, 40] });

    // ── Crear marcadores personalizados ──
    const marcadores = {};
    const mapaMarkers = {};

    lugares.forEach((lugar, idx) => {
        // Icono SVG personalizado
        const svgIcon = L.divIcon({
            className: "",
            html: `
                            <div style="
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                cursor: pointer;
                                animation: fadeUp 0.6s ease forwards ${0.3 + idx * 0.15}s;
                                opacity: 0;
                            ">
                                <div style="
                                    width: 44px;
                                    height: 44px;
                                    background: rgba(14, 5, 3, 0.92);
                                    border: 2px solid ${lugar.color};
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 1.3rem;
                                    box-shadow: 0 0 0 4px rgba(${hexToRgb(lugar.color)}, 0.15),
                                                0 4px 16px rgba(0,0,0,0.7);
                                    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                                                box-shadow 0.3s;
                                ">
                                    ${lugar.emoji}
                                </div>
                                <div style="
                                    width: 2px;
                                    height: 12px;
                                    background: linear-gradient(to bottom, ${lugar.color}, transparent);
                                    margin-top: -1px;
                                "></div>
                                <div style="
                                    width: 6px;
                                    height: 6px;
                                    background: ${lugar.color};
                                    border-radius: 50%;
                                    box-shadow: 0 0 8px ${lugar.color};
                                "></div>
                            </div>
                        `,
            iconSize: [44, 68],
            iconAnchor: [22, 68],
            popupAnchor: [0, -72]
        });

        const popup = L.popup({
            closeButton: true,
            className: "mapa-popup",
            maxWidth: 220,
            minWidth: 180
        }).setContent(`
                        <span class="popup-emoji">${lugar.emoji}</span>
                        <div class="popup-titulo">${lugar.nombre}</div>
                        <span class="popup-anyo">${lugar.anyo}</span>
                        <div class="popup-rule"></div>
                        <p class="popup-desc">${lugar.desc}</p>
                    `);

        const marker = L.marker([lugar.lat, lugar.lng], { icon: svgIcon })
            .bindPopup(popup)
            .addTo(mapa);

        mapaMarkers[lugar.id] = marker;
    });

    // ── Dibujar ruta cronológica ──
    const rutaCoords = lugares.map(l => [l.lat, l.lng]);
    L.polyline(rutaCoords, {
        color: "rgba(200, 86, 106, 0.35)",
        weight: 2,
        dashArray: "6 5",
        lineCap: "round"
    }).addTo(mapa);

    // ── Generar tarjetas de lugares ──
    const grid = document.getElementById("lugaresGrid");

    lugares.forEach((lugar) => {
        const card = document.createElement("div");
        card.className = "lugar-card";
        card.id = `card-${lugar.id}`;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `Ver ${lugar.nombre} en el mapa`);
        card.innerHTML = `
                        <span class="lugar-emoji">${lugar.emoji}</span>
                        <div class="lugar-info">
                            <div class="lugar-nombre">${lugar.nombre}</div>
                            <span class="lugar-anyo">${lugar.anyo}</span>
                            <p class="lugar-desc">${lugar.desc}</p>
                        </div>
                        <span class="lugar-flecha">▶</span>
                    `;

        card.addEventListener("click", () => irALugar(lugar.id));
        card.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") irALugar(lugar.id);
        });

        grid.appendChild(card);
    });

    // ── Navegar a un lugar ──
    function irALugar(id) {
        const lugar = lugares.find(l => l.id === id);
        if (!lugar) return;

        // Animar scroll al mapa en móvil
        document.getElementById("mapa-leaflet").scrollIntoView({
            behavior: "smooth", block: "center"
        });

        setTimeout(() => {
            mapa.flyTo([lugar.lat, lugar.lng], 16, {
                animate: true,
                duration: 1.4
            });
            setTimeout(() => {
                mapaMarkers[id].openPopup();
            }, 1500);
        }, 300);

        // Marcar tarjeta activa
        document.querySelectorAll(".lugar-card").forEach(c => c.classList.remove("activa"));
        document.getElementById(`card-${id}`).classList.add("activa");
    }

    // ── Click en marcador → marcar tarjeta ──
    lugares.forEach(lugar => {
        mapaMarkers[lugar.id].on("click", () => {
            document.querySelectorAll(".lugar-card").forEach(c => c.classList.remove("activa"));
            const card = document.getElementById(`card-${lugar.id}`);
            if (card) {
                card.classList.add("activa");
                card.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    });

}); // DOMContentLoaded

// ── Utilidad: hex a rgb ──
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}