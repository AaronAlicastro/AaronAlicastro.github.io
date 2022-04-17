"use strict";
var saveAtableIsReady = false;
var divElementsSaveAtable = [], pElementsSaveAtable = [], imgElementsSaveAtable = [];

proyectos[proyectos.length - 7].addEventListener("click",e=>{ // creacion de etiquetas
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
	pestanasOpen[6] = true;

	containerDescripcionProyectos.style.display = "none";
	if (!saveAtableIsReady) {
		saveAtableIsReady = true;
		let pestanaSaveAtable = document.createDocumentFragment();
		pestanasProyectosAbiertas[6] = document.createElement("DIV");
		pestanasProyectosAbiertas[6].setAttribute("id","saveAtableIsReady");

		for (let i = 1; i < 8; i++) { // creacion de los div
			divElementsSaveAtable[i] = document.createElement("DIV");
				divElementsSaveAtable[i].classList.add("seccionesVA");
				divElementsSaveAtable[i].style.display = "flex";
				if(i!=6 && i!=7) divElementsSaveAtable[i].style.flexFlow = "row wrap";
				else divElementsSaveAtable[i].style.flexFlow = "column wrap";
			/*0 container, 1-2-3-4-5 secciones, */
		}
		let tituloSaveAtable = document.createElement("H1"); // –> titulo
		tituloSaveAtable.style.fontSize = "35px";
		let tituloHabilidadesSaveATable = document.createElement("H2"); // –> titulo
		for (let i = 0; i < 4; i++) { // creacion de las p
			pElementsSaveAtable[i] = document.createElement("P");
			pElementsSaveAtable[i].classList.add("descripcionProyectosHechos");
			/*0 descripcionOne, 1 D imgOne, 2 D imgTwo, 3 tecnlogias usadas */
		}
		for (let i = 1; i <= 3; i++) { // creacion de las img
			imgElementsSaveAtable[i] = document.createElement("IMG"); imgElementsSaveAtable[i].setAttribute("alt","Image not found");
			imgElementsSaveAtable[i].classList.add("imgVisionArmonica"+i);
			/*0 Icon VA... */
		}
		imgElementsSaveAtable[1].setAttribute("src","https://drive.google.com/uc?export=view&id=1dkGqHIrT_NmjqAM701ahOl0j_kSxGYK8");
		imgElementsSaveAtable[2].setAttribute("src","https://drive.google.com/uc?export=view&id=1VGVStSdZ9ys4eb9e15YGHXihhH0lHhGa");
		imgElementsSaveAtable[3].setAttribute("src","https://drive.google.com/uc?export=view&id=1ibCGnZ4Guv0NHTGfh3AfDYziC-ctz56i");
		//––––––––––––––––––––––––––––––––––– Relleno –––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[6].style.display = "flex";
		pestanasProyectosAbiertas[6].style.flexDirection = "column";
		pestanasProyectosAbiertas[6].style.boxSizing = "border-box";
		pestanasProyectosAbiertas[6].style.maxWidth = "800px";
		tituloSaveAtable.innerHTML = "SaveAtable";
		pElementsSaveAtable[0].innerHTML = `
			Imag&iacutenate lo siguiente: llegas a un restaurante en donde previamente ya has reservado, no tienes la necesidad
			de esperar la carta o al mesero, sino que a trav&eacutes de un aplicativo poder elegir tus platos, hacer el pedido a la cocina
			y luego, tan solo esperar que est&eacute listo. Si quiera, despu&eacutes de comer, tener que esperar una 
			eternidad para cancelar, sino que por medio del mismo aplicativo, efectuar.
		`;
		pElementsSaveAtable[1].innerHTML = `
			Entonces eliges tu mesa con calma, te ubicas, con toda la disposici&oacuten del mundo te enfocas en elegir 
			la comida a ingerir, miras precios, promociones, agregas a la lista y luego env&iacuteas la orden
			para posteriormente solo esperar que est&eacute su pedido.
		`;
		pElementsSaveAtable[2].innerHTML = `
			Y luego al terminar de comer, tan solo abre el aplicativo, cancela, muestra el comprobante y se retira.
		`;
		tituloHabilidadesSaveATable.innerHTML = "Tecnolog&iacuteas usadas";
		pElementsSaveAtable[3].innerHTML = "HTML – CSS – Javascript";
		//––––––––––––––––––––––––––––––––––––– Inserccion ––––––––––––––––––––––––––––––––––––––//
		divElementsSaveAtable[1].appendChild(tituloSaveAtable);
			pestanasProyectosAbiertas[6].appendChild(divElementsSaveAtable[1]);
		pElementsSaveAtable[0].style.width = "80%";
		divElementsSaveAtable[2].style.width = "100%";
		divElementsSaveAtable[2].style.boxSizing = "border-box";
		divElementsSaveAtable[2].appendChild(pElementsSaveAtable[0]);
			pestanasProyectosAbiertas[6].appendChild(divElementsSaveAtable[2]);
		divElementsSaveAtable[3].appendChild(pElementsSaveAtable[1]);
		divElementsSaveAtable[7].appendChild(imgElementsSaveAtable[1]);
		divElementsSaveAtable[7].appendChild(imgElementsSaveAtable[2]);
		divElementsSaveAtable[7].style.width = "fit-content";
		divElementsSaveAtable[3].appendChild(divElementsSaveAtable[7]);
			pestanasProyectosAbiertas[6].appendChild(divElementsSaveAtable[3]);
		pElementsSaveAtable[2].style.width = "80%";
		divElementsSaveAtable[4].style.width = "100%";
		divElementsSaveAtable[4].appendChild(pElementsSaveAtable[2]);
		divElementsSaveAtable[4].appendChild(imgElementsSaveAtable[3]);
			pestanasProyectosAbiertas[6].appendChild(divElementsSaveAtable[4]);
		divElementsSaveAtable[6].appendChild(tituloHabilidadesSaveATable);
		divElementsSaveAtable[6].appendChild(pElementsSaveAtable[3]);
		divElementsSaveAtable[6].style.width = "fit-content";
		divElementsSaveAtable[5].appendChild(divElementsSaveAtable[6]);
			pestanasProyectosAbiertas[6].appendChild(divElementsSaveAtable[5]);
		
		pestanaSaveAtable.appendChild(pestanasProyectosAbiertas[6]);
		containerProyectos.appendChild(pestanaSaveAtable);
		pestanasProyectosAbiertas[6] = document.querySelector("#saveAtableIsReady");
	}else{
		pestanasProyectosAbiertas[6].style.display = "flex";
		pestanasProyectosAbiertas[6].style.flexDirection = "column";
	}

	abrirCerrarProyectos();
	setTimeout(e=>{ abrirCerrarMenu(); }, 1000);
});