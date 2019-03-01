let app = new App();


if (!app.dbGet("users")) {
    let user1 = new User("juan", "patito");
    let user2 = new User("mario", "patito");

    let users = [user1, user2];
    app.dbSave("users", users);
}

let autenticar = () => {

    let txtUserName = document.getElementById("userName");
    let txtPassword = document.getElementById("password");

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

let registrarIndex = () => {
    window.location = "CRUDUsers.html";
};