"use strict";
const body=document.getElementById("containerPestana");
const bienvenida= document.getElementById("bienvenida");
const cuadroBienvenida= document.getElementById("cuadroBienvenida");
const bComenzar= document.getElementById("bComenzar");
const fuegoBienvenida= document.querySelectorAll(".fuegoBienvenida");

var cicloBolaFuego=[]; cicloBolaFuego[1]=0; var poderDisparar = false;
var posicionYBienvenida= fuegoBienvenida[2].offsetTop;


const pestanaLevel= document.getElementById("pestanaLevel");
const levelsInfo= document.querySelectorAll(".levelsInfo");

setTimeout(inicioBienvenida, 1000);
function inicioBienvenida(){
    let altoC= cuadroBienvenida.offsetHeight;
    let anchoC= cuadroBienvenida.offsetWidth;
    let altoF= fuegoBienvenida[1].offsetHeight;
    
    let aleatorio = Math.random()*((anchoC-10)-10+1)+10;
    fuegoBienvenida[2].style.top= posicionYBienvenida+"";
    fuegoBienvenida[2].style.left= aleatorio+"px";
    
    cicloBolaFuego[0] = setInterval((e)=>{
        movimientoBolaBienvenida(altoC,altoF,posicionYBienvenida,aleatorio);
    } , 1/250);
}
function movimientoBolaBienvenida(altoC, altoF, posicionY, aleatorio){
    cicloBolaFuego[1]++;
    let b= (((altoC-altoF-posicionY)*cicloBolaFuego[1]/250)+posicionY);
    fuegoBienvenida[2].style.top= b+"px";
    
    if (cicloBolaFuego[1]==250) {
        clearInterval(cicloBolaFuego[0]);
        cicloBolaFuego[1]=0;
        setTimeout(inicioBienvenida, 1000);
    }
    if(b>=(bComenzar.offsetTop-10) && aleatorio>bComenzar.offsetLeft && aleatorio<(bComenzar.offsetWidth+bComenzar.offsetLeft)){
        
        clearInterval(cicloBolaFuego[0]);
        cicloBolaFuego[1]=0;
        fuegoBienvenida[2].style.top= posicionY+"";
        bComenzar.style.transition= "background 2s";
        bComenzar.style.background= "#f00";
        setTimeout((e)=>{
            bComenzar.style.background= "#aaa";
        }, 2000);
        setTimeout(inicioBienvenida, 4002);
    }
}

document.querySelector("#BestPlayer").addEventListener("click",e=>{
    cuadroBienvenida.style.display = "none";
    document.querySelector("#mejorJugador").style.display = "flex";
    let namePlayer = localStorage.getItem("namePlayer");
    let levelPlayer = localStorage.getItem("levelPlayer");
    if (namePlayer != null) {
        document.querySelector("#elMejor").innerHTML = namePlayer;
        document.querySelector("#desElMejor").value = `
            Ha alcanzado el nivel ${levelPlayer}
        `;
    }
});
document.querySelector("#volverInicio").addEventListener("click",e=>{
    cuadroBienvenida.style.display = "flex";
    document.querySelector("#mejorJugador").style.display = "none";
});
bComenzar.addEventListener("click", (e)=>{
    nombreJ = document.querySelector("#namePlayer").value;
    document.querySelector("#namePlayer").value = "";
    if (nombreJ.trim() != "") {

        clearInterval(cicloBolaFuego[0]); cicloBolaFuego[1]=0;
        fuegoBienvenida[2].style.top= posicionYBienvenida+"px";
        
        aparecerDesaparecerLevel();
    }else alert("Debes ingresar tu nmbre");
});
function bestPlayer(){
    let namePlayer = localStorage.getItem("namePlayer");
    let levelPlayer = localStorage.getItem("levelPlayer");

    if (namePlayer != null) {
        if (levelPlayer < level) {
            localStorage.setItem("namePlayer",nombreJ);
            localStorage.setItem("levelPlayer",level);
        }
    }else{
        localStorage.setItem("namePlayer",nombreJ);
        localStorage.setItem("levelPlayer",level);
    }
}var nombreJ;

const juegoContainer= document.getElementById("juegoContainer");
const juego= document.getElementById("juego");
const blockSave= document.querySelectorAll(".blockSave");
const bsControls= document.querySelectorAll(".bsControls");
const fuego= document.querySelectorAll(".fuego");
const maiz= document.getElementById("maiz");
const imgMaiz= document.getElementById("imgMaiz");

var cicloMaiz=[]; cicloMaiz[2]=0; cicloMaiz[3]=0;
var cicloBlockSave2, cicloDisparo=[], numbCiclo=[], divDisparos=[], fijoPosition=[];
var maizLeft, maizTop, maizBottom;
var moveRight=true, moveBottom=true, moveTop=true;
var vidas=7, level=1, numberDisparo=-1, numbMoveDisparo=-1, corn;
var anchoJuego, altoJuego;
var blockOver=[], blockOverGris=[], blockOverNegros=[], intNegro=[];
var numbOver=0, numbOverGris=0, numbOverNegros=0, numbTeletransportar=1, conteoTele=0;

