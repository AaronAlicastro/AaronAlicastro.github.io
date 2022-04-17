"use strict";
var laViejaIsReady = false, tapaPosition = "", enProcesoWin = false;
var divElementsLaVieja = [], pElementsLaVieja = [], tapasMemorias = [];

proyectos[proyectos.length - 3].addEventListener("click",e=>{ // creacion de etiquetas
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
	pestanasOpen[2] = true;

	containerDescripcionProyectos.style.display = "none";
	if (!laViejaIsReady) {
		laViejaIsReady = true;
		let pestanaLaVieja = document.createDocumentFragment();
		pestanasProyectosAbiertas[2] = document.createElement("DIV");
		pestanasProyectosAbiertas[2].setAttribute("id","laViejaIsReady");
		divElementsLaVieja[25] = document.createElement("DIV");
		divElementsLaVieja[25].style.display = "flex";
		divElementsLaVieja[25].style.justifyContent = "space-around";
		divElementsLaVieja[25].style.width = "100%";
		divElementsLaVieja[25].style.boxSizing = "border-box";
		divElementsLaVieja[25].setAttribute("id","seccionMemoria");
		let a = 1, b = 0;
		for (let i = 1; i <= 24; i++) { // creacion de los div
				divElementsLaVieja[i] = document.createElement("DIV");
				divElementsLaVieja[i].style.display = "flex";
			if (i <= 4) {
				divElementsLaVieja[i].style.flexFlow = "row wrap";
				divElementsLaVieja[i].classList.add("seccionesVA");
				if(i == 4){
					divElementsLaVieja[i].classList.add("seccionMemoria");
					divElementsLaVieja[i].style.flexFlow = "column wrap";
				}
			}else if(i <= 8){
				divElementsLaVieja[i].style.flexFlow = "row wrap";
				divElementsLaVieja[i].classList.add("memoriaColumnas");
				divElementsLaVieja[4].appendChild(divElementsLaVieja[i]);
			}else{
				b++;
				divElementsLaVieja[i].classList.add("memoriaElements");
				divElementsLaVieja[i].style.flexFlow = "row wrap";
				divElementsLaVieja[4+a].appendChild(divElementsLaVieja[i]);
				if (b == 1) {b = 0; a++;}
			}
		}
		let h2Habilidades = document.createElement("H2");
		h2Habilidades.classList.add("seccionesVA");
		h2Habilidades.classList.add("textoCentrado");
		let pDesHabilidades = document.createElement("P");
		pDesHabilidades.classList.add("seccionesVA");
		pDesHabilidades.classList.add("textoCentrado");
		let tituloLaVieja = document.createElement("H1"); // –> titulo
		tituloLaVieja.style.fontSize = "35px";
		let tituloPreguntaLaVieja = document.createElement("H4"); // –> titulo
		for (let i = 0; i < 17; i++) { // creacion de las p y sus tapas
			pElementsLaVieja[i] = document.createElement("P");
			pElementsLaVieja[i].style.position = "relative";
			pElementsLaVieja[i].classList.add("memoriaP");
			if (i > 0) pElementsLaVieja[i].classList.add("innerMemoria");
		} sorteoMemoria(); agregarTapaMemoria();
		a = 1; b = 0;
		pElementsLaVieja.forEach((ele,i)=>{
			if (i > 0) {
				b++;
				divElementsLaVieja[8+a].appendChild(ele);
				if (b == 4) {b = 0; a++;}
			}
		});

		//––––––––––––––––––––––––––––––––––– Relleno –––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[2].style.display = "flex";
		pestanasProyectosAbiertas[2].style.flexFlow = "column wrap";
		pestanasProyectosAbiertas[2].style.boxSizing = "border-box";
		tituloLaVieja.innerHTML = "La vieja";
		pElementsLaVieja[0].innerHTML = `
			Me fascin&oacute la programaci&oacuten, tanto, que busque con sed insaciable aprender por
			mis propios medios; empec&eacute a aprender todo acerca de java, al menos toda la tor&iacutea 
			y ejercicios a monton, y a pesar de no contar con los medios para la pr&aacutetica, repasaba los 
			ejercicios en mi mente una y otra, y otra vez hasta colmar mis neuronas de posibilidades. As&iacute
			que conoc&iacute Javascript, y por consiguiente HTML y CSS, era tanto conocimiento los que invad&iacutean
			mis pensamientos que necesitaba poner en pr&aacutetica lo aprendido en js, ¿y por qu&eacute no haciendo un juego? <br>
			Uno cl&aacutesico f&aacutecil y divertido: la vieja, tambi&eacuten llamado triqui o tres en raya.
			Jeje, quiero que le eches un vistazo, pero antes te pongo un reto, ya que estamos hablando de juegos cl&aacutesicos,
			¿Eres capaz de resolver el juego de memoria que se encuentra abajo? <br>
			Debes encontrar al menos dos pares, o en contrar el par que dice 'La vieja', para obtener el link de la p&aacutegina,
			tienes solo 3 vidas. Suerte.
		`;
		pElementsLaVieja[0].style.fontSize = "20px";
		tituloPreguntaLaVieja.innerHTML = "¿Te animas a intentarlo?"
		tituloPreguntaLaVieja.style.fontSize  = "20px";
		h2Habilidades.innerHTML = "Tecnologías usadas";
		pDesHabilidades.innerHTML =  "HTML – CSS – Javascript";
		//––––––––––––––––––––––––––––––––––––– Inserccion ––––––––––––––––––––––––––––––––––––––//
		divElementsLaVieja[1].appendChild(tituloLaVieja);
			pestanasProyectosAbiertas[2].appendChild(divElementsLaVieja[1]);
		divElementsLaVieja[2].appendChild(pElementsLaVieja[0]);
			pestanasProyectosAbiertas[2].appendChild(divElementsLaVieja[2]);
		divElementsLaVieja[3].appendChild(tituloPreguntaLaVieja);
			pestanasProyectosAbiertas[2].appendChild(divElementsLaVieja[3]);
		divElementsLaVieja[25].appendChild(divElementsLaVieja[4]);
			pestanasProyectosAbiertas[2].appendChild(divElementsLaVieja[25]);
			pestanasProyectosAbiertas[2].appendChild(h2Habilidades);
			pestanasProyectosAbiertas[2].appendChild(pDesHabilidades);
		
		pestanaLaVieja.appendChild(pestanasProyectosAbiertas[2]);
		containerProyectos.appendChild(pestanaLaVieja);
		pestanasProyectosAbiertas[2] = document.querySelector("#laViejaIsReady");
		divElementsLaVieja[25] = document.querySelector("#seccionMemoria");
		pElementsLaVieja = document.querySelectorAll(".memoriaP");
		restaurarTapasLetras();
		pElementsLaVieja.forEach((ps,i)=>{
			ps.addEventListener("click",e=>{
				if (!enProcesoWin) {
					verificarGanarPerder((i-1),ps);
				}
			});
		});
	}else{
		pestanasProyectosAbiertas[2].style.display = "flex";
		pestanasProyectosAbiertas[2].style.flexDirection = "column";
		restaurarTapasLetras();
	}

	abrirCerrarProyectos();
	setTimeout(e=>{ abrirCerrarMenu(); }, 1000);
});

