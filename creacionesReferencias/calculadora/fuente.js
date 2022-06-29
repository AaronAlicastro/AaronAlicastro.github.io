let btn9 = document.getElementById("btn9");
let btn8 = document.getElementById("btn8");
let btn7 = document.getElementById("btn7");
let btn6 = document.getElementById("btn6");
let btn5 = document.getElementById("btn5");
let btn4 = document.getElementById("btn4");
let btn3 = document.getElementById("btn3");
let btn2 = document.getElementById("btn2");
let btn1 = document.getElementById("btn1");
let btn_ = document.getElementById("btn_");
let btn0 = document.getElementById("btn0");
let btnDer = document.getElementById("btnDer");
let btnDelete = document.getElementById("btnDelete");
let btnIzq = document.getElementById("btnIzq");
let btnX = document.getElementById("btnX");
let btnDividir = document.getElementById("btnDividir");
let btnMas = document.getElementById("btnMas");
let btnMenos = document.getElementById("btnMenos");
let btnIgual = document.getElementById("btnIgual");
let resultadoCalculadora = document.getElementById("resultadoCalculadora");
let historial = document.getElementById("historial");
let contenedor_txtHistorial = document.getElementById("contenedor_txtHistorial");
let txt_historial = document.getElementById("txt_historial");

let pusoOperativo = true, primeraOperacion = true, position = true, seDioIgual = false;
let resultadoTotal = 0, operativoActual = false, tipoOperacion = "";
let numero1 = "", numero2 = "", localStoragePosition = 0;
let verHistorial = true;

btn9.addEventListener("click", (e)=>{ ingresarExpresion("9");});
btn8.addEventListener("click", (e)=>{ ingresarExpresion("8");});
btn7.addEventListener("click", (e)=>{ ingresarExpresion("7");});
btn6.addEventListener("click", (e)=>{ ingresarExpresion("6");});
btn5.addEventListener("click", (e)=>{ ingresarExpresion("5");});
btn4.addEventListener("click", (e)=>{ ingresarExpresion("4");});
btn3.addEventListener("click", (e)=>{ ingresarExpresion("3");});
btn2.addEventListener("click", (e)=>{ ingresarExpresion("2");});
btn1.addEventListener("click", (e)=>{ ingresarExpresion("1");});
btn_.addEventListener("click", (e)=>{ ingresarExpresion(".");});
btn0.addEventListener("click", (e)=>{ ingresarExpresion("0");});
btnDelete.addEventListener("click", (e)=>{ ingresarExpresion("cancelar");});
btnX.addEventListener("click", (e)=>{ ingresarExpresion("*");});
btnDividir.addEventListener("click", (e)=>{ ingresarExpresion("/");});
btnMas.addEventListener("click", (e)=>{ ingresarExpresion("+");});
btnMenos.addEventListener("click", (e)=>{ ingresarExpresion("-");});
btnIgual.addEventListener("click", (e)=>{
	if (!pusoOperativo) {
		localStoragePosition++;
		escrituraCorrecta();
		let isResultado = resolver("");
		pusoOperativo = true;
		seDioIgual = true;
		localStorage.setItem("resultado"+localStoragePosition, isResultado);

	}else errorEscritura();
});
historial.addEventListener("click", (e)=>{
	if (verHistorial) {
		contenedor_txtHistorial.style.display = "block";
		rellenarHistorial();
		historial.innerText = "Dejar de ver";
		verHistorial = false;
	}else{
		contenedor_txtHistorial.style.display = "none";
		historial.innerText = "Ver el historial";
		verHistorial = true;
	}
});

function rellenarHistorial(){
	if (localStoragePosition == 0) txt_historial.value = "historial vacío";
	else txt_historial.value = "";
	for (let i = 1; i <= localStoragePosition; i++) {
		txt_historial.value += i+".			"+localStorage.getItem("resultado"+i)+"\n"
													+"––––––––––––––––––––––––––––– \n";
	}
}

