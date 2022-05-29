const mesasTomar = document.querySelectorAll(".mesasTomar");
const cajaSecundaria = document.querySelector("#cajaSecundaria");
const conatinerPreguntasReservas = document.querySelector("#conatinerPreguntasReservas");
const nombrePersonaReservoStayle = document.querySelectorAll(".nombrePersonaReservoStayle");
const containerGeneralPestanaMesa = document.querySelector("#containerGeneralPestanaMesa");
const containerGeneralPestanaItem = document.querySelector("#containerGeneralPestanaItem");
const cambioSource = document.querySelector("#cambioSource");
const body = document.querySelector("#body");

var mesaReservada = -1, mesaOcupada = [];
function resetearMesas() {
    for (var i = 0; i < 9; i++) {
        mesaOcupada[i] = false;
    }
}
function cargarMesasReservadas() {
    if (localStorage.getItem("mesasReservoPersona") != null) {
        mesaReservada = parseInt(localStorage.getItem("mesasReservoPersona"));
        deshabilitarMesa();
    }
} cargarMesasReservadas();

mesasTomar[0].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 0) banda = false;
    
    if (!mesaOcupada[0]) {
        if (banda) {
            llenarDatosReserva(0);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[1].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 1) banda = false;
    
    if (!mesaOcupada[1]) {
        if (banda) {
            llenarDatosReserva(1);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[2].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 2) banda = false;
    
    if (!mesaOcupada[2]) {
        if (banda) {
            llenarDatosReserva(2);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[3].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 3) banda = false;
    
    if (!mesaOcupada[3]) {
        if (banda) {
            llenarDatosReserva(3);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[4].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 4) banda = false;
    
    if (!mesaOcupada[4]) {
        if (banda) {
            llenarDatosReserva(4);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[5].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 5) banda = false;
    
    if (!mesaOcupada[5]) {
        if (banda) {
            llenarDatosReserva(5);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[6].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 6) banda = false;
    
    if (!mesaOcupada[6]) {
        if (banda) {
            llenarDatosReserva(6);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[7].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 7) banda = false;
    
    if (!mesaOcupada[7]) {
        if (banda) {
            llenarDatosReserva(7);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});
mesasTomar[8].addEventListener("click", (e) => {
    let banda = true;
    if (mesaReservada == 8) banda = false;
    
    if (!mesaOcupada[8]) {
        if (banda) {
            llenarDatosReserva(8);
        } else alert("Ya eligió esta mesa");
    } else alert("Mesa reservada");
});

nombrePersonaReservoStayle[2].addEventListener("click", (e) => {
    if (mesaReservada != -1) {
        resetearMesas();
        habilitarMesa();
        mesaReservada = -1;

        conatinerPreguntasReservas.style.display = "none";
        alert("Ha cancelado la reserva");
        nombrePersonaReservoStayle[0].value = "";
    }else alert("Acción inválida");
});
nombrePersonaReservoStayle[3].addEventListener("click", (e) => {
    if (mesaReservada != -1) {
        if (nombrePersonaReservoStayle[0].value.trim() != "") {
            let nombrePersonaReservo = nombrePersonaReservoStayle[0].value.trim();
            localStorage.setItem("nombrePersonaReservo", nombrePersonaReservo);
            localStorage.setItem("mesasReservoPersona", mesaReservada);
            deshabilitarMesa();
            setTimeout((e) => {
                conatinerPreguntasReservas.style.display = "none";
                containerGeneralPestanaMesa.style.display = "none";
                containerGeneralPestanaItem.style.display = "block";
                aparecerNombrePersonaReservo();
            }, 600);
        } else alert("Debe ingresar su nombre");
    } else alert("Acción inválida");
});

function llenarDatosReserva(mesa) {
    conatinerPreguntasReservas.style.display = "flex";
    conatinerPreguntasReservas.style.flexFlow = "column wrap";
    mesaReservada = mesa;
    resetearMesas();
    nombrePersonaReservoStayle[1].value = "¿Desea reservar la mesa? \n \n";
    nombrePersonaReservoStayle[1].value += "Mesa n° " + (mesaReservada + 1);
}
function deshabilitarMesa() {
    if (mesaReservada != -1 && mesaReservada != null && mesaReservada > -1) {
        mesasTomar[mesaReservada].style.background = "#FFDCDC";
        mesasTomar[mesaReservada].style.cursor = "default";
        mesaOcupada[mesaReservada] = true;
    }
}
function habilitarMesa(){
    if (mesaReservada != -1 && mesaReservada != null && mesaReservada > -1) {
        mesasTomar[mesaReservada].style.background = "#EDFBED";
        mesasTomar[mesaReservada].style.cursor = "pointer";
        mesaOcupada[mesaReservada] = false;
    }
}