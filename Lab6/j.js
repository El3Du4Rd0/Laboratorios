document.getElementById("formPassword").addEventListener("submit", function(e){
    e.preventDefault();

    var password = document.getElementById("password").value;
    var passwordC = document.getElementById("passwordC").value;

    if (password == passwordC){
        alert("Contraseña correcta")
    } else {
        alert("Contraseña incorrecta")
    }
});