blockSave[2].style.background= "#0f0";
blockSave[1].style.display= "none";
bsControls[5].style.display="none";
bsControls[3].innerHTML= "corn: "+vidas;

function blockSave0Estatico(){
    let aleatorioBlockSave0= Math.random()*(altoJuego-95)+65;
    blockSave[0].style.top= aleatorioBlockSave0+"px";
    maiz.style.top= (blockSave[0].offsetTop-maiz.offsetHeight)+"px";
    maiz.style.left= "0";
}
function blockSave1Estatico(){
    let aleatorioBlockSave1= Math.random()*(altoJuego-80)+20;
    blockSave[1].style.top= aleatorioBlockSave1+"px";
    blockSave[1].style.left= (anchoJuego-105)+"px";
}
function blockSave2Move(){
    clearInterval(cicloBlockSave2);
    let moveBlockSave2=0; let direccion=0;
    let aleatorioBlockSave2TopInicio= Math.random()*(altoJuego-80)+20;
    let aleatorioBlockSave2TopFinal= Math.random()*(altoJuego-80);
    let aleatorioBlockSave2LeftInicio= Math.random()*(anchoJuego-200)+100;
    let aleatorioBlockSave2LeftFinal= Math.random()*(anchoJuego-200)+100;
    
    let h= aleatorioBlockSave2TopFinal- aleatorioBlockSave2TopInicio;
    let a= aleatorioBlockSave2LeftFinal-aleatorioBlockSave2LeftInicio;
    
    blockSave[2].style.top= aleatorioBlockSave2TopInicio+"px";
    blockSave[2].style.left= aleatorioBlockSave2LeftInicio+"px";
    
    cicloBlockSave2= setInterval((e)=>{
        moveBlockSave2++;
        
        if(moveBlockSave2<1000){
            let h1=((h)*moveBlockSave2)/1000+aleatorioBlockSave2TopInicio;
            let a1=((a)*moveBlockSave2)/1000+aleatorioBlockSave2LeftInicio;
            blockSave[2].style.top= h1+"px";
            blockSave[2].style.left= a1+"px";
            
            aleatorioBlockSave2TopFinal=blockSave[2].offsetTop;
            aleatorioBlockSave2LeftFinal=blockSave[2].offsetLeft;
        }
        else if(moveBlockSave2 >= 1000 && moveBlockSave2 < 2000){
            direccion++;
            let h1=(-(h)*direccion)/1000+aleatorioBlockSave2TopFinal;
            let a1=(-(a)*direccion)/1000+aleatorioBlockSave2LeftFinal;
            blockSave[2].style.top= h1+"px";
            blockSave[2].style.left= a1+"px";
        }else{ direccion=0; moveBlockSave2=0;}
        
    }, 1/1000);
}
function blockSave2Estatico(){
    let aleatorioBlockSave2Top= Math.random()*(altoJuego-80)+20;
    let aleatorioBlockSave2Left= Math.random()*(anchoJuego-200)+100;
    
    blockSave[2].style.top= aleatorioBlockSave2Top+"px";
    blockSave[2].style.left= aleatorioBlockSave2Left+"px";
}

function aparecerCorn(siAparece, noAparece){
    let aparece= Math.floor(Math.random()*9);
    corn= document.createElement("DIV");
    
    if((aparece==3||aparece==5||aparece==7||aparece==0||siAparece==true) && noAparece==true){
        let aleatorioTop= Math.random()*(altoJuego-45)+25;
        let aleatorioLeft= Math.random()*(blockSave[2].offsetLeft-110)+100;
        corn.classList.add("corn");
        
        corn.style.top= aleatorioTop+"px";
        corn.style.left= aleatorioLeft+"px";
    }
    juego.appendChild(corn);
}

function aparecerDesaparecerLevel(){
    if(level==1){
        bienvenida.style.display= "none";
        juegoContainer.style.display= "none";
        body.style.background= "#fff";
        pestanaLevel.style.display= "block";
        levelsInfo[0].innerHTML= "Wellcome to level 1";
        levelsInfo[1].innerHTML= "- comienzo -";
        
        setTimeout((e)=>{
            pestanaLevel.style.display= "none";
            body.style.background= "#543211";
            juegoContainer.style.display= "flex";
            juegoContainer.style.flexDirection= "column";
            
            levels();
            setTimeout((e)=>{ alert("Intenta caer en la plataforma verde")}, 1000);
        }, 3500);
    }
    else if(level==6){
        juegoContainer.style.display= "none";
        body.style.background= "#fff";
        pestanaLevel.style.display= "block";
        levelsInfo[0].innerHTML= "Wellcome to level 6";
        levelsInfo[1].innerHTML= "- Intenta atinar -";
        
        setTimeout((e)=>{
            pestanaLevel.style.display= "none";
            body.style.background= "#543211";
            juegoContainer.style.display= "flex";
            juegoContainer.style.flexDirection= "column";
            levels();
        }, 3500);
    }
    else if(level==11){
        juegoContainer.style.display= "none";
        body.style.background= "#fff";
        pestanaLevel.style.display= "block";
        levelsInfo[0].innerHTML= "Wellcome to level 11";
        levelsInfo[1].innerHTML= "- Obst&aacuteculos -";
        
        setTimeout((e)=>{
            pestanaLevel.style.display= "none";
            body.style.background= "#543211";
            juegoContainer.style.display= "flex";
            juegoContainer.style.flexDirection= "column";
            levels();
        }, 3500);
    }
    else if(level==15){
        juegoContainer.style.display= "none";
        body.style.background= "#fff";
        pestanaLevel.style.display= "block";
        levelsInfo[0].innerHTML= "Wellcome to level 15";
        levelsInfo[1].innerHTML= "- Infinito -";
        
        setTimeout((e)=>{
            pestanaLevel.style.display= "none";
            body.style.background= "#543211";
            juegoContainer.style.display= "flex";
            juegoContainer.style.flexDirection= "column";
            levels();
        }, 3500);
    }else{
        levels();
    }
}

