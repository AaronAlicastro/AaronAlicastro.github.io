"use strict";
const body = document.querySelector("#body");
const masMe = document.querySelector("#masMe");
const menu = document.querySelector("#menu"); var abrioMenu = true;
const containerOpcionesAboutMe = document.querySelector("#containerOpcionesAboutMe");
const descripcionOpcioneMe = document.querySelectorAll(".descripcionOpcioneMe");
const opcionesMeButton = document.querySelectorAll(".opcionesMeButton");
const isSelected = document.querySelector("#isSelected"); var is_isSelected = true;

var pestanasProyectosAbiertas = [], pestanasOpen = [];
for (let i = 0; i < 8; i++) {
	pestanasOpen[i] = false;
}

menu.addEventListener("click", (e)=>{
	abrirCerrarMenu();
});
descripcionOpcioneMe.forEach((element,i)=>{
	if (i == 1) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>Creo que cliqueaste el el sitio incorrecto.</b>`)});
	else if(i == 2) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>Ups, sitio equivocado.</b>`)});
	else if(i == 3) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>Aqu&iacute no es.</b>`)});
});
opcionesMeButton[3].addEventListener("click",(e)=>{
	var sLink = "mailto:" + escape("aalicastro5@gmail.com")
	 + "?subject=" + escape("Saludo")
	 + "&body=" + "Hola Aaron";
	window.location.href = sLink;
});
opcionesMeButton[0].addEventListener("click",(e)=>{
	abrirCerrarProyectos();
});

//––––––––––––––––––––––––––––––––––––––– funciones –––––––––––––––––––––––––––––––––––––//
function abrirCerrarMenu(){
	if (!abrioMenu) {
		abrioMenu = true;
		menu.style.animation = "aperturaAboutMeLetraGrande 2s forwards";
		masMe.style.animation = "aperturaAboutMe 2s forwards";
		setTimeout((e)=>{ containerOpcionesAboutMe.style.display = "block";
						containerOpcionesAboutMe.style.overflowY = "auto";
						containerOpcionesAboutMe.style.boxSizing = "border-box";
		}, 2001);
	}else{
		abrioMenu = false;
		containerOpcionesAboutMe.style.display = "none";
		menu.style.animation = "cierreAboutMeLetraGrande 2s forwards";
		masMe.style.animation = "cierreAboutMe 2s forwards";
		descripcionOpcioneMe[1].innerHTML = `Es simplemente extraño, la satisfacci&oacuten que siento cuando te tomas el tiempo de leer.`;
		descripcionOpcioneMe[2].innerHTML = `El bot&oacuten espera con ansias.`;
		descripcionOpcioneMe[3].innerHTML = `A solo un click.`;
	}	
}
function abrirCerrarProyectos(){
	selecciono();
	setTimeout(e=>{
		if (is_isSelected) {
			descripcionOpcioneMe[0].style.display = "none";
		}else{
			descripcionOpcioneMe[0].style.display = "flex";
			descripcionOpcioneMe[0].style.flexDirection = "column";
			descripcionOpcioneMe[0].style.padding = "0 10px";
		}
	}, 400);
}
function selecciono(){
	if (is_isSelected){
		is_isSelected = false;
		isSelected.style.animation = "isSelected 1.5s forwards";
	}else{
		is_isSelected = true;
		isSelected.style.animation = "notIsSelected 1.5s forwards";
	}
}
function errorOpcionMenu(context, mensajeError){
	context.innerHTML += mensajeError;
}