let app = new App();

if(!app.dbGet("accounts")){
    let session = JSON.parse(localStorage.getItem('session'))
    let account = new Account(session.userName, "123","Colones","1000000","Ahorros");
    let account2 = new Account(session.userName, "1234","Dolares","1000000","Corriente");
    // user,accountNumber, currency, amount, accountType
    
    let accounts = [account, account2];
    app.dbSave("accounts", accounts);
}

let crearCuenta = () =>{

}

let cargarCuentas = () =>{
    let session = JSON.parse(localStorage.getItem('session'))
    console.log(session)
    let accounts = JSON.parse(localStorage.getItem('accounts'))
    let currentAccounts = [];
    let tableRef = document.getElementById("myTable")
    
    accounts.forEach(e => {
        if(e.user == session.userName){

        
        

            for(let i=0; i<5;i++){
            let newRow = document.createElement('tr');
            let newCol = document.createElement('td')
            //let newText = document.createEle
            var text = document.createTextNode(this.currentAccounts);
            td1.appendChild(text);
            //newRow.appendChild); // The first cell
        
    
        
            newRow.appendChild(document.createElement('td')); // The second cell
            let row2 = document.getElementById("row2");
            row2.parentNode.insertBefore(newRow, row2);       // Insert it
            }
        }
    })
    console.log(currentAccounts)
    


}

cargarCuentas()
