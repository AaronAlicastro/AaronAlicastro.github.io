"use strict";
let tapaPosition = "", enProcesoWin = false, memoriaSeccion;
let pElementsLaVieja = [], tapasMemorias = [], nuevoH4 = document.querySelector("#puntosMemoria");
let clickOne = 0, barajaAnterior, positionAnterior, puntuacionMemoria = 0; 
let perdio = false, gano = false, gano2 = true, vidasMemoria = 6;
sorteoMemoria(); agregarTapaMemoria();

memoriaSeccion = document.querySelector("#seccionMemoria");
pElementsLaVieja = document.querySelectorAll(".memoriaP");
restaurarTapasLetras();
		
pElementsLaVieja.forEach((ps,i)=>{
	ps.addEventListener("click",e=>{
		if (!enProcesoWin) {
			verificarGanarPerder(i,ps);
		}
	});
});

function sorteoMemoria() {
	let palabras = [`La vieja`,`La vieja`,`K-1`,`K-1`,
	`JJ`,`JJ`,`X-Y`,`X-Y`,`X1`,`X1`,
	`Z2`,`Z2`,`PAA`,`PAA`,`07`,`07`];
	palabras = desordenarPalabras(palabras);

	pElementsLaVieja.forEach((sitio,i)=>{
			sitio.innerHTML = palabras.pop();
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
	pElementsLaVieja.forEach(ele=>{
		let tapaP = "<div class='tapaMemoria'></div>";
		ele.innerHTML += tapaP;
	});
}
function verificarGanarPerder(pTActual,ps){
	enProcesoWin = true;
	if (tapaPosition.indexOf("{"+pTActual+"}") == -1) {
		clickOne++;
		if (clickOne != 2){
			barajaAnterior = ps.innerText;
			positionAnterior = pTActual;
		}else{
			if (barajaAnterior == ps.innerText) {
				puntuacionMemoria++;

				if (puntuacionMemoria == 8) {
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
				}else{
					nuevoH4.innerHTML = `
						Vidas: ${vidasMemoria} <br><br>
						Puntos: ${puntuacionMemoria}
					`; nuevoH4.style.color = "#0f0";
					setTimeout(e=>{
						nuevoH4.style.color = "#eef";
					},1000);
				}
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
					tapaPosition = ""; puntuacionMemoria = 0; vidasMemoria = 6;
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