
function generarTabla(){
    var numero = prompt("ingresa un número: ");

    document.write("<h2>Tabla de números del 1 al " + numero + "</h2>");
    document.write("<table border='1'>");

    for (var i = 1; i <= numero; i++){
        document.write("<tr><td>" + i + "</tr></td>")
    }

    document.write("</table>");
}

function dosNumeros(){
    var num1 = Math.random();
    var num2 = Math.random();

    document.write("<p>" + num1 + " + " + num2 + "</p>");

    var numero = prompt("ingresa respuesta: ");
    if (numero == (num1 + num2)){
        document.write("<p>true</p>");
    } else {
        document.write("<p>false</p>");
    }
}

function contador(lista){
    var mayor = 0;
    var menor = 0;
    var igual = 0;
    for(var i = 0; i < lista.length; i++){
        if(lista[i] > 0){
            mayor = mayor + 1;
        } else if(lista[i] < 0){
            menor = menor + 1;
        } else if(lista[i] == 0){
            igual = igual + 1;
        }
    }

    document.write("<p>" + mayor + " " + menor + " " + igual + "</p>");
}

function promedios(matriz){
    var listapromedios = [];

    for(var i = 0; i < matriz.length; i++){
        var fila = matriz[i];
        var sum = 0;

        for(var j = 0; j < fila.length; j++){
            sum += fila[j];
        }

        var promedio = sum/fila.length;
        listapromedios.push(promedio);
    }

    document.write("<p>" + listapromedios + "</p>");
}

function inverso(numero){
    var numStr = numero.toString();
    var numInv = numStr.split('').reverse().join('');
    
    document.write("<p>" + numInv + "</p>");
}

