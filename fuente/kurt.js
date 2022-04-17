"use strict";
var kurtIsReady = false, encendioKurt = false, trozos = [], aLinkkurt;
var divElementsKurt = [], pElementsKurt = [], imgElementsKurt = [], sj = [];

proyectos[proyectos.length - 4].addEventListener("click",e=>{ // creacion de etiquetas
	containerProyectos.style.overflowY = "none";
	containerProyectos.style.boxSizing = "none";
	containerProyectos.style.height = "fit-content";
	pestanasOpen.forEach((pestana,i)=>{
		if (pestana){ 
			pestanasProyectosAbiertas[i].style.display = "none";
			pestanasOpen[i] = false;
		}
	}); 
	pestanasOpen[3] = true;

	containerDescripcionProyectos.style.display = "none";
	if (!kurtIsReady) {
		kurtIsReady = true;
		let pestanaKurt = document.createDocumentFragment();
		pestanasProyectosAbiertas[3] = document.createElement("DIV");
		pestanasProyectosAbiertas[3].setAttribute("id","kurtIsReady");
		divElementsKurt[0] = document.createElement("DIV");
		divElementsKurt[0].setAttribute("id","jugadorMove");
		aLinkkurt = document.createElement("A"); aLinkkurt.setAttribute("target","_BLANK");
		aLinkkurt.setAttribute("id","linkKurt");

		let a = 0;
		for (let i = 1; i <= 11; i++) { // creacion de los div
			divElementsKurt[i] = document.createElement("DIV");
			divElementsKurt[i].classList.add("seccionesVA");
			divElementsKurt[i].style.display = "flex";
			divElementsKurt[i].style.flexFlow = "row wrap";
			if(i == 3){ 
				divElementsKurt[i].style.flexFlow = "column wrap";
				divElementsKurt[i].setAttribute("id","containerSeccionesJuego");
			}else if(i <= 5 && i > 3){ divElementsKurt[i].classList.add("seccionesJuego");
			}else if (i <= 8 && i > 5) { divElementsKurt[i].classList.add("seccionesJuego"+i);
			}else if(i > 8){
					divElementsKurt[i].classList.add("trozos");
					divElementsKurt[i].classList.add("trozos"+i);
				if (i != 11) {
					divElementsKurt[6+a].appendChild(divElementsKurt[i]);
					divElementsKurt[4].appendChild(divElementsKurt[6+a]);
				}else{
					aLinkkurt.appendChild(divElementsKurt[i]);
					divElementsKurt[6+a].appendChild(aLinkkurt);
					divElementsKurt[4].appendChild(divElementsKurt[6+a]);
				}
				a++;
			}
		}
		let h2Habilidades = document.createElement("H2");
		h2Habilidades.classList.add("seccionesVA");
		h2Habilidades.classList.add("textoCentrado");
		let pDesHabilidades = document.createElement("P");
		pDesHabilidades.classList.add("seccionesVA");
		pDesHabilidades.classList.add("textoCentrado");
		let tituloKurt = document.createElement("H1"); // –> titulo
		tituloKurt.style.fontSize = "35px";
			pElementsKurt[0] = document.createElement("P"); // creacion del p
			pElementsKurt[0].classList.add("descripcionProyectosHechos");
			pElementsKurt[0].setAttribute("id","pKurt");
			pElementsKurt[0].classList.add("pCompleto");

			imgElementsKurt[0] = document.createElement("IMG"); imgElementsKurt[0].setAttribute("alt","Man");
			imgElementsKurt[0].setAttribute("id","imgPersonaMove");
			imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1DI9ihppQd5vOk_rCH4Pl-d_LOZUUT6sY");
		//––––––––––––––––––––––––––––––––––– Relleno –––––––––––––––––––––––––––––––––––––––//
		pestanasProyectosAbiertas[3].style.display = "flex";
		pestanasProyectosAbiertas[3].style.flexDirection = "column";
		pestanasProyectosAbiertas[3].style.boxSizing = "border-box";
		tituloKurt.innerHTML = "Kurt";
		pElementsKurt[0].innerHTML = `
			Javascript al igual que java, es tan extenso y con inmensas posibilidades, es innevitable el desear
			crear juegos en los que los componentes posean movimiento, interactividad, vida.
			¿Qué tal, si te digo que hice funcionar un juego usando solo 'setTimeout' y 'setInterval'?
			Deseo que le des una vuelta, aunque los colores no son los mas apropiados considero que apesar de la poca
			calidad tiene bastante dificultad.
			Con referencia al juego, abajo hay dos bloques verdes, uno de ellos posee el link que conlleva al sitio.
			Pero para activarlo debes de pisar el bloque con el personaje de abajo, usa las flechas del teclado para moverte
			y el espacio para saltar. Suerte.
		`;
		h2Habilidades.innerHTML = "Tecnolog&iacuteas usadas";
		pDesHabilidades.innerHTML =  "HTML – CSS – Javascript";
		//––––––––––––––––––––––––––––––––––––– Inserccion ––––––––––––––––––––––––––––––––––––––//
		divElementsKurt[1].appendChild(tituloKurt);
			pestanasProyectosAbiertas[3].appendChild(divElementsKurt[1]);
		divElementsKurt[2].appendChild(pElementsKurt[0]);
			pestanasProyectosAbiertas[3].appendChild(divElementsKurt[2]);
		divElementsKurt[0].appendChild(imgElementsKurt[0]);
		divElementsKurt[0].style.borderBottom = "2px solid #fff";
		divElementsKurt[3].appendChild(divElementsKurt[0]);
		divElementsKurt[3].appendChild(divElementsKurt[4]);
		divElementsKurt[3].appendChild(divElementsKurt[5]);
			pestanasProyectosAbiertas[3].appendChild(divElementsKurt[3]);
			pestanasProyectosAbiertas[3].appendChild(h2Habilidades);
			pestanasProyectosAbiertas[3].appendChild(pDesHabilidades);
		
		pestanaKurt.appendChild(pestanasProyectosAbiertas[3]);
		containerProyectos.appendChild(pestanaKurt);
		pestanasProyectosAbiertas[3] = document.querySelector("#kurtIsReady");
		divElementsKurt[0] = document.querySelector("#jugadorMove");
		imgElementsKurt[0] = document.querySelector("#imgPersonaMove");
		pElementsKurt[0] = document.querySelector("#pKurt");
		aLinkkurt = document.querySelector("#linkKurt");
		trozos = document.querySelectorAll(".trozos");
		sj = document.querySelectorAll(".seccionesJuego");
		encendioKurt = true;
		posicionarJugador();
	}else{
		pestanasProyectosAbiertas[3].style.display = "flex";
		pestanasProyectosAbiertas[3].style.flexDirection = "column";
		encendioKurt = true;
	}

	abrirCerrarProyectos();
	setTimeout(e=>{ 
		abrirCerrarMenu();
		setTimeout(e=>{ poseeMouse();},6000);
		body.addEventListener("mouseover",e=>{
			if (encendioKurt) mouseActive = true;
			else mouseActive = false;
		});
	}, 1000);
});

