const boton = document.getElementById("boton_comprobar");
const input = document.getElementById("contrasenia_1");
const fountain = document.getElementById("cambiar_fuente")

const Contrasenia = () => {
    const contra_1 = document.getElementById("contrasenia_1").value;
    const contra_2 = document.getElementById("contrasenia_2").value;

    console.log(contra_1);
    console.log(contra_2);

    const parrafo = document.getElementById("prrafo");

    if(contra_1 === contra_2){
        parrafo.innerHTML = "Contrasenia correcta";
    } else{
        parrafo.innerHTML = "Contrasenia no correcta";
    }

    boton.onclick = Contrasenia;
};

const cambia_fount = () => {
    document.getElementById("cambio_font").style.fontFamily  = "Times New Roman";
}

const regresa_fount = () => {
    document.getElementById("cambio_font").style.fontFamily  = "Arial";
}


boton.onclick = Contrasenia;
fountain.onmouseover = cambia_fount;
fountain.onmouseout = regresa_fount;