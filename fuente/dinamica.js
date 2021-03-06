"use strict";
let taBierta = false, targetActual = false, abrioNavMenu = false;
// funcion del nav –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const observerNav = new IntersectionObserver(navs => {
    navs.forEach(ele => {
        if (ele.isIntersecting) {
            if (ele.target.getAttribute("id") == "containerHome") vioSeccion(pe(".nav"), pe(".asideNavA"));
            else if (ele.target.getAttribute("id") == "about") vioSeccion(pe(".nav", 1, 0), pe(".asideNavA", 1, 0));
            else if (ele.target.getAttribute("id") == "containerPortafolio") vioSeccion(pe(".nav", 2, 0), pe(".asideNavA", 2, 0));
            else if (ele.target.getAttribute("id") == "containerContact") vioSeccion(pe(".nav", 3, 0), pe(".asideNavA", 3, 0));
        }
    });
}, {
    rootMargin: "0px",
    threshold: 0.1
});
pe(".secciones", 0).forEach(ele => { observerNav.observe(ele.e); });
function vioSeccion(esPc, esPhone) {
    pe(".nav", 0).forEach(ele => {
        ele.f("text-d", "none");
    }); esPc.f("text-d", "underline #ac8700");
    pe(".asideNavA", 0).forEach(ele => {
        ele.f("color", "#fff");
    }); esPhone.f("color", "#f00");
}
pe("f").ft(() => pe("f").ca(...pe(".nav", 0)), "event", "click", e => {
    pe(".nav", 0).forEach(ele => {
        ele.f("text-d", "none");
    }); e.target.style.textDecoration = "underline #fff";
}, "event", "mouseover", e => {
    e.target.style.textDecoration = "underline #fff";
}, "event", "mouseleave", e => {
    e.target.style.textDecoration = "none";
});
// movimiento de los conocimientos ––––––––––––––––––––––––––––––––––––––––––––
pe("f").ft(() => pe("f").ca(...pe(".conocimientosIMG", 0)), "event", "mouseover", e => {
    e.target.style.transition = "all 1.5s";
    e.target.style.transform = "rotate(-45deg)";
}, "event", "mouseleave", e => {
    setTimeout(e2 => {
        e.target.style.transform = "rotate(45deg)";
    }, 1400);
});
// funcion de las caras de los proyectos –––––––––––––––––––––––––––––––––––––
pe("f").ft(() => pe("f").ca(...pe(".cara2", 0)), "event", "click", e => {
    e.stopPropagation();
    if(taBierta) openCloseFun(targetActual);
});
pe("body").f("event", "click", e => {
    pe("#asideNav").f("display", "none");
    if(taBierta) openCloseFun(targetActual);
});
// funciones de los proyectos en modo celular ––––––––––––––––––––––––––––––––––
pe(".projectPhone_nav").e.children[0].style.display = "none";
pe(".projectPhone_nav", (pe(".projectPhone_nav", 0).length-1), 0).e.children[2].style.display = "none";
let carruIndex = 0, moveCarru, projectActual;
pe(".projectPhone_nav", 0).forEach( nv => {
    nv.e.children[0].addEventListener("click", e => {
        clearInterval(moveCarru);
        carruIndex--;
        projectActual.e.style.display = "none";
        projectActual = pe(".projectPhone", carruIndex, 0);
        projectActual.e.style.display = "block";
    });
    nv.e.children[2].addEventListener("click", e => {
        clearInterval(moveCarru);
        carruIndex++;
        projectActual.e.style.display = "none";
        projectActual = pe(".projectPhone", carruIndex, 0);
        projectActual.e.style.display = "block";
    });
});
const observerProyectoInPhone = new IntersectionObserver(n => {
    if(n[0].isIntersecting && carruIndex == 0){
        moveCarru = setInterval(()=>{
            if(carruIndex == 0) pe(".projectPhone").e.style.display = "none";
            else pe(".projectPhone", carruIndex, 0).e.style.display = "none";
            projectActual = pe(".projectPhone", (carruIndex + 1), 0);
            projectActual.e.style.display = "block";
            carruIndex++;
            if((carruIndex + 1) == pe(".projectPhone", 0).length) clearInterval(moveCarru);
        }, 1200);
    }
}, {
    rootMargin: "0px",
    threshold: 0.01
});
observerProyectoInPhone.observe( pe("#projectToPhone").e );
// etiquetas de los proyectos –––––––––––––––––––––––––––––––––––––––––––––––––––
function openCloseFun(target){
    if(target){
        let padre = target.offsetParent;
        let divHijo = padre.children[1];
        if(!taBierta){
            taBierta = true;
            target.innerHTML = "x";
            target.style.color = "#f00";
            padre.style.animation = "widthOpenClose 1.5s forwards";
            divHijo.style.display = "block";
        }else{
            taBierta = false;
            target.innerHTML = "<";
            target.style.color = "#000";
            padre.style.animation = "widthOpenCloseReverse 1.5s forwards";
            divHijo.style.display = "none";
        }
    }
}
pe("f").ft(() => pe("f").ca(...pe(".openClose", 0)), "event", "click", e => {
    e.stopPropagation();
    if(taBierta) openCloseFun(targetActual);
    targetActual = e.target;
    openCloseFun(e.target);
});
// funcion para enviar los email ––––––––––––––––––––––––––––––––––––––––––––––
pe("#sent-email").f("event", "click", e => {
    e.preventDefault();
    let campos = pe(".menEmail", 0), llenos = true;
    campos.forEach(v => {
        if (v.e.value.trim() == "") llenos = false;
    });
    if (llenos) {
        pe("#errorLlenar").f("display", "none");
        let sLink = "mailto:" + "aalicastro5@gmail.com"
            + "?subject=" + campos[2].e.value
            + "&body=Saludos, me llamo " + campos[0].e.value + ". " + campos[3].e.value
        window.location.href = sLink;
    } else {
        pe("#errorLlenar").f("display", "block");
    }
});
// funcion para corresponder el height del nav ––––––––––––––––––––––––––––––– 
window.addEventListener("load", e => {
    pe("#heightNav").f("height", pe("#nav").e.offsetHeight + "px");
});
window.addEventListener("resize", e => {
    pe("#heightNav").f("height", pe("#nav").e.offsetHeight + "px");
});
// mensajes de copiado ––––––––––––––––––––––––––––––––––––––––––––––––––––––
let desaparecioMensaje = true;
pe("f").ft(() => pe("f").ca(...pe(".clickOnPhone", 0)), "event", "click", e => {
    navigator.clipboard.writeText("3024964680").then(() => {
    }).catch(err => {
        console.log('Something went wrong', err);
    });
    pe("#mensajeCopy").f("display", "block");
    if(desaparecioMensaje){ 
        setTimeout(() => {
            desaparecioMensaje = true;
            pe("#mensajeCopy").f("display", "none");
        }, 1200);
    }
    desaparecioMensaje = false;
});
pe("f").ft(() => pe("f").ca(...pe(".clickOnEmail", 0)), "event", "click", e => {
    let sLink = "mailto:" + "aalicastro5@gmail.com"
        + "?subject="
        + "&body=";
    window.location.href = sLink;
});
// aparecer nav del phone –––––––––––––––––––––––––––––––––––––––––––––––––––
pe("#navMenu").f("event", "click", e => {
    e.stopPropagation();
    pe("#asideNav").f("display", "flex");
});
pe("#asideNav").f("event", "click", e => {
    e.stopPropagation();
});
pe("f").ft(() => pe("f").ca(...pe(".asideNavA", 0)), "event", "click", e => {
    pe("#asideNav").f("display", "none");
});