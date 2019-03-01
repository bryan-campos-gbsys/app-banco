let app = new App();

if (!app.dbGet("recargas")) {
    app.dbSave("recargas", JSON.parse("[]"));
}

let recargar = () => {
    let txtNumero = document.getElementById("numCel").value;
    let txtMonto = document.getElementById("monto").value;
    let txtFecha = app.obtenerFechaActual();
    let usuario = app.dbGet("session");

    this.guardarDatos(txtNumero, txtMonto, txtFecha, usuario);

};

function guardarDatos(numero, monto, fecha, usuario) {
    //Se crear el json detalle
    let oDetalle = new Object();
    oDetalle.usuario = usuario;
    oDetalle.monto = monto;
    oDetalle.fecha = fecha;
    oDetalle.numero = numero;

    //Se obtiene el json de localStorage
    let jsonRec = app.dbGet("recargas");

    //Se le agrega la nueva recarga
    jsonRec.push(JSON.stringify(oDetalle));

    //Se actualiza el anterior json
    localStorage.removeItem("recargas");
    localStorage.setItem("recargas", jsonRec);
    alert("Recarga Realizada");
    this.limpiarCampos();
    this.construirTabla();
}

function limpiarCampos() {
    document.getElementById("numCel").value = "";
    document.getElementById("monto").value = "";
}

function construirTabla() {
    let jsonRec = app.dbGet("recargas");
    console.log(jsonRec);
    
    for (let rec of jsonRec) {
        var row = table.insertRow(0);
        var celUsuario = row.insertCell(0);
        var celNum = row.insertCell(1);
        var celMonto = row.insertCell(2);
        var celFecha = row.insertCell(3);

        celUsuario.innerHTML = rec.usuario;
        celNum.innerHTML = rec.numero;
        celMonto.innerHTML = rec.monto;
        celFecha.innerHTML = rec.fecha;
    }



}