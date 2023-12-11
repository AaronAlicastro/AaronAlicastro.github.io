const bienvenida= document.getElementById("bienvenida");
const player1= document.getElementById("jugador1");
const player2= document.getElementById("jugador2");
const bComenzar= document.getElementById("comenzar");
var jugador1, jugador2;

const juego= document.getElementById("juego");
const turno= document.getElementById("turno");
const info= document.getElementById("info");
const casillas= document.querySelectorAll(".casillas");
const images= document.querySelectorAll("img");
const puntaje1= document.getElementById("puntaje1");
const puntaje2= document.getElementById("puntaje2");
const bfinalizar= document.getElementById("finalizar");

var equis=true;
var cero=0,uno=0,dos=0,tres=0,cuatro=0,cinco=0,seis=0,siete=0,ocho=0;
var laEquis=[], laO=[];
laEquis[9]=0; laO[9]=0;


function alternar(){
    if(equis==true){
        equis=false;
        turno.innerHTML= "Turno de "+jugador2;
        info.innerHTML= "Toca (O)";
    }else{
        equis=true;
        turno.innerHTML= "Turno de "+jugador1;
        info.innerHTML= "Toca (X)";
    }
}
function cambioTurno(index){
    
    if(index==0){ cero++;}
    
    else if(index==1){ uno++;}
    
    else if(index==2){ dos++;}
    
    else if(index==3){ tres++;}
    
    else if(index==4){ cuatro++;}
    
    else if(index==5){ cinco++;}
    
    else if(index==6){ seis++;}
    
    else if(index==7){ siete++;}
    
    else if(index==8){ ocho++;}
    
    ganador();
    
    if((cero+uno+dos+tres+cuatro+cinco+seis+siete+ocho)==9){
        let play1=jugador1, play2=jugador2;
        jugador1=play2; jugador2=play1;
        let punt1=laEquis[9], punt2=laO[9];
        laEquis[9]=punt2; laO[9]=punt1;
        
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
    }
}
function ganador(){
    
    if(laEquis[0]==1 && laEquis[1]==1 && laEquis[2]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[0]==1 && laEquis[3]==1 && laEquis[6]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[0]==1 && laEquis[4]==1 && laEquis[8]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[1]==1 && laEquis[4]==1 && laEquis[7]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[2]==1 && laEquis[5]==1 && laEquis[8]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[3]==1 && laEquis[4]==1 && laEquis[5]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[4]==1 && laEquis[6]==1 && laEquis[2]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laEquis[6]==1 && laEquis[7]==1 && laEquis[8]==1){
        laEquis[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    
    
    
    
    if(laO[0]==1 && laO[1]==1 && laO[2]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[0]==1 && laO[3]==1 && laO[6]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[0]==1 && laO[4]==1 && laO[8]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[1]==1 && laO[4]==1 && laO[7]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[2]==1 && laO[5]==1 && laO[8]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[3]==1 && laO[4]==1 && laO[5]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[4]==1 && laO[6]==1 && laO[2]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
    else if(laO[6]==1 && laO[7]==1 && laO[8]==1){
        laO[9]+=1;
        for (let i = 0; i < 9; i++) {
            casillas[i].style.background= "#009100";
            images[i].setAttribute("src","https://drive.google.com/uc?export=view&id=1QaWm0gIM-snXHucFfEKY2lVj_or5jo-n");
            laEquis[i]=0; laO[i]=0;
        }
        alternar();
        cero=0;uno=0;dos=0;tres=0;cuatro=0;cinco=0;seis=0;siete=0;ocho=0;
        puntaje1.innerHTML= "puntaje de "+jugador1+" ("+laEquis[9]+")";
        puntaje2.innerHTML= "puntaje de "+jugador2+" ("+laO[9]+")";
    }
}
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//
bComenzar.addEventListener("click", (e)=>{
    bComenzar.style.transition= "background 1s";
    bComenzar.style.background= "#090";
    
    jugador1= player1.value+"";
    jugador2= player2.value+"";
    player1.value = "";
    player2.value = "";
    
    if((jugador1.trim())=="" || (jugador2.trim())==""){
        alert("Debes ingresar ambos nombres");
        bComenzar.style.background= "#050";
    }else{
        bienvenida.style.display= "none";
        juego.style.display= "flex";
        turno.innerHTML= "Turno de "+jugador1;
        puntaje1.innerHTML= "puntaje de "+jugador1+" (0)";
        puntaje2.innerHTML= "puntaje de "+jugador2+" (0)"
    }
});

bfinalizar.addEventListener("click", (e)=>{
    if(laEquis[9]>laO[9]){
        alert(jugador1+" ha ganado");
    }else if(laO[9]>laEquis[9]){
        alert(jugador2+" ha ganado");
    }else{ alert("Hay un empate"); }
    
    history.go(0);
});


casillas[0].addEventListener("click", (e)=>{
    if(cero==0){
       if(equis==true){
            images[0].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
            casillas[0].style.transition= "background 1.5s";
            casillas[0].style.background= "#030";
            laEquis[0]=1;
        }else{
            images[0].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
            casillas[0].style.transition= "background 1.5s";
            casillas[0].style.background= "#00f";
            laO[0]=1;
        }
        alternar();
        cambioTurno(0);
    }
});
casillas[1].addEventListener("click", (e)=>{
    if(uno==0){
        if(equis==true){
            images[1].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
            casillas[1].style.transition= "background 1.5s";
            casillas[1].style.background= "#030";
            laEquis[1]=1;
        }else{
            images[1].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
            casillas[1].style.transition= "background 1.5s";
            casillas[1].style.background= "#00f";
            laO[1]=1;
        }
        alternar();
        cambioTurno(1);
    }
});
casillas[2].addEventListener("click", (e)=>{
    if(dos==0){
    if(equis==true){
        images[2].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[2].style.transition= "background 1.5s";
        casillas[2].style.background= "#030";
        laEquis[2]=1;
    }else{
        images[2].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[2].style.transition= "background 1.5s";
        casillas[2].style.background= "#00f";
        laO[2]=1;
    }
    alternar();
        cambioTurno(2);
    }
});
casillas[3].addEventListener("click", (e)=>{
    if(tres==0){
    if(equis==true){
        images[3].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[3].style.transition= "background 1.5s";
        casillas[3].style.background= "#030";
        laEquis[3]=1;
    }else{
        images[3].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[3].style.transition= "background 1.5s";
        casillas[3].style.background= "#00f";
        laO[3]=1;
    }
    alternar();
        cambioTurno(3);
    }
});
casillas[4].addEventListener("click", (e)=>{
    if(cuatro==0){
    if(equis==true){
        images[4].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[4].style.transition= "background 1.5s";
        casillas[4].style.background= "#030";
        laEquis[4]=1;
    }else{
        images[4].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[4].style.transition= "background 1.5s";
        casillas[4].style.background= "#00f";
        laO[4]=1;
    }
    alternar();
        cambioTurno(4);
    }
});
casillas[5].addEventListener("click", (e)=>{
    if(cinco==0){
    if(equis==true){
        images[5].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[5].style.transition= "background 1.5s";
        casillas[5].style.background= "#030";
        laEquis[5]=1;
    }else{
        images[5].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[5].style.transition= "background 1.5s";
        casillas[5].style.background= "#00f";
        laO[5]=1;
    }
    alternar();
        cambioTurno(5);
    }
});
casillas[6].addEventListener("click", (e)=>{
    if(seis==0){
    if(equis==true){
        images[6].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[6].style.transition= "background 1.5s";
        casillas[6].style.background= "#030";
        laEquis[6]=1;
    }else{
        images[6].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[6].style.transition= "background 1.5s";
        casillas[6].style.background= "#00f";
        laO[6]=1;
    }
    alternar();
        cambioTurno(6);
    }
});
casillas[7].addEventListener("click", (e)=>{
    if(siete==0){
    if(equis==true){
        images[7].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[7].style.transition= "background 1.5s";
        casillas[7].style.background= "#030";
        laEquis[7]=1;
    }else{
        images[7].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[7].style.transition= "background 1.5s";
        casillas[7].style.background= "#00f";
        laO[7]=1;
    }
    alternar();
        cambioTurno(7);
    }
});
casillas[8].addEventListener("click", (e)=>{
    if(ocho==0){
    if(equis==true){
        images[8].setAttribute("src","https://drive.google.com/uc?export=view&id=12UOkvlSiskYe783i1pyM8oW5vrgFYAZz");
        casillas[8].style.transition= "background 1.5s";
        casillas[8].style.background= "#030";
        laEquis[8]=1;
    }else{
        images[8].setAttribute("src","https://drive.google.com/uc?export=view&id=1FQNJYDW7wY5xKPB3-4FcCcCOebzr3bB1");
        casillas[8].style.transition= "background 1.5s";
        casillas[8].style.background= "#00f";
        laO[8]=1;
    }
    alternar();
        cambioTurno(8);
    }
});