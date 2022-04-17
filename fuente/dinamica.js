"use strict";
const letrasAimation = document.querySelectorAll(".letrasAimation");
const tituloBienbenida = document.querySelector("#tituloBienbenida");
const body = document.querySelector("#body");
const containerIndex = document.querySelector("#containerIndex");
const footer = document.querySelector("#footer");
///////////////////////// constantes de la interactividad //////////////////////////////////
const masMe = document.querySelector("#masMe");
const menu = document.querySelector("#menu"); var abrioMenu = false;
const containerOpcionesAboutMe = document.querySelector("#containerOpcionesAboutMe");
const descripcionOpcioneMe = document.querySelectorAll(".descripcionOpcioneMe");
const hobbies = document.querySelectorAll(".hobbies");
const containerCartillaHobies = document.querySelector("#containerCartillaHobies");
const cerrarCartilla = document.querySelector("#cerrarCartilla");
const containerAboutMe = document.querySelector("#containerAboutMe");
const containerFotoPerfil = document.querySelector("#containerFotoPerfil");
const opcionesMeButton = document.querySelectorAll(".opcionesMeButton");
const infoHobbieCartilla = document.querySelectorAll(".infoHobbieCartilla");
const conocimientos = document.querySelectorAll(".conocimientos");
const scrollHobie = document.querySelector("#scrollHobie");

