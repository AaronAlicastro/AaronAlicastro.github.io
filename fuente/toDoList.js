"use strict";
var toDoListIsReady = false, pElementsToDoList = [];

proyectos[proyectos.length - 5].addEventListener("click",e=>{ // creacion de etiquetas
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
	pestanasOpen[4] = true;

	containerDescripcionProyectos.style.display = "none";
	if (!toDoListIsReady) {
		toDoListIsReady = true;
		let pestanaToDoList = document.createDocumentFragment();
		pestanasProyectosAbiertas[4] = document.createElement("DIV");
		pestanasProyectosAbiertas[4].setAttribute("id","toDoListIsReady");

		let tituloToDoList = document.createElement("H1"); // –> titulo
		tituloToDoList.style.fontSize = "35px";
		tituloToDoList.classList.add("textoCentrado");
		tituloToDoList.classList.add("seccionesVA");
		let h2Habilidades = document.createElement("H2");
		h2Habilidades.classList.add("seccionesVA");
		h2Habilidades.classList.add("textoCentrado");
			pElementsToDoList[0] = document.createElement("P"); // creacion de la p
			pElementsToDoList[0].classList.add("descripcionProyectosHechos");
			pElementsToDoList[0].classList.add("seccionesVA");
			pElementsToDoList[0].classList.add("pCompleto");
		let pDesHabilidades = document.createElement("P");
		pDesHabilidades.classList.add("seccionesVA");
		pDesHabilidades.classList.add("textoCentrado");
		//––––––––––––––––––––––––––––––––––– Relleno –––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[4].style.display = "flex";
		pestanasProyectosAbiertas[4].style.flexDirection = "column";
		pestanasProyectosAbiertas[4].style.boxSizing = "border-box";
		tituloToDoList.innerHTML = "To do list";
		pElementsToDoList[0].innerHTML = `
			Puedo observar, que posiblemente una de las primeras cosas que nos mandan a hacer 
			cuando uno est&aacute aprendiendo este lenguaje, es hacer un To Do List, as&iacute 
			como cuando uno hace programas que impriman solo n&uacutemeros primos para entrenar 
			la l&oacutegica, as&iacute esto lo veo como un buen proyecto para aplicar todo lo 
			aprendido; te dejo aqu&iacute mi To Do List –>
			<a href='creacionesReferencias/indexToDoList.html' target='_BLANK'><button class='irALink'>Ir</button><a>
		`;
		h2Habilidades.innerHTML = "Tecnologías usadas";
		pDesHabilidades.innerHTML =  "HTML – CSS – Javascript";
		//––––––––––––––––––––––––––––––––––––– Inserccion ––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[4].appendChild(tituloToDoList);
		pestanasProyectosAbiertas[4].appendChild(pElementsToDoList[0]);
		pestanasProyectosAbiertas[4].appendChild(h2Habilidades);
		pestanasProyectosAbiertas[4].appendChild(pDesHabilidades);
		
		pestanaToDoList.appendChild(pestanasProyectosAbiertas[4]);
		containerProyectos.appendChild(pestanaToDoList);
		pestanasProyectosAbiertas[4] = document.querySelector("#toDoListIsReady");
	}else{
		pestanasProyectosAbiertas[4].style.display = "flex";
		pestanasProyectosAbiertas[4].style.flexDirection = "column";
	}

	abrirCerrarProyectos();
	setTimeout(e=>{ abrirCerrarMenu(); }, 1000);
});