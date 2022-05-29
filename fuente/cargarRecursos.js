function img(ruta){
    let i = document.createElement("IMG");
    i.setAttribute("src",ruta);
    i.setAttribute("alt"," ");
    return i;
}
window.addEventListener("load",e=>{
    pe("a").ft(()=>pe("a").ca(...pe(".nav",0)),"color","transparent");
    pe("f").ft(()=>pe("f").ca(...pe(".conocimientosIMG",0)),"event","mouseover",e=>{
        e.target.style.transition = "all 1.5s";
        e.target.style.transform = "rotate(-45deg)";
    },"event","mouseleave",e=>{
        setTimeout(e2=>{
            e.target.style.transform = "rotate(45deg)";
        },1400);
    });
});
let fondo = img("https://drive.google.com/uc?export=view&id=1i-YTiikKqq5Y7nOuj_waqq9JYkiBsdES");
let antrocha = img("https://drive.google.com/uc?export=view&id=1Oyt6CtOJPsFUKRPpZlz09wpbySE8gSNG");
let me = img("https://drive.google.com/uc?export=view&id=1Hudd990DUf9CEt43wEYz15et3ChCl7WO");
let habilidades = [];
habilidades[0] = img("https://drive.google.com/uc?export=view&id=1xE5XwBSk99R250ZCEFqcRBkTl4LrEM-j");
habilidades[0].classList.add("conocimientosIMG");
habilidades[1] = img("https://drive.google.com/uc?export=view&id=1R_AVSN0KiIK9RUJmdgR8XKfDh16gwiX1");
habilidades[1].classList.add("conocimientosIMG");
habilidades[2] = img("https://drive.google.com/uc?export=view&id=1RokJDn1B-tDgflsfN7KypeOFRJ92WbtS");
habilidades[2].classList.add("conocimientosIMG");
habilidades[3] = img("https://drive.google.com/uc?export=view&id=1sj8IsedUD7Y21cgWCANoW8uw68LxPzAh");
habilidades[3].classList.add("conocimientosIMG");
habilidades[4] = img("https://drive.google.com/uc?export=view&id=1rjckunA75Esx84Ixo2-W87b4lG0CmKdg");
habilidades[4].classList.add("conocimientosIMG");
habilidades[5] = img("https://drive.google.com/uc?export=view&id=1aypPrYQ9ILnV5oNo6Ku8cGlx3Jf0wpYx");
habilidades[5].classList.add("conocimientosIMG");
habilidades[6] = img("https://drive.google.com/uc?export=view&id=1usntge3pxQ2XytSzEuvZo9NQ45OWQNgd");
habilidades[6].classList.add("conocimientosIMG");
let portafolio = [];
portafolio[0] = img("https://drive.google.com/uc?export=view&id=1VGVStSdZ9ys4eb9e15YGHXihhH0lHhGa");
portafolio[1] = img("https://drive.google.com/uc?export=view&id=1sZuZPjXMHsrPp3pZPHOEWMMWMiy-L45x");
portafolio[2] = img("https://drive.google.com/uc?export=view&id=19z7Zch2F7GvRNy4Pb8ZwDUyZSIwnqVLs");
portafolio[3] = img("https://drive.google.com/uc?export=view&id=19xABHQaRofq1p9eOpCiPec39tl4FEqMk");
portafolio[3].style.objectPosition = "left";
portafolio[4] = img("https://drive.google.com/uc?export=view&id=1FA-sfG92VDtuGk2akW61wN5akR9xRsRr");
portafolio[4].style.objectPosition = "50%";
portafolio[5] = img("https://drive.google.com/uc?export=view&id=1CPhYMuVZgxg7JfxjqZnFOUO_uWghPxe0");
portafolio[6] = img("https://drive.google.com/uc?export=view&id=1q6zJCxmlpKLeddQpxPpsbB9ui_T3HwI2");
let fondoProyecto = img("https://drive.google.com/uc?export=view&id=1Zzs0njsVHak1sn5yS8iM4WVlAbHNGniy");
let blogs = [];
blogs[0] = img("https://drive.google.com/uc?export=view&id=1Cb9xl4AFrCaitXrWrUl7X7AnUhE59CIX");
blogs[1] = img("https://drive.google.com/uc?export=view&id=1qEj1W1OF7SxkVnuHRS-QU-ymVZ2snnD8");
blogs[2] = img("https://drive.google.com/uc?export=view&id=1GbhSreyw_7XmmojNElqpRNpkWRyG9-sy");
let contactos = [];
contactos[0] = img("https://drive.google.com/uc?export=view&id=1YbytZlj8U0KqlszcnugCKh01aTNq859m");
contactos[1] = img("https://drive.google.com/uc?export=view&id=129FzvioVqJid3VNeUkI7aaHVqDDszIv5");
contactos[2] = img("https://drive.google.com/uc?export=view&id=1-qA1wK7tgrxCoTmW-cekyqTfZfVz26lk");
contactos[3] = img("https://drive.google.com/uc?export=view&id=1R86GR0_TWi1G7AKJtl3VjYi82UFNmtHA");

pe("#absoluteImage").f("apend",fondo);
pe("#antorcha").f("apend",antrocha);
pe("#me").f("apend",me);
pe(".conocimientos",0).forEach((ele,i)=>{
    ele.f("apend",habilidades[i]);
});
pe(".fondoProyecto",0).forEach((ele,i)=>{
    ele.f("apend",fondoProyecto);
});
pe(".cara1",0).forEach((ele,i)=>{
    ele.f("apend",portafolio[i]);
});
pe(".blogImage",0).forEach((ele,i)=>{
    ele.f("apend",blogs[i]);
});
pe(".contatos",0).forEach((ele,i)=>{
    ele.f("apend",contactos[i]);
});