window.addEventListener("load", (e)=>{
	setTimeout((e)=>{ 
		for (var i = 0; i < 10; i++) {
			letrasAimation[i].style.display = "inline-block";
			letrasAimation[i].style.animation = "transitonPalabras 2.5s forwards";
		}
	},300);
	setTimeout((e)=>{
		letrasAimation[0].style.color = "#000032";
		letrasAimation[0].style.position = "absolute";
		letrasAimation[0].style.animation = "caidaPalabras0 5s forwards";
		letrasAimation[1].style.color = "#000032";
		letrasAimation[1].style.position = "absolute";
		letrasAimation[1].style.animation = "caidaPalabras1 5s forwards";
		letrasAimation[2].style.color = "#000032";
		letrasAimation[2].style.position = "absolute";
		letrasAimation[2].style.animation = "caidaPalabras2 5s forwards";
		letrasAimation[3].style.color = "#000032";
		letrasAimation[3].style.position = "absolute";
		letrasAimation[3].style.animation = "caidaPalabras3 5s forwards";
		letrasAimation[4].style.color = "#000032";
		letrasAimation[4].style.position = "absolute";
		letrasAimation[4].style.animation = "caidaPalabras4 5s forwards";
		letrasAimation[5].style.color = "#000032";
		letrasAimation[5].style.position = "absolute";
		letrasAimation[5].style.animation = "caidaPalabras5 5s forwards";
		letrasAimation[6].style.color = "#000032";
		letrasAimation[6].style.position = "absolute";
		letrasAimation[6].style.animation = "caidaPalabras6 5s forwards";
		letrasAimation[7].style.color = "#000032";
		letrasAimation[7].style.position = "absolute";
		letrasAimation[7].style.animation = "caidaPalabras7 5s forwards";
		letrasAimation[8].style.color = "#000032";
		letrasAimation[8].style.position = "absolute";
		letrasAimation[8].style.animation = "caidaPalabras8 5s forwards";
		letrasAimation[9].style.color = "#000032";
		letrasAimation[9].style.position = "absolute";
		letrasAimation[9].style.animation = "caidaPalabras9 5s forwards";
		body.style.animation = "aparecerColorFondo 5s forwards";
		setTimeout((e)=>{ tituloBienbenida.style.display = "none"}, 5001);
		setTimeout((e)=>{ containerIndex.style.display = "flex";
						containerIndex.style.flexDirection = "row";
						containerIndex.style.justifyContent = "space-around";
						containerIndex.style.flexWrap = "wrap";
						containerIndex.style.boxSizing = "border-box";
						containerIndex.style.overflowY = "auto";
						footer.style.display = "flex";
						footer.style.flow = "row wrap";
						footer.style.justifyContent = "center";
						footer.style.position = "absolute";
						footer.style.bottom = "0";
						footer.style.width = "100%";
						footer.style.height = "3em";
						responsive();
		}, 5002);
	},3000);
});
//////////////////////////// eventos de funciones /////////////////////////////////////
menu.addEventListener("click", (e)=>{
	abrirCerrarMenu();
});
cerrarCartilla.addEventListener("click",e=>{
	containerCartillaHobies.style.display = "none";
});
descripcionOpcioneMe.forEach((element,i)=>{
	if(i == 0) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>Dudo que ocurra algo.</b>`)});
	else if (i == 1) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>Ups, sitio equivocado.</b>`)});
	else if(i == 2) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>S&iacute, a veces uno se equivoca.</b>`)});
	else if(i == 3) element.addEventListener("click",e=>{ errorOpcionMenu(element, `<br><br> <b>Creo que hubo un peque&ntildeo desv&iacuteo.</b>`)});
});
//––––––––––––––––––––––– movimiento del conocimiento ––––––––––––––––––––––––– //
var propagacionCo = true;
conocimientos.forEach((co,i)=>{
	co.addEventListener("mouseover",e=>{
		let mouseP = { y: e.clientY, x: e.clientX}
		if (i == 0) efectoConocimientos(co, "HTML5",mouseP);
		else if (i == 1) efectoConocimientos(co, "CSS3",mouseP);
		else if (i == 2) efectoConocimientos(co, "JavasCript",mouseP);
		else if (i == 3) efectoConocimientos(co, "Git",mouseP);
		else if (i == 4) efectoConocimientos(co, "MogoDB",mouseP);
		else if (i == 5) efectoConocimientos(co, "JQuery",mouseP);
		else if (i == 6) efectoConocimientos(co, "Java",mouseP);
	});
});
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
hobbies[0].addEventListener("click", (e)=>{//–––––––––––––– chess –––––––––––––––––––
	aparecerCartillaInfo("Ajedrez", `
		El Ajedrez, un juego en el que dos desconocidos se enfrentan y es aqu&iacute en donde notas
		qu&eacute tanto coneces a tu adversario; te quedas perplejo por los actos impensables que hace
		el oponente, te maravillas al ver su lado m&aacutes siniestro y a su vez, te maravillas al saber
		lo poco que lo conoces; Entre pasos e intercambios, miradas y ce&ntildeos fruncidos, se forja 
		una amistad entre enemigos.<br><br>
		Si te gusta el ajedrez, te invito a una partida en chess.com, '32alicastro'.
	`, e);
});
hobbies[1].addEventListener("click", (e)=>{//–––––––––––––– coffee –––––––––––––––––––
	aparecerCartillaInfo("Caf&eacute", `
		Tal vez sea una bebida sencilla, tal vez su proceso al hacerlo carezca de complejidad, tal vez
		es sobreestimado, pero si dicha bebida no llevase consigo una historia, si no llevase cautivo
		dentro de s&iacute esos momentos que fueron tan especiales marcados con risas, juegos, y temas 
		interesantes; tal vez y solo tal vez, no anhelar&iacutea tanto, tomar otra taza de caf&eacute
		con esa persona.
	`, e);
});
hobbies[2].addEventListener("click", (e)=>{//–––––––––––––– libro –––––––––––––––––––
	aparecerCartillaInfo("Conocimiento", `
		De ser un instinto primitivo por preservar su vida, de ser el principio de superar las 
		circunstancias, el conocimiento se convertir&iacutea en la arma m&aacutes poderosa del
		hombre, aquella que pasa de gerneraci&oacuten en generaci&oacuten que se perfecciona al pasar
		de mano en mano y m&aacutes eficaz en sus postreros portadores; si alg&uacuten d&iacutea el
		conocimiento se convierte en una condena, quisiese ser el primer sentenciado.
	`, e);
});
hobbies[3].addEventListener("click", (e)=>{//–––––––––––––– videoJuego –––––––––––––––––––
	aparecerCartillaInfo("Videos juegos", `
		Si me preguntasen, ¿d&oacutende consigo diversi&oacuten, retos y esfuerzos cognitivos en un
		solo lugar?, yo le contestar&iacutea, videos juegos...
	`, e);
});
window.addEventListener("resize",(e)=>{
	responsive();
});
opcionesMeButton[3].addEventListener("click",(e)=>{
	var sLink = "mailto:" + escape("aalicastro5@gmail.com")
	 + "?subject=" + escape("Saludo")
	 + "&body=" + "Hola Aaron";
	window.location.href = sLink;
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
		descripcionOpcioneMe[0].innerHTML = `Si tienes inter&eacutes en mi trabajo, tal vez quieras consultar mi hoja de vida.`;
		descripcionOpcioneMe[1].innerHTML = `Los proyectos, trabajo ardudo.`;
		descripcionOpcioneMe[2].innerHTML = `Perfil accesible.`;
		descripcionOpcioneMe[3].innerHTML = `S&iacute, a solo un click.`;
	}	
}
function errorOpcionMenu(context, mensajeError){
	context.innerHTML += mensajeError;
}
function efectoConocimientos(co, titulo, positionMouse){
	if (propagacionCo) {
		propagacionCo = false;
		let positionTopCo = co.offsetTop;
		let positionLeftCo = co.pffsetLeft;
		let movimiento = 0, borderEsquina = 100;
		co.style.position = "absolute";
		co.style.left = positionLeftCo;
		let efecto = setInterval(e=>{
			let b = ((-100)*movimiento)/(positionTopCo-100)+positionTopCo;
			co.style.top = b+"px";
			if (movimiento >= 0) co.style.borderBottomRightRadius = borderEsquina+"%";
			movimiento++; borderEsquina--;
		},1/1500);
		setTimeout(e=>{ 
			clearInterval(efecto);
			movimiento = 0; borderEsquina = 0;
			let efecto2 = setInterval(e=>{
				let b = ((100)*movimiento)/positionTopCo+(positionTopCo-100);
				co.style.top = b+"px";
				if (co.offsetTop >= 402.97) co.style.borderBottomRightRadius = borderEsquina+"%"; borderEsquina++;
				movimiento++;
			},1/1500);
			setTimeout(e=>{
				clearInterval(efecto2);
				co.style.position = "initial";
				co.style.borderBottomRightRadius = "100%";
				propagacionCo = true;
			}, 1500);
		},1500);
		aparecerCartillaInfoConocimientos(titulo,positionMouse);
	}
}
function aparecerCartillaInfo(titulo, mensaje, e) {
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = (e.y-150)+"px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
	containerCartillaHobies.style.zIndex = "1000";
	infoHobbieCartilla[0].innerHTML = titulo;
	infoHobbieCartilla[1].innerHTML = mensaje;
	scrollHobie.style.height = "65%";
	cerrarCartilla.style.marginLeft = "35%";
}
function aparecerCartillaInfoConocimientos(titulo, e){
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = (e.y-60)+"px";
	containerCartillaHobies.style.left = (e.x-60)+"px";
	containerCartillaHobies.style.padding = "10px";
	containerCartillaHobies.style.width = "120px";
	containerCartillaHobies.style.height = "120px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
	containerCartillaHobies.style.zIndex = "1000";
	infoHobbieCartilla[0].innerHTML = titulo;
	infoHobbieCartilla[1].innerHTML = "";
	scrollHobie.style.height = "0";
	cerrarCartilla.style.marginLeft = "20%";
}
function responsive() {
	if (body.offsetWidth < (containerAboutMe.offsetWidth+masMe.offsetWidth+containerFotoPerfil.offsetWidth)) {
		masMe.style.order = "50";
		containerFotoPerfil.style.order = "100"
		containerAboutMe.style.order = "150";
		masMe.style.height = "100%";
	}else if(body.offsetWidth < (350+containerFotoPerfil.offsetWidth)){
		masMe.style.order = "50";
		containerFotoPerfil.style.order = "100"
		containerAboutMe.style.order = "150";
		masMe.style.height = "100%";
	}else{
		masMe.style.order = "50";
		containerAboutMe.style.order = "100";
		containerFotoPerfil.style.order = "150"
		masMe.style.height = "100%";
	}
}