function reiniciarBlockOver(){
    for (let i = 0; i < numbOver; i++) {
        juego.removeChild(blockOver[i]);
    }
    for (let i = 0; i < numbOverGris; i++) {
        juego.removeChild(blockOverGris[i]);
    }
    for (let i = 0; i < numbOverNegros; i++) {
        juego.removeChild(blockOverNegros[i]);
    }
    numbOver=0; numbOverGris=0; numbOverNegros=0;
}
function crearBlockOver(over, overGris, overNegros){
    numbOver+= over; numbOverGris+= overGris; numbOverNegros+= overNegros;
    
    for (let i = 0; i < numbOver; i++) {
        blockOver[i]= document.createElement("DIV");
        blockOver[i].classList.add("blockOver");
        juego.appendChild(blockOver[i]);
    }
    for (let i = 0; i < numbOverGris; i++) {
        blockOverGris[i]= document.createElement("DIV");
        blockOverGris[i].classList.add("blockOverGris");
        juego.appendChild(blockOverGris[i]);
    }
    for (let i = 0; i < numbOverNegros; i++) {
        blockOverNegros[i]= document.createElement("DIV");
        blockOverNegros[i].classList.add("blockOverNegros");
        juego.appendChild(blockOverNegros[i]);
    }
}
function perderBlockOver(over, overGris, overNegros){
    if(over==true){
    for(let i=0; i<numbOver; i++){
        //los siguientes, son los de hacia arriba
        if(maiz.offsetTop<=(blockOver[i].offsetTop+blockOver[i].offsetHeight) && maiz.offsetTop>(blockOver[i].offsetTop+blockOver[i].offsetHeight -5) && maiz.offsetLeft>blockOver[i].offsetLeft && maiz.offsetLeft<(blockOver[i].offsetLeft+blockOver[i].offsetWidth)){
            
            perdedor();
        }
        else if(maiz.offsetTop<=(blockOver[i].offsetTop+blockOver[i].offsetHeight) && maiz.offsetTop>(blockOver[i].offsetTop+blockOver[i].offsetHeight -5) && (maiz.offsetLeft+maiz.offsetWidth)>blockOver[i].offsetLeft && (maiz.offsetLeft+maiz.offsetWidth)<(blockOver[i].offsetLeft+blockOver[i].offsetWidth)){
            
            perdedor();
        }
        //los siguientes, son los de hacia abajo
        else if((maiz.offsetTop+maiz.offsetHeight -3)>=blockOver[i].offsetTop && (maiz.offsetTop+maiz.offsetHeight)<(blockOver[i].offsetTop+5) && maiz.offsetLeft>blockOver[i].offsetLeft && maiz.offsetLeft<(blockOver[i].offsetLeft+blockOver[i].offsetWidth)){
            
            perdedor();
        }
        else if((maiz.offsetTop+maiz.offsetHeight -3)>=blockOver[i].offsetTop && (maiz.offsetTop+maiz.offsetHeight)<(blockOver[i].offsetTop+5) && (maiz.offsetLeft+maiz.offsetWidth)>blockOver[i].offsetLeft && (maiz.offsetLeft+maiz.offsetWidth)<(blockOver[i].offsetLeft+blockOver[i].offsetWidth)){
            
            perdedor();
        }
        //el siguiente, es hacia adelante
        else if((maiz.offsetLeft+maiz.offsetWidth-3)>=blockOver[i].offsetLeft && maiz.offsetTop >= blockOver[i].offsetTop && maiz.offsetTop <= (blockOver[i].offsetTop + blockOver[i].offsetHeight -1) && (maiz.offsetLeft+maiz.offsetWidth)<(blockOver[i].offsetLeft+blockOver[i].offsetWidth)){
            
            perdedor();
        }
    }}
    if(overGris==true){
    for(let i=0; i<numbOverGris; i++){
        //los siguientes, son los de hacia arriba
        if(maiz.offsetTop<=(blockOverGris[i].offsetTop+blockOverGris[i].offsetHeight) && maiz.offsetTop>(blockOverGris[i].offsetTop+blockOverGris[i].offsetHeight -5) && maiz.offsetLeft>blockOverGris[i].offsetLeft && maiz.offsetLeft<(blockOverGris[i].offsetLeft+blockOverGris[i].offsetWidth)){
            
            perdedor();
        }
        else if(maiz.offsetTop<=(blockOverGris[i].offsetTop+blockOverGris[i].offsetHeight) && maiz.offsetTop>(blockOverGris[i].offsetTop+blockOverGris[i].offsetHeight -5) && (maiz.offsetLeft+maiz.offsetWidth)>blockOverGris[i].offsetLeft && (maiz.offsetLeft+maiz.offsetWidth)<(blockOverGris[i].offsetLeft+blockOverGris[i].offsetWidth)){
            
            perdedor();
        }
        //los siguientes, son los de hacia abajo
        else if((maiz.offsetTop+maiz.offsetHeight -3)>=blockOverGris[i].offsetTop && (maiz.offsetTop+maiz.offsetHeight)<(blockOverGris[i].offsetTop+5) && maiz.offsetLeft>blockOverGris[i].offsetLeft && maiz.offsetLeft<(blockOverGris[i].offsetLeft+blockOverGris[i].offsetWidth)){
            
            perdedor();
        }
        else if((maiz.offsetTop+maiz.offsetHeight -3)>=blockOverGris[i].offsetTop && (maiz.offsetTop+maiz.offsetHeight)<(blockOverGris[i].offsetTop+5) && (maiz.offsetLeft+maiz.offsetWidth)>blockOverGris[i].offsetLeft && (maiz.offsetLeft+maiz.offsetWidth)<(blockOverGris[i].offsetLeft+blockOverGris[i].offsetWidth)){
            
            perdedor();
        }
        //el siguiente, es hacia adelante
        else if((maiz.offsetLeft+maiz.offsetWidth-3) >= blockOverGris[i].offsetLeft && maiz.offsetTop >= blockOverGris[i].offsetTop && maiz.offsetTop <= (blockOverGris[i].offsetTop + blockOverGris[i].offsetHeight -1) && (maiz.offsetLeft+maiz.offsetWidth)<(blockOverGris[i].offsetLeft+blockOverGris[i].offsetWidth)){
            
            perdedor();
        }
    }}
    if(overNegros==true){
    for(let i=0; i<numbOverNegros; i++){
        //los siguientes, son los de hacia arriba
        if(maiz.offsetTop<=(blockOverNegros[i].offsetTop+blockOverNegros[i].offsetHeight) && maiz.offsetTop>(blockOverNegros[i].offsetTop+blockOverNegros[i].offsetHeight -5) && maiz.offsetLeft>blockOverNegros[i].offsetLeft && maiz.offsetLeft<(blockOverNegros[i].offsetLeft+blockOverNegros[i].offsetWidth)){
            
            perdedor();
        }
        else if(maiz.offsetTop<=(blockOverNegros[i].offsetTop+blockOverNegros[i].offsetHeight) && maiz.offsetTop>(blockOverNegros[i].offsetTop+blockOverNegros[i].offsetHeight -5) && (maiz.offsetLeft+maiz.offsetWidth)>blockOverNegros[i].offsetLeft && (maiz.offsetLeft+maiz.offsetWidth)<(blockOverNegros[i].offsetLeft+blockOverNegros[i].offsetWidth)){
            
            perdedor();
        }
        //los siguientes, son los de hacia abajo
        else if((maiz.offsetTop+maiz.offsetHeight -3)>=blockOverNegros[i].offsetTop && (maiz.offsetTop+maiz.offsetHeight)<(blockOverNegros[i].offsetTop+5) && maiz.offsetLeft>blockOverNegros[i].offsetLeft && maiz.offsetLeft<(blockOverNegros[i].offsetLeft+blockOverNegros[i].offsetWidth)){
            
            perdedor();
        }
        else if((maiz.offsetTop+maiz.offsetHeight -3)>=blockOverNegros[i].offsetTop && (maiz.offsetTop+maiz.offsetHeight)<(blockOverNegros[i].offsetTop+5) && (maiz.offsetLeft+maiz.offsetWidth)>blockOverNegros[i].offsetLeft && (maiz.offsetLeft+maiz.offsetWidth)<(blockOverNegros[i].offsetLeft+blockOverNegros[i].offsetWidth)){
            
            perdedor();
        }
        //el siguiente, es hacia adelante
        else if((maiz.offsetLeft+maiz.offsetWidth-3) >= blockOverNegros[i].offsetLeft && maiz.offsetTop >= blockOverNegros[i].offsetTop && maiz.offsetTop <= (blockOverNegros[i].offsetTop + blockOverNegros[i].offsetHeight -1) && (maiz.offsetLeft+maiz.offsetWidth)<(blockOverNegros[i].offsetLeft+blockOverNegros[i].offsetWidth)){
            
            perdedor();
        }
    }}
}
function blockOverAleatorio(){
    for (let i = 0; i < numbOver; i++) {
        let ancho= Math.random()*(300+1)+50;
        let alto= Math.random()*(altoJuego/1.7)+5;
        blockOver[i].style.width= ancho+"px";
        blockOver[i].style.height= alto+"px";
        
        let positionTop= Math.random()*(altoJuego-blockOver[i].offsetHeight-30)+5;
        let positionleft= Math.random()*(anchoJuego-blockOver[i].offsetWidth-200)+100;
        blockOver[i].style.top= positionTop+"px";
        blockOver[i].style.left= positionleft+"px";
    }
    for (let i = 0; i < numbOverGris; i++) {
        let positionTop= Math.random()*(altoJuego- blockOverGris[i].offsetHeight-30)+5;
        let positionleft= Math.random()*(anchoJuego- blockOverGris[i].offsetWidth-200)+100;
        
        blockOverGris[i].style.top= positionTop+"px";
        blockOverGris[i].style.left= positionleft+"px";
    }
    for (let i = 0; i < numbOverNegros; i++) {
        let positionTop= Math.random()*(altoJuego- blockOverNegros[i].offsetHeight-30)+5;
        let positionleft= Math.random()*(anchoJuego- blockOverNegros[i].offsetWidth-200)+100;
        
        blockOverNegros[i].style.top= positionTop+"px";
        blockOverNegros[i].style.left= positionleft+"px";
    }
}
function destruirBlockOver(){
    for(let i=0; i<numbOver; i++){
        if((divDisparos[numbMoveDisparo].offsetLeft+9) >= blockOver[i].offsetLeft && divDisparos[numbMoveDisparo].offsetTop >= blockOver[i].offsetTop && divDisparos[numbMoveDisparo].offsetTop <= (blockOver[i].offsetTop + blockOver[i].offsetHeight - 7)){
            
            clearInterval(cicloDisparo[numbMoveDisparo]);
            blockOver[i].style.transition= "all 1s";
            blockOver[i].style.background= "#4400ff";
            divDisparos[numbMoveDisparo].style.display="none";
            setTimeout((e)=>{ blockOver[i].style.display= "none";}, 1003);
        }
    }
}


