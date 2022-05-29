"use strict";

let abuelo = {
	neuronas: [],
	m: (id,fun)=>{ abuelo.neuronas[id] = fun; },
	f: (id,elemento,value,fun)=>{ try{ abuelo.neuronas[id](elemento,value,fun); }catch(error){ console.error("No se ha encontrado el parámetro "+id); } }
}

function pe(identificador,index,fin) {
	let elemento = document.querySelector(identificador);
	let elemento2 = [];
	if (index || index == 0){
		elemento = document.querySelectorAll(identificador);
		if ((index == 0 || index >= elemento.length) && !fin && fin != 0) {
			elemento.forEach(ele=>{
				elemento2.push({
					e: ele,
					m: (id,fun,atri)=>{ abuelo.m(id,fun,atri); },
					f: (id,value,fun)=>{ abuelo.f(id,ele,value,fun); },
					ca: (...parientes)=>{ return parientes; },
					ft: (funParientes, ...estilos)=>{
						let parientesStyles = funParientes();
						for(let i = 0; i < estilos.length; i++){
							if (typeof estilos[i] == "string" && estilos[i].includes(",")) {
								estilos[i] = estilos[i].split(",");
								for(let j = 0; j < estilos[i].length; j++){
									if (estilos[i][j] == "event" || estilos[i][j] == "atributo"){
										if (estilos[i][j] == "atributo") {
											parientesStyles.forEach(ele=>{
												ele.f(estilos[i][j],estilos[i][j+1],estilos[i][j+2]);
											}); j += 2;
										}else{
											parientesStyles.forEach(ele=>{
												ele.f(estilos[i][j],estilos[i][j+1],estilos[i+1]);
											}); j += 1; i += 1;
										}
									}else{
										parientesStyles.forEach(ele=>{
											ele.f(estilos[i][j],estilos[i][j+1]);
										}); j += 1;
									}
								}
							}else if (estilos[i] == "event" || estilos[i] == "atributo") {
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i],estilos[i+1],estilos[i+2]);
								}); i += 2;
							}else{
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i],estilos[i+1]);
								}); i += 1;
							}
						}
					}
				});
			});
		}else if(fin && (fin + index) <= elemento.length){
			for(let i = index; i <= (fin + index); i++){
				elemento2.push({
					e: elemento[i],
					m: (id,fun,atri)=>{ abuelo.m(id,fun,atri); },
					f: (id,value,fun)=>{ abuelo.f(id,elemento[i],value,fun); },
					ca: (...parientes)=>{ return parientes; },
					ft: (funParientes, ...estilos)=>{
						let parientesStyles = funParientes();
						for(let i = 0; i < estilos.length; i++){
							if (typeof estilos[i] == "string" && estilos[i].includes(",")) {
								estilos[i] = estilos[i].split(",");
								for(let j = 0; j < estilos[i].length; j++){
									if (estilos[i][j] == "event" || estilos[i][j] == "atributo"){
										if (estilos[i][j] == "atributo") {
											parientesStyles.forEach(ele=>{
												ele.f(estilos[i][j],estilos[i][j+1],estilos[i][j+2]);
											}); j += 2;
										}else{
											parientesStyles.forEach(ele=>{
												ele.f(estilos[i][j],estilos[i][j+1],estilos[i+1]);
											}); j += 1; i += 1;
										}
									}else{
										parientesStyles.forEach(ele=>{
											ele.f(estilos[i][j],estilos[i][j+1]);
										}); j += 1;
									}
								}
							}else if (estilos[i] == "event" || estilos[i] == "atributo") {
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i],estilos[i+1],estilos[i+2]);
								}); i += 2;
							}else{
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i],estilos[i+1]);
								}); i += 1;
							}
						}
					}
				});
			}
		}else{
			for(let i = 0; i < index; i++){
				elemento2.push({
					e: elemento[i],
					m: (id,fun,atri)=>{ abuelo.m(id,fun,atri); },
					f: (id,value,fun)=>{ abuelo.f(id,elemento[i],value,fun); },
					ca: (...parientes)=>{ return parientes; },
					ft: (funParientes, ...estilos)=>{
						let parientesStyles = funParientes();
						for(let i = 0; i < estilos.length; i++){
							if (typeof estilos[i] == "string" && estilos[i].includes(",")) {
								estilos[i] = estilos[i].split(",");
								for(let j = 0; j < estilos[i].length; j++){
									if (estilos[i][j] == "event" || estilos[i][j] == "atributo"){
										if (estilos[i][j] == "atributo") {
											parientesStyles.forEach(ele=>{
												ele.f(estilos[i][j],estilos[i][j+1],estilos[i][j+2]);
											}); j += 2;
										}else{
											parientesStyles.forEach(ele=>{
												ele.f(estilos[i][j],estilos[i][j+1],estilos[i+1]);
											}); j += 1; i += 1;
										}
									}else{
										parientesStyles.forEach(ele=>{
											ele.f(estilos[i][j],estilos[i][j+1]);
										}); j += 1;
									}
								}
							}else if (estilos[i] == "event" || estilos[i] == "atributo") {
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i],estilos[i+1],estilos[i+2]);
								}); i += 2;
							}else{
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i],estilos[i+1]);
								}); i += 1;
							}
						}
					}
				});
			}
		}
		return elemento2;
	}else{
		return {
			e: elemento,
			m: (id,fun,atri)=>{ abuelo.m(id,fun,atri); },
			f: (id,value,fun)=>{ abuelo.f(id,elemento,value,fun); },
			ca: (...parientes)=>{ return parientes },
			ft: (funParientes, ...estilos)=>{
				let parientesStyles = funParientes();
				for(let i = 0; i < estilos.length; i++){
					if (typeof estilos[i] == "string" && estilos[i].includes(",")) {
						estilos[i] = estilos[i].split(",");
						for(let j = 0; j < estilos[i].length; j++){
							if (estilos[i][j] == "event" || estilos[i][j] == "atributo"){
								if (estilos[i][j] == "atributo") {
									parientesStyles.forEach(ele=>{
										ele.f(estilos[i][j],estilos[i][j+1],estilos[i][j+2]);
									}); j += 2;
								}else{
									parientesStyles.forEach(ele=>{
										ele.f(estilos[i][j],estilos[i][j+1],estilos[i+1]);
									}); j += 1; i += 1;
								}
							}else{
								parientesStyles.forEach(ele=>{
									ele.f(estilos[i][j],estilos[i][j+1]);
								}); j += 1;
							}
						}
					}else if (estilos[i] == "event" || estilos[i] == "atributo") {
						parientesStyles.forEach(ele=>{
							ele.f(estilos[i],estilos[i+1],estilos[i+2]);
						}); i += 2;
					}else{
						parientesStyles.forEach(ele=>{
							ele.f(estilos[i],estilos[i+1]);
						}); i += 1;
					}
				}
			}
		}
	}
}
pe("A").m("event",(ele,value,fun)=>{ ele.addEventListener(value,fun) });
pe("A").m("atributo",(ele,value,atri)=>{ ele.setAttribute(value,atri) });
pe("A").m("class",(ele,value)=>{ ele.classList.add(value) });
pe("A").m("remove-class",(ele,value)=>{ ele.classList.remove(value) });
pe("A").m("replace-class",(ele,value)=>{ ele.classList.replace(value) });