function ingresarExpresion(expresion) {
	if (expresion == "+"){
		if (!pusoOperativo) {
			pusoOperativo = true;
			resultadoCalculadora.innerText += expresion;
			if (position) position = false;
			else position = true;
			if (tipoOperacion == "") tipoOperacion = expresion;
			resolver(expresion);
			tipoOperacion = expresion;

		}else{
			errorEscritura();
		}

	}else if(expresion == "-"){
		if (!pusoOperativo) {
			pusoOperativo = true;
			resultadoCalculadora.innerText += expresion;
			if (position) position = false;
			else position = true;
			if (tipoOperacion == "") tipoOperacion = expresion;
			resolver(expresion);
			tipoOperacion = expresion;

		}else{
			errorEscritura();
		}
		
	}else if(expresion == "*"){
		if (!pusoOperativo) {
			pusoOperativo = true;
			resultadoCalculadora.innerText += "x";
			if (position) position = false;
			else position = true;
			if (tipoOperacion == "") tipoOperacion = expresion;
			resolver(expresion);
			tipoOperacion = expresion;

		}else{
			errorEscritura();
		}
		
	}else if(expresion == "/"){
		if (!pusoOperativo) {
			pusoOperativo = true;
			resultadoCalculadora.innerText += expresion;
			if (position) position = false;
			else position = true;

			if (tipoOperacion == "") tipoOperacion = expresion;
			resolver(expresion);
			tipoOperacion = expresion;

		}else{
			errorEscritura();
		}
	
	}else if(expresion == "cancelar"){
		limpiar();
		
	}else if(expresion == "."){
		if (!seDioIgual) {
			resultadoCalculadora.innerText += expresion;
			if (position) numero1 += expresion;
			else numero2 += expresion;
			pusoOperativo = false;
		}else errorEscritura();
		
	}else{
		if (seDioIgual) {
			limpiar();
			resultadoCalculadora.innerText += expresion;
			escrituraCorrecta();
			if (position) numero1 += expresion;
			else numero2 += expresion;
			pusoOperativo = false;
			seDioIgual = false;
		}else{
			resultadoCalculadora.innerText += expresion;
			escrituraCorrecta();
			if (position) numero1 += expresion;
			else numero2 += expresion;
			pusoOperativo = false;
		}
	}
}

function errorEscritura(){
	resultadoCalculadora.style.background = "#fea795";
}
function escrituraCorrecta(){
	resultadoCalculadora.style.background = "#63f7c5";	
}
function limpiar(){
	resultadoCalculadora.innerText = "";
	pusoOperativo = false; primeraOperacion = true; position = true;
	resultadoTotal = 0; operativoActual = false;
	numero1 = ""; numero2 = "";
}

function resolver(expresion){
	if (tipoOperacion == "+") {
		if (primeraOperacion) primeraOperacion = false;
		else{
			if (operativoActual) {
				resultadoTotal = resultadoTotal + parseFloat(numero1);
			}else{
				resultadoTotal = parseFloat(numero1) + parseFloat(numero2);
			}
			position = true;
			operativoActual = true;
			resultadoCalculadora.innerText = resultadoTotal + expresion;
			numero1 = ""; numero2 = "";
		}

	}else if(tipoOperacion == "-"){
		if (primeraOperacion) primeraOperacion = false;
		else{
			if (operativoActual) {
				resultadoTotal = resultadoTotal - parseFloat(numero1);
			}else{
				resultadoTotal = parseFloat(numero1) - parseFloat(numero2);
			}
			position = true;
			operativoActual = true;
			resultadoCalculadora.innerText = resultadoTotal + expresion;
			numero1 = ""; numero2 = "";
		}

	}else if(tipoOperacion == "*"){
		if (primeraOperacion) primeraOperacion = false;
		else{
			if (operativoActual) {
				resultadoTotal = resultadoTotal * parseFloat(numero1);
			}else{
				resultadoTotal = parseFloat(numero1) * parseFloat(numero2);
			}
			position = true;
			operativoActual = true;
			resultadoCalculadora.innerText = resultadoTotal + expresion;
			numero1 = ""; numero2 = "";
		}
	}else if(tipoOperacion == "/"){
		if (primeraOperacion) primeraOperacion = false;
		else{
			if (operativoActual) {
				resultadoTotal = resultadoTotal / parseFloat(numero1);
			}else{
				resultadoTotal = parseFloat(numero1) / parseFloat(numero2);
			}
			position = true;
			operativoActual = true;
			resultadoCalculadora.innerText = resultadoTotal + expresion;
			numero1 = ""; numero2 = "";
		}
	}
	return resultadoTotal;
}