function levels(){
    bestPlayer();
    altoJuego= juego.offsetHeight; anchoJuego= juego.offsetWidth;
    setTimeout((e)=>{ alert("nivel "+level);}, 300);
    setTimeout((e)=>{
        if(moveRight==true){
            moveRight=false;
            cicloMaiz[1]=setInterval(moverAlante, 1/250);
        }
    }, 5000);
    blockSave0Estatico();
    
    if(level<=5){
        blockSave2Estatico();
        aparecerCorn(false, false);
        if(level==2){
            alert("Alcanza al grano de maiz para tener un corn más");
            aparecerCorn(true, true);
        }else if(level>2){ aparecerCorn(false, true);}
    }
    else if(level<=10){
        blockSave2Move();
        aparecerCorn(false, true);
    }
    else if(level==11){
        setTimeout((e)=>{ alert("Para poder pasar, dispara hacia la roca, puedes hacerlo al precionar 'a'.");},400);
        bsControls[5].style.display= "block"; poderDisparar = true;
        let topBlockSave0= juego.offsetHeight/2;
        
        blockSave[0].style.top= topBlockSave0+"px";
        maiz.style.top= (blockSave[0].offsetTop-maiz.offsetHeight+3)+"px";
        maiz.style.left= "0";
        blockSave[2].style.top= topBlockSave0+"px";
        blockSave[2].style.left= "500px";
        aparecerCorn(false, true);
        
        crearBlockOver(1,0,0);
        blockOver[0].style.width= "100px";
        blockOver[0].style.height= (juego.offsetHeight -30)+"px"
        blockOver[0].style.top= "5px";
        blockOver[0].style.left= "200px";
    }
    else if(level==12){
        setTimeout((e)=>{ alert("A esta roca necesitas explotarla (dispara dos veces)");},400);
        bsControls[5].style.display= "block"; poderDisparar = true;
        let topBlockSave0= juego.offsetHeight/2;
        
        blockSave[0].style.top= topBlockSave0+"px";
        maiz.style.top= (blockSave[0].offsetTop-maiz.offsetHeight+3)+"px";
        maiz.style.left= "0";
        blockSave[2].style.top= topBlockSave0+"px";
        blockSave[2].style.left= "500px";
        aparecerCorn(false, true);
        
        crearBlockOver(0,1,0);
        blockOverGris[0].style.width= "100px";
        blockOverGris[0].style.height= (juego.offsetHeight -30)+"px"
        blockOverGris[0].style.top= "5px";
        blockOverGris[0].style.left= "200px";
    }
    else if(level==13){
        setTimeout((e)=>{ alert("Cuida de no toparte con la roca negra, porque a esta no puedes destruirla");});
        bsControls[5].style.display= "block"; poderDisparar = true;
        let a= 5;
        crearBlockOver(0,0,3);
        
        for (let i = 0; i < 3; i++) {
            blockOverNegros[i].style.left= "200px";
            blockOverNegros[i].style.top= a+"px";
            a+=60;
        }
        let topBlockSave0= juego.offsetHeight/2;
        
        blockSave[0].style.top= topBlockSave0+"px";
        maiz.style.top= (blockSave[0].offsetTop-maiz.offsetHeight+3)+"px";
        maiz.style.left= "0";
        blockSave[2].style.top= "25px";
        blockSave[2].style.left= "405px";
        aparecerCorn(false, true);
    }
    else if(level==14){
        setTimeout((e)=>{ alert("Trata de caer en la zona segura (el otro bloque azul), para llegar al bloque verde y pasar el nivel");});
        bsControls[5].style.display= "block"; poderDisparar = true;
        teletransportar();
        aparecerCorn();
    }
    else if(level>=15){
        teletransportar();
        aparecerCorn();
    }
}


