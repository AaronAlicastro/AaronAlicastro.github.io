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
						footer.style.flexDirection = "row";
						footer.style.justifyContent = "center";
						footer.style.paddingTop = "6em";
		}, 5002);
	},3000);
});
//////////////////////////// funciones /////////////////////////////////////
menu.addEventListener("click", (e)=>{
	if (!abrioMenu) {
		abrioMenu = true;
		menu.style.animation = "aperturaAboutMeLetraGrande 2s forwards";
		masMe.style.animation = "aperturaAboutMe 2s forwards";
		setTimeout((e)=>{ containerOpcionesAboutMe.style.display = "block";
						containerOpcionesAboutMe.style.overflowY = "auto";
		}, 2001);
	}else{
		abrioMenu = false;
		containerOpcionesAboutMe.style.display = "none";
		menu.style.animation = "cierreAboutMeLetraGrande 2s forwards";
		masMe.style.animation = "cierreAboutMe 2s forwards";
		descripcionOpcioneMe[0].innerHTML = `Si tienes interés en mi trabajo, tal vez quieras consultar mi hoja de vida; a solo un click.`;
		descripcionOpcioneMe[1].innerHTML = `Si así lo deseas, puedes ver los proyectos que he hecho, desde los más recientes a los menos recientes.`;
		descripcionOpcioneMe[2].innerHTML = `¿Quieres ver mi perfil en linkedln?, a solo un click.`;
		descripcionOpcioneMe[3].innerHTML = `A solo un click.`;
	}
});
descripcionOpcioneMe[0].addEventListener("click", (e)=>{
	descripcionOpcioneMe[0].innerHTML += `<br><br> <b>Ups, sitio equivocado</b>`;
});
descripcionOpcioneMe[1].addEventListener("click", (e)=>{
	descripcionOpcioneMe[1].innerHTML += `<br><br> <b>Ups, sitio equivocado</b>`;
});
descripcionOpcioneMe[2].addEventListener("click", (e)=>{
	descripcionOpcioneMe[2].innerHTML += `<br><br> <b>Ups, sitio equivocado</b>`;
});
descripcionOpcioneMe[3].addEventListener("click", (e)=>{
	descripcionOpcioneMe[3].innerHTML += `<br><br> <b>Ups, sitio equivocado</b>`;
});
cerrarCartilla.addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "none";
});
hobbies[0].addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = "20px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
});
hobbies[1].addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = "20px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
});
hobbies[2].addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = "20px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
});
hobbies[3].addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = "20px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
});
hobbies[4].addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = "20px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
});
hobbies[5].addEventListener("click", (e)=>{
	containerCartillaHobies.style.display = "block";
	containerCartillaHobies.style.position = "absolute";
	containerCartillaHobies.style.top = "20px";
	containerCartillaHobies.style.left = "20px";
	containerCartillaHobies.style.padding = "15px";
	containerCartillaHobies.style.width = "300px";
	containerCartillaHobies.style.height = "300px";
	containerCartillaHobies.style.background = "#005aa8";
	containerCartillaHobies.style.borderRadius = "12px";
});
window.addEventListener("resize",(e)=>{
	if (body.offsetWidth < (containerAboutMe.offsetWidth+masMe.offsetWidth+containerFotoPerfil.offsetWidth)) {
		masMe.style.order = "50";
		containerFotoPerfil.style.order = "100"
		containerAboutMe.style.order = "150";
		masMe.style.height = "280px";
	}else if(body.offsetWidth < (350+containerFotoPerfil.offsetWidth)){
		containerFotoPerfil.style.order = "50"
		masMe.style.order = "100";
		containerAboutMe.style.order = "150";
		masMe.style.height = "100%";
	}else{
		masMe.style.order = "50";
		containerAboutMe.style.order = "100";
		containerFotoPerfil.style.order = "150"
		masMe.style.height = "100%";
	}
});
opcionesMeButton[3].addEventListener("click",(e)=>{
	var sLink = "mailto:" + escape("aalicastro5@gmail.com")
	 + "?subject=" + escape("Saludo")
	 + "&body=" + "Hola Aaron";
	window.location.href = sLink;
});