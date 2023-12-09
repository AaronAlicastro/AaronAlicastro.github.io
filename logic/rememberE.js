/*
 * Este algoritmo está enfocado para agrupar propiedades de los elementos html.
 * 
 * Suponte que tienes 100 elementos a los que le quieres aplicar la misma propiedad,
 * la solución es iterar cada uno de los elementos, pero no poseemos de una estructura para 
 * guiarnos; He aquí esta solución, en donde puedes asociar propiedades a un grupo de 
 * elementos pudiendo identificarlos de manera sencilla.
 * 
 * La variable global 'abuelo', 
 * Guardará en su propiedad neuronas el identificador a la propiedad a ejecutar;
 * Su propiedad m (memorizar), se encargará de efectuar lo antes descrito.
 * Su propiedad f (función), efecturá lo memorizado.
*/

"use strict";

// solo uso interno
var abuelo = {
	neuronas: [],
	m: (id, fun) => { abuelo.neuronas[id] = fun; },
	f: (id, elemento, value, fun) => {
		try { abuelo.neuronas[id](elemento, value, fun); }
		catch (error) { console.error("No se ha encontrado la propiedad " + id); }
	}
}

// solo uso interno
const genes = (elemento) => ({
	e: elemento,
	f: (id, value, fun) => { abuelo.f(id, elemento, value, fun); },
});

// lista de propiedades memorizadas
abuelo.m("event", (ele, value, fun) => { ele.addEventListener(value, fun) });
abuelo.m("atributo", (ele, value, atri) => { ele.setAttribute(value, atri) });
abuelo.m("add-class", (ele, value) => { ele.classList.add(value) });
abuelo.m("rm-class", (ele, value) => { ele.classList.remove(value) });

abuelo.m("fondo", (ele, value) => { ele.style.background = value });
abuelo.m("backgroundImage", (ele, value) => { ele.style.backgroundImage = value });
abuelo.m("color", (ele, value) => { ele.style.color = value });
abuelo.m("margin", (ele, value) => { ele.style.margin = value });
abuelo.m("padding", (ele, value) => { ele.style.padding = value });
abuelo.m("width", (ele, value) => { ele.style.width = value });
abuelo.m("height", (ele, value) => { ele.style.height = value });
abuelo.m("z-index", (ele, value) => { ele.style.zIndex = value });
abuelo.m("opacity", (ele, value) => { ele.style.opacity = value });

abuelo.m("text-d", (ele, value) => { ele.style.textDecoration = value });
abuelo.m("text-a", (ele, value) => { ele.style.textAlign = value });
abuelo.m("text-t", (ele, value) => { ele.style.textTransform = value });
abuelo.m("text-s", (ele, value) => { ele.style.textShadow = value });

abuelo.m("animacion", (ele, value) => { ele.style.animation = value });
abuelo.m("transition", (ele, value) => { ele.style.transition = value });
abuelo.m("transform", (ele, value) => { ele.style.transform = value });
abuelo.m("apend", (ele, value) => { ele.appendChild(value) });

abuelo.m("display", (ele, value) => { ele.style.display = value });
abuelo.m("borderR", (ele, value) => { ele.style.borderRadius = value });
abuelo.m("border", (ele, value) => { ele.style.border = value });
abuelo.m("outline", (ele, value) => { ele.style.outline = value });
abuelo.m("boxSha", (ele, value) => { ele.style.boxShadow = value });
abuelo.m("boxS", (ele, value) => { ele.style.boxSizing = value });

abuelo.m("innerText", (ele, value) => { ele.innerText = value });
abuelo.m("innerText+", (ele, value) => { ele.innerText += value });
abuelo.m("html", (ele, value) => { ele.innerHTML = value });
abuelo.m("html+", (ele, value) => { ele.innerHTML += value });
abuelo.m("value", (ele, value) => { ele.value = value });
abuelo.m("value+", (ele, value) => { ele.value += value });

abuelo.m("flex-d", (ele, value) => { ele.style.flexDirection = value });
abuelo.m("flex-w", (ele, value) => { ele.style.flexWrap = value });
abuelo.m("flex-f", (ele, value) => { ele.style.flexFlow = value });
abuelo.m("flex-g", (ele, value) => { ele.style.flexGrow = value });
abuelo.m("justify-c", (ele, value) => { ele.style.justifyContent = value });
abuelo.m("align-i", (ele, value) => { ele.style.alignItems = value });
abuelo.m("align-s", (ele, value) => { ele.style.alignSelf = value });

abuelo.m("position", (ele, value) => { ele.style.position = value });
abuelo.m("top", (ele, value) => { ele.style.top = value });
abuelo.m("left", (ele, value) => { ele.style.left = value });
abuelo.m("right", (ele, value) => { ele.style.right = value });
abuelo.m("bottom", (ele, value) => { ele.style.bottom = value });