bsControls[0].addEventListener("click", (e)=>{
    moveTop=true;
    clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
    cicloMaiz[0]= setInterval(moverAbajo, 1/500);
    moveBottom=false;
});window.addEventListener("keyup", (e)=>{//–––––––––––––––funcion teclado––––––––––––––
    if (e.keyCode == 40) {
        moveTop=true;
        clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
        cicloMaiz[0]= setInterval(moverAbajo, 1/500);
        moveBottom=false;
    }
});
bsControls[1].addEventListener("click", (e)=>{
    moveBottom=true;
    clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
    cicloMaiz[0]=setInterval(moverArriba, 1/500);
    moveTop=false;
});window.addEventListener("keyup", (e)=>{ //–––––––––––––––funcion teclado––––––––––––––
    if (e.keyCode == 38) {
        moveBottom=true;
        clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
        cicloMaiz[0]=setInterval(moverArriba, 1/500);
        moveTop=false;
    }
});
bsControls[2].addEventListener("click", (e)=>{
    if(moveRight==true){
        moveRight=false;
        cicloMaiz[1]=setInterval(moverAlante, 1/250);
    }
});window.addEventListener("keyup", (e)=>{ //–––––––––––––––funcion teclado––––––––––––––
    if (e.keyCode == 39) {
        if(moveRight==true){
            moveRight=false;
            cicloMaiz[1]=setInterval(moverAlante, 1/250);
        }
    }
});
bsControls[4].addEventListener("click", (e)=>{
    history.go(0);
});
bsControls[5].addEventListener("click", (e)=>{
    numberDisparo++;
    let altoMaiz= maiz.offsetHeight;
    let anchoMaiz= maiz.offsetWidth;
    let positionDisparoTop= maiz.offsetTop+(altoMaiz/2)-1.5;
    let positionDisparoLeft= maiz.offsetLeft+anchoMaiz;
    imgMaiz.setAttribute("src", "https://drive.google.com/uc?export=view&id=1qkTzLt0UGr1Ral9l5YEmuordWIHL9IVf");
    
    setTimeout((e)=>{
        divDisparos[numberDisparo]= document.createElement("DIV");
        divDisparos[numberDisparo].classList.add("disparo");
        divDisparos[numberDisparo].style.top= positionDisparoTop+"px";
        divDisparos[numberDisparo].style.left= positionDisparoLeft+"px";
        juego.appendChild(divDisparos[numberDisparo]);
        imgMaiz.setAttribute("src", "https://drive.google.com/uc?export=view&id=1bjalnH22FpJG8uVVvLpG0zfmVyZVhznG");
        moveDisparo();
    }, 50);
});window.addEventListener("keyup", (e)=>{ //–––––––––––––––funcion teclado––––––––––––––
    if (e.keyCode == 65) {
        if (poderDisparar) {
            numberDisparo++;
            let altoMaiz= maiz.offsetHeight;
            let anchoMaiz= maiz.offsetWidth;
            let positionDisparoTop= maiz.offsetTop+(altoMaiz/2)-1.5;
            let positionDisparoLeft= maiz.offsetLeft+anchoMaiz;
            imgMaiz.setAttribute("src", "https://drive.google.com/uc?export=view&id=1qkTzLt0UGr1Ral9l5YEmuordWIHL9IVf");
            
            setTimeout((e)=>{
                divDisparos[numberDisparo]= document.createElement("DIV");
                divDisparos[numberDisparo].classList.add("disparo");
                divDisparos[numberDisparo].style.top= positionDisparoTop+"px";
                divDisparos[numberDisparo].style.left= positionDisparoLeft+"px";
                juego.appendChild(divDisparos[numberDisparo]);
                imgMaiz.setAttribute("src", "https://drive.google.com/uc?export=view&id=1bjalnH22FpJG8uVVvLpG0zfmVyZVhznG");
                moveDisparo();
            }, 50);
        }
    }
});

