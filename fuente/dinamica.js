const letrasAimation = document.querySelectorAll(".letrasAimation");
const tituloBienbenida = document.querySelector("#tituloBienbenida");
const body = document.querySelector("#body");

window.addEventListener("load", (e)=>{
	setTimeout((e)=>{ 
		for (var i = 0; i < 10; i++) {
			letrasAimation[i].style.display = "inline-block";
			letrasAimation[i].style.animation = "transitonPalabras 2.5s forwards";
		}
	},300);
	setTimeout((e)=>{
		letrasAimation[0].style.color = "#000032";
		letrasAimation[0].style.position = "absolute";
		letrasAimation[0].style.animation = "caidaPalabras0 5s forwards";
		letrasAimation[1].style.color = "#000032";
		letrasAimation[1].style.position = "absolute";
		letrasAimation[1].style.animation = "caidaPalabras1 5s forwards";
		letrasAimation[2].style.color = "#000032";
		letrasAimation[2].style.position = "absolute";
		letrasAimation[2].style.animation = "caidaPalabras2 5s forwards";
		letrasAimation[3].style.color = "#000032";
		letrasAimation[3].style.position = "absolute";
		letrasAimation[3].style.animation = "caidaPalabras3 5s forwards";
		letrasAimation[4].style.color = "#000032";
		letrasAimation[4].style.position = "absolute";
		letrasAimation[4].style.animation = "caidaPalabras4 5s forwards";
		letrasAimation[5].style.color = "#000032";
		letrasAimation[5].style.position = "absolute";
		letrasAimation[5].style.animation = "caidaPalabras5 5s forwards";
		letrasAimation[6].style.color = "#000032";
		letrasAimation[6].style.position = "absolute";
		letrasAimation[6].style.animation = "caidaPalabras6 5s forwards";
		letrasAimation[7].style.color = "#000032";
		letrasAimation[7].style.position = "absolute";
		letrasAimation[7].style.animation = "caidaPalabras7 5s forwards";
		letrasAimation[8].style.color = "#000032";
		letrasAimation[8].style.position = "absolute";
		letrasAimation[8].style.animation = "caidaPalabras8 5s forwards";
		letrasAimation[9].style.color = "#000032";
		letrasAimation[9].style.position = "absolute";
		letrasAimation[9].style.animation = "caidaPalabras9 5s forwards";
		body.style.animation = "aparecerColorFondo 5s forwards";
		setTimeout((e)=>{ tituloBienbenida.style.display = "none"}, 5001);
	},3000);
});