pe("A").m("fondo",(ele,value)=>{ ele.style.background = value });
pe("A").m("backgroundImage",(ele,value)=>{ ele.style.backgroundImage = value });
pe("A").m("color",(ele,value)=>{ ele.style.color = value });
pe("A").m("margin",(ele,value)=>{ ele.style.margin = value });
pe("A").m("padding",(ele,value)=>{ ele.style.padding = value });
pe("A").m("width",(ele,value)=>{ ele.style.width = value });
pe("A").m("height",(ele,value)=>{ ele.style.height = value });
pe("A").m("z-index",(ele,value)=>{ ele.style.zIndex = value });
pe("A").m("opacity",(ele,value)=>{ ele.style.opacity = value });

pe("A").m("text-d",(ele,value)=>{ ele.style.textDecoration = value });
pe("A").m("text-a",(ele,value)=>{ ele.style.textAlign = value });
pe("A").m("text-t",(ele,value)=>{ ele.style.textTransform = value });
pe("A").m("text-s",(ele,value)=>{ ele.style.textShadow = value });

pe("A").m("animacion",(ele,value)=>{ ele.style.animation = value });
pe("A").m("transition",(ele,value)=>{ ele.style.transition = value });
pe("A").m("transform",(ele,value)=>{ ele.style.transform = value });
pe("A").m("apend",(ele,value)=>{ ele.appendChild(value) });

pe("A").m("display",(ele,value)=>{ ele.style.display = value });
pe("A").m("borderR",(ele,value)=>{ ele.style.borderRadius = value });
pe("A").m("border",(ele,value)=>{ ele.style.border = value });
pe("A").m("outline",(ele,value)=>{ ele.style.outline = value });
pe("A").m("boxSha",(ele,value)=>{ ele.style.boxShadow = value });
pe("A").m("boxS",(ele,value)=>{ ele.style.boxSizing = value });

pe("A").m("html",(ele,value)=>{ ele.innerHTML = value });
pe("A").m("html+",(ele,value)=>{ ele.innerHTML += value });
pe("A").m("value",(ele,value)=>{ ele.value = value });
pe("A").m("value+",(ele,value)=>{ ele.value += value });

pe("A").m("flex-d",(ele,value)=>{ ele.style.flexDirection = value });
pe("A").m("flex-w",(ele,value)=>{ ele.style.flexWrap = value });
pe("A").m("flex-f",(ele,value)=>{ ele.style.flexFlow = value });
pe("A").m("flex-g",(ele,value)=>{ ele.style.flexGrow = value });
pe("A").m("justify-c",(ele,value)=>{ ele.style.justifyContent = value });
pe("A").m("align-i",(ele,value)=>{ ele.style.alignItems = value });
pe("A").m("align-s",(ele,value)=>{ ele.style.alignSelf = value });

pe("A").m("position",(ele,value)=>{ ele.style.position = value });
pe("A").m("top",(ele,value)=>{ ele.style.top = value });
pe("A").m("left",(ele,value)=>{ ele.style.left = value });
pe("A").m("right",(ele,value)=>{ ele.style.right = value });
pe("A").m("bottom",(ele,value)=>{ ele.style.bottom = value });