function moverAbajo(){
    cicloMaiz[3]++;
    if(cicloMaiz[3]==1){ maizTop=maiz.offsetTop;}
    let b= ((400*cicloMaiz[3]/500)+maizTop);
    maiz.style.top= b+"px";
    
    let a, h;
    if(blockSave[2].offsetLeft==0){ 
        a=10000; h=10000;
    }else{ a=blockSave[2].offsetLeft; h=blockSave[2].offsetTop;}
    
    if((maiz.offsetTop+maiz.offsetHeight-2)>h && (maiz.offsetTop+maiz.offsetHeight-2)<=(h+blockSave[2].offsetHeight) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[2].offsetWidth)){
        
        ganador();
    }
    else if((maiz.offsetTop+maiz.offsetHeight)>fuego[1].offsetTop){
        perdedor();
    }
}
function moverArriba(){
    cicloMaiz[3]++;
    if(cicloMaiz[3]==1){ maizTop=maiz.offsetTop;}
    let b= ((-400*cicloMaiz[3]/500)+maizTop);
    maiz.style.top= b+"px";
    
    let a, h;
    if(blockSave[2].offsetLeft==0){ 
        a=10000; h=10000;
    }else{ a=blockSave[2].offsetLeft; h=blockSave[2].offsetTop;}
    
    if(maiz.offsetTop<=(h+blockSave[2].offsetHeight-5) && maiz.offsetTop>(h) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[2].offsetWidth)){
        
        ganador();
    }
    else if(maiz.offsetTop<fuego[0].offsetHeight){
        perdedor();
    }
}
function moverAlante(){
    cicloMaiz[2]++;
    if(cicloMaiz[2]==1){ maizLeft=maiz.offsetLeft;}
    let b= ((400*cicloMaiz[2]/500)+maizLeft);
    maiz.style.left= b+"px";
    
    let a, h;
    if(blockSave[2].offsetLeft==0){ 
        a=10000; h=10000;
    }else{ a=blockSave[2].offsetLeft; h=blockSave[2].offsetTop;}
    
    if(corn.offsetLeft>maiz.offsetLeft && (corn.offsetLeft+corn.offsetWidth)<(maiz.offsetLeft+maiz.offsetWidth) && corn.offsetTop>maiz.offsetTop && (corn.offsetTop+corn.offsetHeight)<(maiz.offsetTop+maiz.offsetHeight)){
        
        corn.style.display="none"; vidas++;
        bsControls[3].innerHTML= "corn: "+vidas;
    }
    else if((maiz.offsetTop+maiz.offsetHeight-2)>h && (maiz.offsetTop+maiz.offsetHeight-2)<=(h+blockSave[2].offsetHeight) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[2].offsetWidth) && moveBottom==true){
        
        ganador();
    }
    else if(maiz.offsetTop<=(h+blockSave[2].offsetHeight) && maiz.offsetTop>(h+5) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[2].offsetWidth) && moveTop==true){
        
        ganador();
    }else{
        siTeletransportar();
    }
    
    let confirmOver=false, confirmGris=false, confirmNegro=false;
    if(numbOver>0){ confirmOver=true}
    if(numbOverGris>0){ confirmGris=true}
    if(numbOverNegros>0){ confirmNegro=true}
    perderBlockOver(confirmOver,confirmGris,confirmNegro);
    
    if(maiz.offsetLeft>(a+blockSave[2].offsetWidth+15)){
        perdedor();
    }
}