function sorteoMemoria() {
	let palabras = [`La vieja`,`La vieja`,`K-1`,`K-1`,
	`JJ`,`JJ`,`X-Y`,`X-Y`,`X1`,`X1`,
	`Z2`,`Z2`,`PAA`,`PAA`,`07`,`07`];
	palabras = desordenarPalabras(palabras);

	pElementsLaVieja.forEach((sitio,i)=>{
		if (i != 0) {
			sitio.innerHTML = palabras.pop();
		}
	});
}
function desordenarPalabras(arrayPalabras){
	for(let i in arrayPalabras){
		let aleatorio = Math.floor(Math.random()*16);
		let mientras = arrayPalabras[i];
		arrayPalabras[i] = arrayPalabras[aleatorio];
		arrayPalabras[aleatorio] = mientras;
	}
	return arrayPalabras;
}
function restaurarTapasLetras(){
	sorteoMemoria(); agregarTapaMemoria();
	tapasMemorias = document.querySelectorAll(".tapaMemoria");
	tapasMemorias.forEach((tapa,i)=>{
		tapa.addEventListener("click",e=>{
			if (!enProcesoWin) {
				tapa.style.transition = "opacity 1s";
				tapa.style.opacity = "0";
			}
		});
	});
}
function agregarTapaMemoria(){
	for (let i in pElementsLaVieja){
		if (i > 0) {
			let tapaP = "<div class='tapaMemoria'></div>";
			pElementsLaVieja[i].innerHTML += tapaP;
		}
	}
}
var clickOne = 0, barajaAnterior, positionAnterior, puntuacionMemoria = 0, vidasMemoria = 3; 
var perdio = false, gano = false, gano2 = true;
function verificarGanarPerder(pTActual,ps){
	enProcesoWin = true; anadirCamposNuevos();

	if (tapaPosition.indexOf("{"+pTActual+"}") == -1) {
		clickOne++;
		if (clickOne != 2){
			barajaAnterior = ps.innerText;
			positionAnterior = pTActual;
		}else{
			if (barajaAnterior == ps.innerText) {
				puntuacionMemoria++;

				if ((ps.innerText=="La vieja" || puntuacionMemoria==2) && !gano){
					divElementsLaVieja[26].style.display = "block";
					alert("Has ganado, ahora, haz clik en el boton blanco");
					alert("Te regalaré 3 vidas más para que intentes encontrar todas las parejas, ¿podrás?");
					vidasMemoria += 3; gano = true;
				}else if (puntuacionMemoria == 8) {
					alert("ASI SE HACE CAMPEON ¡!");
					tapaPosition = ""; gano2 = false;
					vidasMemoria = 3; puntuacionMemoria = 0;
					setTimeout(e=>{
						restaurarTapasLetras();
						nuevoH4.innerHTML = `
							Vidas: ${vidasMemoria} <br><br>
							Puntos: ${puntuacionMemoria}
						`;
					},3000);
				}
				nuevoH4.innerHTML = `
					Vidas: ${vidasMemoria} <br><br>
					Puntos: ${puntuacionMemoria}
				`; nuevoH4.style.color = "#0f0";
				setTimeout(e=>{
					nuevoH4.style.color = "#eef";
				},1000);
			}else{
				vidasMemoria--; perdio = true;
				let l = tapaPosition.substring(0,tapaPosition.indexOf(positionAnterior)-1);
				tapaPosition = l;

				if (vidasMemoria != 0) {
					nuevoH4.innerHTML = `
						Vidas: ${vidasMemoria} <br><br>
						Puntos: ${puntuacionMemoria}
					`;
					nuevoH4.style.color = "#f00";
					setTimeout(e=>{
						nuevoH4.style.color = "#eef";
						tapasMemorias[pTActual].style.opacity = "1";
						tapasMemorias[positionAnterior].style.opacity = "1";
					}, 800);
				}else{
					tapaPosition = ""; puntuacionMemoria = 0;
					if (!gano) vidasMemoria = 3;
					else vidasMemoria = 6;
					setTimeout(e=>{
						alert("Has perdido ¡!");
						restaurarTapasLetras();
						nuevoH4.innerHTML = `
							Vidas: ${vidasMemoria} <br><br>
							Puntos: ${puntuacionMemoria}
						`;
					},1000);
				}
			}
			clickOne = 0;
		}
	}
	if(tapaPosition.indexOf(pTActual+"") == -1 && !perdio && gano2) tapaPosition += "{"+pTActual+"}";
	setTimeout(e=>{enProcesoWin = false},1000);
	perdio = false; gano2 = true;
}
var nuevosCamposIsReady = false, nuevoH4;
function anadirCamposNuevos(){
	if (!nuevosCamposIsReady) {
		nuevosCamposIsReady = true;
		let divCN = document.createElement("DIV");
		let h4N = document.createElement("H4");
		let divNL = document.createElement("DIV");
		let aN = document.createElement("A");
		let bN = document.createElement("BUTTON");

		divCN.setAttribute("id","containerNuevosMemoria");
		h4N.setAttribute("id","puntosMemoria");
		h4N.innerHTML = `
						Vidas: ${vidasMemoria} <br><br>
						Puntos: ${puntuacionMemoria}
					`;
		divNL.setAttribute("id","containaerIrLavieja");
		aN.setAttribute("href","creacionesReferencias/indexLaVieja.html");
		aN.setAttribute("target","_BLANK");
		bN.classList.add("irALink");
		bN.innerHTML = "Ir a jugar";

		divCN.appendChild(h4N);
		aN.appendChild(bN);
		divNL.appendChild(aN);
		divCN.appendChild(divNL);

		divElementsLaVieja[25].appendChild(divCN);
		divElementsLaVieja[26] = document.querySelector("#containaerIrLavieja");
		nuevoH4 = document.querySelector("#puntosMemoria");
		nuevoH4.style.transition = "color 1s";
	}
}