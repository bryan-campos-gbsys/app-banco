class App{
    constructor(){
        
    }

    obtenerFechaActual(){
        let hoy = new Date();
        return `${hoy.getFullYear()}/${hoy.getMonth()}/${hoy.getDate()}`;
    }

    dbGet(key){
        let item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    dbSave(key, obj){
        if(!this.dbGet(key)){
            localStorage.setItem(key, JSON.stringify(obj));
        }else{
            throw Error("Ya existe el objeto");
        }
    }

}