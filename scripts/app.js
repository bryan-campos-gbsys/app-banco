class App{
    constructor(){
        
    }

    obtenerFechaActual(){
        let hoy = new Date();
        return `${hoy.getFullYear()}/${hoy.getMonth()}/${hoy.getDate()}`;
    }

}