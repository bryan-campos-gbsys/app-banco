document.addEventListener('DOMContentLoaded', () => {
    let app = new App();
    let fechaActual = app.obtenerFechaActual();
    let spanFecha = document.getElementById("fecha");
    spanFecha.innerText = fechaActual;

    let cuentas = () => {
        window.location = "index.html";
    }

}, false);
