"use strict";
var calculadoraIsReady = false;

proyectos[proyectos.length - 6].addEventListener("click",e=>{ // creacion de etiquetas
	containerProyectos.style.overflowY = "auto";
	containerProyectos.style.boxSizing = "border-box";
	containerProyectos.style.height = "90vh";
	encendioKurt = false;
	pestanasOpen.forEach((pestana,i)=>{
		if (pestana){
			pestanasProyectosAbiertas[i].style.display = "none";
			pestanasOpen[i] = false;
		}
	}); 
	pestanasOpen[5] = true;

	containerDescripcionProyectos.style.display = "none";
	if (!calculadoraIsReady) {
		calculadoraIsReady = true;
		let pestanaCalculadora = document.createDocumentFragment();
		pestanasProyectosAbiertas[5] = document.createElement("DIV");
		pestanasProyectosAbiertas[5].setAttribute("id","calculadoraIsReady");
		let divBotonComenzar = document.createElement("DIV");
		divBotonComenzar.style.display = "flex";
		divBotonComenzar.classList.add("seccionesVA");

		let tituloCalculadora = document.createElement("H1"); // –> titulo
		tituloCalculadora.style.fontSize = "35px";
		tituloCalculadora.style.textAlign = "center";
		tituloCalculadora.classList.add("seccionesVA");
		let pElementCalculadora = document.createElement("P");
		pElementCalculadora.classList.add("seccionesVA");
		pElementCalculadora.classList.add("descripcionProyectosHechos");
		pElementCalculadora.classList.add("pCompleto");
		let bComenzar = document.createElement("BUTTON");
		bComenzar.classList.add("seccionesVA");
		bComenzar.classList.add("irALink");
		bComenzar.setAttribute("id","bComenzar");
		
		//––––––––––––––––––––––––––––––––––– Relleno –––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[5].style.display = "flex";
		pestanasProyectosAbiertas[5].style.flexDirection = "column";
		pestanasProyectosAbiertas[5].style.boxSizing = "border-box";
		pestanasProyectosAbiertas[5].style.maxWidth = "600px";
		tituloCalculadora.innerHTML = "Calculadora";
		pElementCalculadora.innerHTML = `
			Parece f&aacutecil, pero hacer funcionar una calculadora es una ardua tarea cognitiva, es notorio sobre todo
			cuando intentas hacer funcionar los par&eacutentesis, y desistes porque debes entregar el trabajo
			y tan solo te quedan 30 minutos de plazo.
			Es dif&iacutecil, y tambi&eacuten te invito a esforzarte; tienes tres intentos para darle click al bot&oacuten
			y obtener la direcci&oacuten del sitio.
		`;
		bComenzar.innerHTML = "Comenzar";
		bComenzar.style.width = "350px"
		//––––––––––––––––––––––––––––––––––––– Inserccion ––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[5].appendChild(tituloCalculadora);
		pestanasProyectosAbiertas[5].appendChild(pElementCalculadora);
		divBotonComenzar.appendChild(bComenzar);
		pestanasProyectosAbiertas[5].appendChild(divBotonComenzar);
		
		pestanaCalculadora.appendChild(pestanasProyectosAbiertas[5]);
		containerProyectos.appendChild(pestanaCalculadora);
		pestanasProyectosAbiertas[5] = document.querySelector("#calculadoraIsReady");
		bComenzar = document.querySelector("#bComenzar");
		bComenzar.addEventListener("click",e=>{ 
			if (!seCreoBurla){ 
				crearBurla();
				bComenzar.innerHTML = "Tienes "+numClick+" intentos";
			}
		});
	}else{
		pestanasProyectosAbiertas[5].style.display = "flex";
		pestanasProyectosAbiertas[5].style.flexDirection = "column";
	}

	abrirCerrarProyectos();
	setTimeout(e=>{ abrirCerrarMenu(); }, 1000);
});
var intentoClick = false, numClick = 3, seCreoBurla = false;
function crearBurla() {
	seCreoBurla = true;
	let divBurla = document.createElement("DIV");
	divBurla.classList.add("seccionesVA");
	let botonBurla = document.createElement("BUTTON");
	botonBurla.classList.add("irALink");
	botonBurla.setAttribute("id","bBurla");
	botonBurla.innerHTML = "Cliquea";
	botonBurla.style.position = "relative";
	divBurla.appendChild(botonBurla);
	pestanasProyectosAbiertas[5].appendChild(divBurla);
	document.querySelector("#bBurla").addEventListener("mouseover",e=>{
		if (intentoClick) {
			intentoClick = false; numClick--;
			if (numClick > 0) {
				bComenzar.innerHTML = "Tienes "+numClick+" intentos";
			}else if (numClick == -1) bComenzar.innerHTML = "El boton 'Ir', te lleva al sitio";
			else bComenzar.innerHTML = ";–;";
			botonBurla.style.left = "0";
			
		}else{
			intentoClick = true; numClick--;
			if (numClick >= 0) bComenzar.innerHTML = "Tienes "+numClick+" intentos";
			if (numClick == 0) aparecerVerdaderoBoton();
			else if (numClick == -2) bComenzar.innerHTML = "Como te gusta jugar eh";
			botonBurla.style.left = (botonBurla.offsetLeft-300)+"px";
		}
	});
}
function aparecerVerdaderoBoton(){
	let divVerdadero = document.createElement("DIV");
	divVerdadero.classList.add("seccionesVA");
	let botonIr = document.createElement("BUTTON");
	botonIr.classList.add("irALink");
	botonIr.innerHTML = "Ir";
	botonIr.style.padding = "5px 10px";
	let aVerdadero = document.createElement("A");
	aVerdadero.setAttribute("href","creacionesReferencias/indexCalculadora");
	aVerdadero.setAttribute("href","creacionesReferencias/indexCalculadora.html");
	aVerdadero.setAttribute("target","_BLANK");
	aVerdadero.appendChild(botonIr);
	divVerdadero.appendChild(aVerdadero);
	pestanasProyectosAbiertas[5].appendChild(divVerdadero);
}