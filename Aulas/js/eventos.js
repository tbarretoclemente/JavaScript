// EVENTO CLICK

function eventoClick(){
    console.log("Click funcionando!!!");
    document.querySelector(".displayClick").innerHTML = "Evento de click funcionando!";
}

function eventoMouse(){
    console.log("Mouse funcionando!!!");
    document.querySelector(".displayMouse").innerHTML = "Evento de mouse funcionando!";
}


function eventoKeyUp(){
    console.log("Evento KeyUp funcionando!!!");
    document.querySelector(".displayKeyUp").innerHTML = "Evento de KeyUp funcionando!";
}

function eventoKeyDown(){
    console.log("Evento KeyDown funcionando!!!");
    document.querySelector(".displayKeyDown").innerHTML = "Evento de KeyDown funcionando!";
}

function eventoKeyEnter(evento){

    if(evento.keyCode == 13){
        console.log("Evento KeyEnter funcionando!!!");
        document.querySelector(".displayKeyEnter").innerHTML = "Evento de KeyEnter funcionando!";
    }
}


// EVENTO MUDANCA DE ESTILOS

function clearColor(){
    document.getElementById("title--H3").classList.remove("colorBlue");
    document.getElementById("title--H3").classList.remove("colorRed");
    document.getElementById("title--H3").classList.remove("colorGreen");

}

function colorBlue(){
    clearColor();
    document.getElementById("title--H3").classList.add("colorBlue");
}

function colorRed(){
    clearColor();
    document.getElementById("title--H3").classList.add("colorRed");
}

function colorGreen(){
    clearColor();
    document.getElementById("title--H3").classList.add("colorGreen");
}


// MOSTRAR NUMERO

function eventoMostrar(){
    document.getElementById("mostrarNumero").style.display = "block";
}

function eventoMostrar1(elemento){
    elemento.style.display = "none";
    document.getElementById("mostrarNumero1").style.display = "block";
}