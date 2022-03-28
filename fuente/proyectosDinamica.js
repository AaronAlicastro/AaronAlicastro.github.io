const masMe = document.querySelector("#masMe");
const menu = document.querySelector("#menu"); var abrioMenu = true;
const containerOpcionesAboutMe = document.querySelector("#containerOpcionesAboutMe");
const descripcionOpcioneMe = document.querySelectorAll(".descripcionOpcioneMe");
const opcionesMeButton = document.querySelectorAll(".opcionesMeButton");

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
opcionesMeButton[2].addEventListener("click",(e)=>{
	var sLink = "mailto:" + escape("aalicastro5@gmail.com")
	 + "?subject=" + escape("Saludo")
	 + "&body=" + "Hola Aaron";
	window.location.href = sLink;
});