"use strict";
const containerProyectos = document.querySelector("#containerProyectos");
const footer = document.querySelector("#footer");
const proyectos = document.querySelectorAll(".proyectos");
const containerDescripcionProyectos = document.querySelector("#containerDescripcionProyectos");

var visionArmonicaIsReady = false;
var divElementsVisionA = [], pElementsVisionA = [], imgElementsVisionA = [];

proyectos[proyectos.length - 1].addEventListener("click",e=>{ // creacion de etiquetas
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
	pestanasOpen[0] = true;

	containerDescripcionProyectos.style.display = "none";
	if (!visionArmonicaIsReady) {
		visionArmonicaIsReady = true;
		let pestanaVisionArmonica = document.createDocumentFragment();
		pestanasProyectosAbiertas[0] = document.createElement("DIV");
		pestanasProyectosAbiertas[0].setAttribute("id","visionArmonicaIsReady");

		for (let i = 1; i < 8; i++) { // creacion de los div
			divElementsVisionA[i] = document.createElement("DIV");
				divElementsVisionA[i].classList.add("seccionesVA");
				divElementsVisionA[i].style.display = "flex";
				if(i!=6 && i!=7) divElementsVisionA[i].style.flexFlow = "row wrap";
				else divElementsVisionA[i].style.flexFlow = "column wrap";
			/*0 container, 1-2-3-4-5 secciones, */
		}
		let tituloVisionAr = document.createElement("H1"); // –> titulo
		tituloVisionAr.style.fontSize = "35px";
		let tituloHabilidadesVA = document.createElement("H2"); // –> titulo
		for (let i = 0; i < 4; i++) { // creacion de las p
			pElementsVisionA[i] = document.createElement("P");
			pElementsVisionA[i].classList.add("descripcionProyectosHechos");
			/*0 descripcionOne, 1 D imgOne, 2 D imgTwo, 3 tecnlogias usadas */
		}
		for (let i = 0; i < 4; i++) { // creacion de las img
			imgElementsVisionA[i] = document.createElement("IMG"); imgElementsVisionA[i].setAttribute("alt","Image not found");
			imgElementsVisionA[i].classList.add("imgVisionArmonica"+i);
			/*0 Icon VA... */
		}
		imgElementsVisionA[0].setAttribute("src","https://drive.google.com/uc?export=view&id=18gU1EqMONOdCRsId7PIEheiteQYABPOg");
		imgElementsVisionA[1].setAttribute("src","https://drive.google.com/uc?export=view&id=1sZuZPjXMHsrPp3pZPHOEWMMWMiy-L45x");
		imgElementsVisionA[2].setAttribute("src","https://drive.google.com/uc?export=view&id=1Rf4UneOLD8YD4Af7He18XctqqHCS7oEx");
		imgElementsVisionA[3].setAttribute("src","https://drive.google.com/uc?export=view&id=1C1Z0czmMtyc_g-fzpQUmFCZP_vx41Jdq");
		//––––––––––––––––––––––––––––––––––– Relleno –––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[0].style.display = "flex";
		pestanasProyectosAbiertas[0].style.flexDirection = "column";
		pestanasProyectosAbiertas[0].style.boxSizing = "border-box";
		tituloVisionAr.innerHTML = "Visi&oacuten arm&oacutenica";
		tituloVisionAr.style.marginRight = "15px";
		pElementsVisionA[0].classList.add("pCompleto");
		pElementsVisionA[0].style.maxWidth = "700px";
		pElementsVisionA[0].innerHTML = `
			Cuando llegas a los &uacuteltimos a&ntildeos del colegio, puede ser que te encuentres con la
			inc&oacutenita: ¿qu&eacute har&eacute cuando salga? <br>
			En la instituci&oacuten en la que cursaba, se efectuaba un text-vocacional el cual ten&iacutea el fin
			de separar a los alumnos en los distintos &eacutenfasis del colegio seg&uacuten sus gustos y habilidades,
			adem&aacutes de ayudarlos a acercarse a una profesi&oacuten. Pero ten&iacutea falencias.
		`;
		pElementsVisionA[1].innerHTML = `
			Es por ello que se plantea la meta de mejorarlo; de hacer un text que se adapte a la &eacutepoca,
			el cual a trav&eacutes de pasos sencillos e intuitivos lo realice, ayude al estudiante a tener una
			visi&oacuten a futuro y guarde y organice la informaci&oacuten generada. Esto &uacuteltimo haciendo que se convierta
			no solo en una herramienta para el alumno, sino para los encargados del text-vocacional. 
		`;
		pElementsVisionA[2].innerHTML = `
			Así pues, el programa trabajando en conjunto a un excel, organiza la informaci&oacuten que se ha generado de los 
			alumnos, para su posterior manejo en los &eacutenfasis. Este ser&iacutea el comienzo en la programaci&oacuten
			y el fin del proyecto de grado 11.
		`;
		tituloHabilidadesVA.innerHTML = "Tecnolog&iacuteas usadas";
		pElementsVisionA[3].innerHTML = `Java – Apache POI – JFreeChart – excel`;
		//––––––––––––––––––––––––––––––––––––– Inserccion ––––––––––––––––––––––––––––––––––––––//
		divElementsVisionA[1].appendChild(tituloVisionAr);
		divElementsVisionA[1].appendChild(imgElementsVisionA[0]);
		divElementsVisionA[1].style.justifyContent = "center";
			pestanasProyectosAbiertas[0].appendChild(divElementsVisionA[1]);
		divElementsVisionA[2].appendChild(pElementsVisionA[0]);
			pestanasProyectosAbiertas[0].appendChild(divElementsVisionA[2]);
		divElementsVisionA[3].appendChild(pElementsVisionA[1]);
		divElementsVisionA[7].appendChild(imgElementsVisionA[1]);
		divElementsVisionA[7].appendChild(imgElementsVisionA[2]);
		divElementsVisionA[7].style.width = "fit-content";
		divElementsVisionA[3].appendChild(divElementsVisionA[7]);
			pestanasProyectosAbiertas[0].appendChild(divElementsVisionA[3]);
		divElementsVisionA[4].appendChild(pElementsVisionA[2]);
		divElementsVisionA[4].appendChild(imgElementsVisionA[3]);
			pestanasProyectosAbiertas[0].appendChild(divElementsVisionA[4]);
		tituloHabilidadesVA.style.margin = "0 auto";
		divElementsVisionA[6].appendChild(tituloHabilidadesVA);
		pElementsVisionA[3].style.width = "fit-content";
		pElementsVisionA[3].style.margin = "0 auto";
		divElementsVisionA[6].appendChild(pElementsVisionA[3]);
		divElementsVisionA[6].style.width = "100%";
		divElementsVisionA[6].style.justifyContent = "center";
		divElementsVisionA[5].appendChild(divElementsVisionA[6]);
			pestanasProyectosAbiertas[0].appendChild(divElementsVisionA[5]);
		
		pestanaVisionArmonica.appendChild(pestanasProyectosAbiertas[0]);
		containerProyectos.appendChild(pestanaVisionArmonica);
		pestanasProyectosAbiertas[0] = document.querySelector("#visionArmonicaIsReady");
	}else{
		pestanasProyectosAbiertas[0].style.display = "flex";
		pestanasProyectosAbiertas[0].style.flexDirection = "column";
	}

	abrirCerrarProyectos();
	setTimeout(e=>{ abrirCerrarMenu(); }, 1000);
});