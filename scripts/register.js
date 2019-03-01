let app = new App();

let txtUserName = document.getElementById("userNameRegister");
let txtPassword = document.getElementById("passwordRegister");

let registrar = () => {

    let users = app.dbGet("users");
    let userInserted = false;
    for (let user of users) {
        if (user.userName == txtUserName.value && user.password == txtPassword.value) {
            app.dbSave("session", user);
            userInserted = true;
            return;
        }
    }

    if (!userInserted) {
        let userNew = new User(txtUserName.value, txtPassword.value);
        users.push(userNew);
        app.dbModify("users", users);
        autenticar();
    }
}


let autenticar = () => {

    let users = app.dbGet("users");
    let userIsValid = false;
    for (let user of users) {
        if (user.userName == txtUserName.value && user.password == txtPassword.value) {
            app.dbSave("session", user);
            userIsValid = true;
            return;
        }
    }

    if (userIsValid) {
        window.location = "index.html";
    } else {
        alert("Usuario invalido");
    }
};