function ganador(){
    moveRight=true; level++;
    juego.removeChild(corn);
    clearInterval(cicloBlockSave2);
    clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
    clearInterval(cicloMaiz[1]); cicloMaiz[2]=0;
    destruirTodo();
    alert("has ganado");
    aparecerDesaparecerLevel();
}
function perdedor(){
    moveRight=true; vidas--;
    clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
    clearInterval(cicloMaiz[1]); cicloMaiz[2]=0;
    imgMaiz.setAttribute("src","https://drive.google.com/uc?export=view&id=1g40_0ba572fyi1afPWRS4tx2P5pMfkuu");
    
    setTimeout((e)=>{
        if(vidas>0){
            alert("has perdido, te quedan "+vidas+" corns");
            bsControls[3].innerHTML= "corn: "+vidas;
            maiz.style.left= "0";
            maiz.style.top= (blockSave[0].offsetTop-maiz.offsetHeight)+"px";
            setTimeout((e)=>{
                if(moveRight==true){
                    moveRight=false;
                    cicloMaiz[1]=setInterval(moverAlante, 1/250);
                }
            }, 5000);
        }else{
            clearInterval(cicloBlockSave2);
            level=1; vidas=7;
            bsControls[5].style.display= "none"; poderDisparar = false;
            destruirTodo();
            juego.removeChild(corn);
            bsControls[3].innerHTML= "corn: "+vidas;
            
            numbTeletransportar=1; conteoTele=0;
            blockSave[2].style.display= "block";
            blockSave[1].style.display= "none";
            aparecerDesaparecerLevel();
        }
        imgMaiz.setAttribute("src", "https://drive.google.com/uc?export=view&id=1bjalnH22FpJG8uVVvLpG0zfmVyZVhznG");
    }, 200);
}