/*
 * La función 'considera' es una retrospectiva del algortimo, esta, se encarga de agrupar
 * los elementos haciendo uso de los genes (del abuelo) previamente guardados.
 * 
 * La función 'aplicarPara' aplica a múltiples parientes del abuelo la misma lista de propiedades.
 * La sintaxis para aplicarlas es:
 * 
 * aplicarPara(
 * 		[genes],
* 		propiedad1, valor1,
* 		propiedad2, valor2, segundo_valor2 (si lo posee),
* 		propiedad3, valor3,
* 		...
 * );
 * 
 * O también se puede aplicar:
 * 
 * aplicarPara(
 * 		[genes],
* 		"propiedad1, valor1, propiedad2, valor2, propiedad3, valor3, ...",
 * );
 * 
 * O combinados:
 * 
 * aplicarPara(
 * 		[genes],
* 		"propiedad1, valor1, propiedad2, valor2, propiedad3, valor3, ...",
* 		propiedad2, valor2, segundo_valor2 (si lo posee),
* 		propiedad3, valor3,
* 		"propiedad1, valor1, propiedad2, valor2, propiedad3, valor3, ...",
* 		...
 * );
*/

// solo uso externo ---------------------------------------
const aplicarPara = (parientes_abuelo, ...propiedades) => {
	const prodiedad_incuye_3_parametros = (pr) => {
		if (pr == "event") return true;
		if (pr == "atributo") return true;
		return false;
	};

	for (let i = 0; i < propiedades.length; i++) {
		if (typeof propiedades[i] == "string") if (propiedades[i].includes(",")) {
			propiedades[i] = propiedades[i].split(",").map(pr => pr.trim());

			for (let j = 0; j < propiedades[i].length; j++) {
				if (prodiedad_incuye_3_parametros(propiedades[i][j])) {
					if (propiedades[i][j] == "atributo") {
						parientes_abuelo.forEach(ele => {
							ele.f(propiedades[i][j], propiedades[i][j + 1], propiedades[i][j + 2]);
						}); j += 2;
					} else {
						parientes_abuelo.forEach(ele => {
							ele.f(propiedades[i][j], propiedades[i][j + 1], propiedades[i + 1]);
						}); j += 1; i += 1;
					}
				} else {
					parientes_abuelo.forEach(ele => {
						ele.f(propiedades[i][j], propiedades[i][j + 1]);
					}); j += 1;
				}
			}
		} else if (prodiedad_incuye_3_parametros(propiedades[i])) {
			parientes_abuelo.forEach(ele => {
				ele.f(propiedades[i], propiedades[i + 1], propiedades[i + 2]);
			}); i += 2;
		} else {
			parientes_abuelo.forEach(ele => {
				ele.f(propiedades[i], propiedades[i + 1]);
			}); i += 1;
		}
	}
}

/*
 * posibilidades de retornos de considera:
 * 
 * hay 5 div con la clase 'prueba'
 * (div.prueba)*5
 * 
 * considera(".prueba"); //--> gen con el primer elemento
 * 
 * considera(".prueba", 0); //--> genes con todos los elementos
 * 
 * considera(".prueba", 1000); //--> genes con todos los elementos
 * 
 * considera(".prueba", 0, 'cualquier_cosa'); //--> genes con todos los elementos
 * 
 * considera(".prueba", 1, 3); //--> genes con el elemento 1 hasta el 3 correspondiente
 * 
 * considera(".prueba", 2, 100); //--> genes con el elemento 1 hasta el 2 correspondiente
 * 
 * considera(".prueba", 3, 0); //--> gen con el tercer elemento correspondiente
 * considera(".prueba", 5, 0); //--> gen con el quinto elemento correspondiente
 * 
 * considera(".prueba", 3, 1); //--> error
 * considera(".prueba", 3, 3); //--> error
 * considera(".prueba-noexiste", 0); //--> error
 * considera(".prueba-noexiste", 0); //--> error
*/

const considera = (identificador, index, fin) => {
	let elemento = document.querySelector(identificador);
	if (!elemento) {
		console.error("No existe ningún elemento identificado con '" + identificador + "'");
		return null;
	}

	if (index || index == 0) {
		let elemento2 = [];
		elemento = document.querySelectorAll(identificador);
		if (index == 0 || index >= elemento.length) {
			elemento.forEach(ele => {
				elemento2.push(genes(ele));
			});
		} else if (fin <= elemento.length && fin >= 0) {
			if (fin == 0) {
				elemento2 = genes(elemento[(index - 1)]);
			} else {
				if (fin > index) {
					for (let i = (index - 1); i < fin; i++) {
						elemento2.push(genes(elemento[i]));
					}
				} else {
					elemento2 = null;
					console.error("El último valor, debe ser el tope de selección, no igual ni mucho menos menor a " + index);
				}
			}
		} else {
			for (let i = 0; i < index; i++) {
				elemento2.push(genes(elemento[i]));
			}
		}
		return elemento2;
	} else {
		return genes(elemento);
	}
}
// --------------------------------------------------------