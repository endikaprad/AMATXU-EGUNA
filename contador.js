/* ═══════════════════════════════════════════════
   CONTADOR EN TIEMPO REAL
   Desde el 12/09/1971 hasta ahora
   Días · Horas · Minutos · Segundos
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {

    const nacimiento = new Date(1971, 8, 12, 0, 0, 0); // 12 sep 1971 (mes 0-indexed: 8 = septiembre)

    const elDias = document.getElementById("contDias");
    const elHoras = document.getElementById("contHoras");
    const elMins = document.getElementById("contMins");
    const elSegs = document.getElementById("contSegs");

    if (!elDias || !elHoras || !elMins || !elSegs) {
        console.warn("Contador: no se encontraron los elementos contDias/contHoras/contMins/contSegs");
        return;
    }

    function actualizar() {
        const ahora = new Date();
        const diff = ahora - nacimiento;

        const totalSegs = Math.floor(diff / 1000);
        const segs = totalSegs % 60;
        const totalMins = Math.floor(totalSegs / 60);
        const mins = totalMins % 60;
        const totalHoras = Math.floor(totalMins / 60);
        const horas = totalHoras % 24;
        const dias = Math.floor(totalHoras / 24);

        elDias.textContent = dias.toLocaleString("es-ES");
        elHoras.textContent = String(horas).padStart(2, "0");
        elMins.textContent = String(mins).padStart(2, "0");
        elSegs.textContent = String(segs).padStart(2, "0");
    }

    actualizar();
    setInterval(actualizar, 1000);

});