function moveDisparo(){
    numbMoveDisparo++;
    destruir(numbMoveDisparo-1);
    
    numbCiclo[numbMoveDisparo]= 0;
    fijoPosition[numbMoveDisparo]= divDisparos[numbMoveDisparo].offsetLeft;
    
    cicloDisparo[numbMoveDisparo] = setInterval((e)=>{
        numbCiclo[numbMoveDisparo]++;
        let b= ((600*numbCiclo[numbMoveDisparo])/500)+fijoPosition[numbMoveDisparo];
        divDisparos[numbMoveDisparo].style.left= b+"px";
        
        destruirBlockOver();
        
        if(b>=(juego.offsetWidth + 10)){
            clearInterval(cicloDisparo[numbMoveDisparo]);
        }
    }, 1/500);
}
function destruir( position){
    if (position>=0) {
        clearInterval(cicloDisparo[position]);
        for (let i = 0; i < numbOverGris; i++) {
            if(divDisparos[position].offsetLeft>blockOverGris[i].offsetLeft && (divDisparos[position].offsetLeft+divDisparos[position].offsetWidth)<(blockOverGris[i].offsetLeft+blockOverGris[i].offsetWidth) && divDisparos[position].offsetTop>blockOverGris[i].offsetTop && (divDisparos[position].offsetTop+divDisparos[position].offsetHeight)<(blockOverGris[i].offsetTop+blockOverGris[i].offsetHeight)){
                
                blockOverGris[i].style.transition= "all 1s";
                blockOverGris[i].style.background= "#fff";
                setTimeout((e)=>{ blockOverGris[i].style.display= "none";}, 1003);
            }
        }
        divDisparos[position].style.transition= "all 1s";
        divDisparos[position].style.width= "30px";
        divDisparos[position].style.height= "30px";
        divDisparos[position].style.background= "#ffe9e9";
        setTimeout((e)=>{ divDisparos[position].style.display= "none";}, 1003);
    }
}
function destruirTodo(){
    for(let i=0; i<=numberDisparo; i++){
        juego.removeChild(divDisparos[i]);
        divDisparos[i]=0;divDisparos
    } numberDisparo=-1;
    for(let i=0; i<=numbMoveDisparo; i++){
        clearInterval(cicloDisparo[i]);
        fijoPosition[i]= 0;
        
    } numbMoveDisparo=-1;
    reiniciarBlockOver();
}

function teletransportar(){
    moveRight=true;
    clearInterval(cicloMaiz[0]); cicloMaiz[3]=0;
    clearInterval(cicloMaiz[1]); cicloMaiz[2]=0;
    let aleatorioOver, aleatorioOverGris, aleatorioOverNegros;
    if(altoJuego<300){
        aleatorioOver= Math.floor(Math.random()*(2));
        aleatorioOverGris= Math.floor(Math.random()*(3));
        aleatorioOverNegros= Math.floor(Math.random()*(3));
    }else{
        aleatorioOver= Math.floor(Math.random()*(3));
        aleatorioOverGris= Math.floor(Math.random()*(4));
        aleatorioOverNegros= Math.floor(Math.random()*(6));
    }
    
    if(conteoTele<numbTeletransportar){
        blockSave[2].style.display= "none";
        blockSave[1].style.display= "block";
        blockSave0Estatico(); blockSave1Estatico();
        
        crearBlockOver(aleatorioOver,aleatorioOverGris,aleatorioOverNegros);
        blockOverAleatorio();
    }else{
        numbTeletransportar++; conteoTele=0;
        blockSave[2].style.display= "block";
        blockSave[1].style.display= "none";
        blockSave0Estatico(); blockSave2Move();
        
        crearBlockOver(aleatorioOver,aleatorioOverGris,aleatorioOverNegros);
        blockOverAleatorio();
    }
}
function siTeletransportar(){
    let a, h;
    if(blockSave[1].offsetLeft==0){ 
        a=10000; h=10000;
    }else{ a=blockSave[1].offsetLeft; h=blockSave[1].offsetTop;}
    //se verifica abajo blockSave1
    if((maiz.offsetTop+maiz.offsetHeight-2)>h && (maiz.offsetTop+maiz.offsetHeight-2)<=(h+blockSave[1].offsetHeight) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[1].offsetWidth)){
        
        reiniciarBlockOver(); conteoTele++;
        teletransportar();
    }
    //se verifica arriba blockSave1
    if(maiz.offsetTop<=(h+blockSave[1].offsetHeight-5) && maiz.offsetTop>(h) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[1].offsetWidth)){
        
        reiniciarBlockOver(); conteoTele++;
        teletransportar();
    }
    //se verifica alante blockSave1
    if((maiz.offsetTop+maiz.offsetHeight-2)>h && (maiz.offsetTop+maiz.offsetHeight-2)<=(h+blockSave[1].offsetHeight) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[1].offsetWidth) && moveBottom==true){
        
        reiniciarBlockOver(); conteoTele++;
        teletransportar();
    }
    else if(maiz.offsetTop<=(h+blockSave[1].offsetHeight) && maiz.offsetTop>(h+5) && maiz.offsetLeft>a && (maiz.offsetLeft+maiz.offsetWidth)<=(a+blockSave[1].offsetWidth) && moveTop==true){
        
        reiniciarBlockOver();conteoTele++;
        teletransportar();
    }
    else if(maiz.offsetLeft>(a+blockSave[1].offsetWidth +20)){
        
        perdedor();
    }
}