var mouseActive = false;
var moveHorizontal = 0, moveJump = 0, moveLeft = 0, moveRight = 0, positionActualJugador, enRecorrido = true;
window.addEventListener("keydown",e=>{
	if (encendioKurt) {
		if (e.keyCode == 32 || e.keyCode == 38) {
			clearInterval(moveCaidaLibre);
			saltoElMan();
		}
		else if (e.keyCode == 37) { //izquierda
			moveRight = 0;
			obtenerPositionActual(moveRight,moveLeft,-1);
			moveRight = 0; moveLeft++;

			moveHorizontal = (-200*moveLeft)/70 + positionActualJugador;
			divElementsKurt[0].style.left = moveHorizontal+"px";
			corriendoIzquierda();
		} 
		else if (e.keyCode == 39) { //derecha
			moveLeft = 0;
			obtenerPositionActual(moveLeft,moveRight,1);
			moveLeft = 0; moveRight++;

			moveHorizontal = (200*moveRight)/70 + positionActualJugador;
			divElementsKurt[0].style.left = moveHorizontal+"px";
			corriendoDerecha();
		}
	}
});
window.addEventListener("keyup",e=>{
	if (!efectuoSalto) {
		if (encendioKurt) setTimeout(e=>{ imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1DI9ihppQd5vOk_rCH4Pl-d_LOZUUT6sY")},1000);
	}
});

function posicionarJugador(){
	divElementsKurt[0].style.left = trozos[1].offsetLeft+"px";
	divElementsKurt[0].style.top = "0";
	movimientoCaidaLibre();
}
function obtenerPositionActual(condicion1,condicion2,direccion) {
	if(condicion1 == 0 && condicion2 == 0){
		positionActualJugador = divElementsKurt[0].offsetLeft;
	}
}
function corriendoDerecha(){
	if (!efectuoSalto) {
		if (enRecorrido) {
			enRecorrido = false;
			setTimeout(e=>{ imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1x6_YjjkuqpXs3SR6Q367Fe8z0NOqPQmF")},200);
		}else{
			enRecorrido = true;
			setTimeout(e=>{ imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=12WAVJNFZ9cP2f5ue1TJj7NlXo_PNV-sx")},200);
		}
	}
}function corriendoIzquierda(){
	if (!efectuoSalto) {
		if (enRecorrido) {
			enRecorrido = false;
			setTimeout(e=>{ imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1jSHFmHYEnOOnfgKzBycvzDndrs4xeOgX")},200);
		}else{
			enRecorrido = true;
			setTimeout(e=>{ imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1_259aAHDmgPjwE9tJec-zOLwXZ4EldLj")},200);
		}
	}
}
var salto = 0, efectuoSalto, conteoSalto = 0;
function saltoElMan(){
	if (!efectuoSalto) {
		if (moveRight != 0) {
			imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1H425Yb0eK98jXPAvwQ33Nk6CojJLzfFY");
			efectuoSalto = true;
			topActualJugador = divElementsKurt[0].offsetTop;
			conteoSalto = 0;
			salto = setInterval(e=>{
				conteoSalto++;
				caidaLibre = (-150*conteoSalto)/80 + topActualJugador;
				divElementsKurt[0].style.top = caidaLibre+"px";
				
				if (conteoSalto == 80){
					clearInterval(salto);
					efectuoSalto = false;
					imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1DI9ihppQd5vOk_rCH4Pl-d_LOZUUT6sY");
					movimientoCaidaLibre();
				}
			},1/80);
		}else if (moveLeft != 0) {
			imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1-y7iceuGN7dHtNhxDwLqYPqwtAF7ltwX");
			efectuoSalto = true;
			topActualJugador = divElementsKurt[0].offsetTop;
			conteoSalto = 0;
			salto = setInterval(e=>{
				conteoSalto++;
				caidaLibre = (-150*conteoSalto)/80 + topActualJugador;
				divElementsKurt[0].style.top = caidaLibre+"px";
				
				if (conteoSalto == 80){
					clearInterval(salto);
					efectuoSalto = false;
					imgElementsKurt[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1DI9ihppQd5vOk_rCH4Pl-d_LOZUUT6sY");
					movimientoCaidaLibre();
				}
			},1/80);
		}
	}
}

var caidaLibre = 0, conteoCaidalibre = 0, topActualJugador;
var moveCaidaLibre;
function movimientoCaidaLibre(){
	topActualJugador = divElementsKurt[0].offsetTop;
	conteoCaidalibre = 0;
	moveCaidaLibre = setInterval(e=>{
		if (encendioKurt) {
				let h = divElementsKurt[0].offsetTop;
				let hh = divElementsKurt[0].offsetHeight;
				let a = divElementsKurt[0].offsetLeft;
				let aa = divElementsKurt[0].offsetWidth;
				if ((h+hh) < sj[1].offsetTop) {
					let banda = false;
					for (let i = 0; i < 3; i++) {
						if ((h+hh)>=trozos[i].offsetTop && (h+hh) < (trozos[i].offsetTop+trozos[i].offsetHeight)
							&& a<(trozos[i].offsetLeft+trozos[i].offsetWidth) && (a+aa)>trozos[i].offsetLeft) {
							banda = true;
							if (i == 2) activarLinkKurt();
						}
					}
					if (!banda) {
						conteoCaidalibre++;
						caidaLibre = (200*conteoCaidalibre)/100 + topActualJugador;
					}else caidaLibre = h;
				}else{
					alert("Has perdido");
					clearInterval(moveCaidaLibre);
					caidaLibre = 0; conteoCaidalibre = 0;
					moveRight = 0; moveLeft = 0;
					posicionarJugador();
				}
				divElementsKurt[0].style.top = caidaLibre+"px";
		}
	},1/9999);
}
function poseeMouse(){
	if (!mouseActive) {
		pElementsKurt[0].innerHTML += `<br><br> 
		Es posible que no tenga a disposici&oacuten un teclado, as&iacute que le dejo disponible
		la p&aacutenina en el <b>bot&oacuten blanco</b>`;
		activarLinkKurt();
	}
}
function activarLinkKurt(){
	trozos[2].style.background = "#fff";
	trozos[2].style.border = "none";
	trozos[2].style.borderRadius = "12px";
	trozos[2].style.padding = "8px";
	trozos[2].innerHTML = "<b id='irAKurt'>Ir</b>";
	aLinkkurt.setAttribute("href","creacionesReferencias/indexKurt.html");
}