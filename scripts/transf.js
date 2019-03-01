document.addEventListener('DOMContentLoaded', () => {
    cuentas();
  }, false);
// funcion para Cargar  campos <select>
function cuentas() {
  var cuentas = sessionStorage.getItem("cuentas");

   // Ordena el Array Alfabeticamente
   cuentas.sort();

   addOptions(cuentas);
}

// Rutina para agregar opciones a un <select>
function addOptions(array) {
   var cuentasDestino = document.getElementsByName("cuentasOrigen")[0];
   var cuentasDestino = document.getElementsByName("cuentasDestino")[0];
   var session = sessionStorage.getItem("session");
   var optionA;
   var optionB;
   for (value in array) {

    if(session.userName==value.userName){
      optionA = document.createElement("option");
      optionA.text = array[value];
    }else {
      optionB = document.createElement("option");
      optionB.text = array[value];
    }

    cuentasDestino.add(optionA);
    cuentasDestino.add(optionB);
   }
}
