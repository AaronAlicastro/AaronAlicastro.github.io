"use strict";
let taBierta = false, targetActual = false;
// funcion del nav –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const observerNav = new IntersectionObserver(navs => {
    navs.forEach(ele => {
        if (ele.isIntersecting) {
            if (ele.target.getAttribute("id") == "containerHome") vioSeccion(pe(".nav", 0)[0]);
            else if (ele.target.getAttribute("id") == "about") vioSeccion(pe(".nav", 0)[1]);
            else if (ele.target.getAttribute("id") == "containerPortafolio") vioSeccion(pe(".nav", 0)[2]);
            else if (ele.target.getAttribute("id") == "containerContact") vioSeccion(pe(".nav", 0)[3]);
        }
    });
}, {
    rootMargin: "0px",
    threshold: 0.1
});
pe(".secciones", 0).forEach(ele => { observerNav.observe(ele.e); });
function vioSeccion(es) {
    pe(".nav", 0).forEach(ele => {
        ele.f("text-d", "none");
    }); es.f("text-d", "underline #ac8700");
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
pe(".cara1", 0).forEach((ele, i) => {
    ele.f("event", "click", e => {
        e.stopPropagation();
        if(taBierta) openCloseFun(targetActual);
        pe("f").ft(() => pe("f").ca(...pe(".cara1", 0)), "transition,all 0s,z-index,100,opacity,1");
        pe("f").ft(() => pe("f").ca(...pe(".cara2", 0)), "transition,all 0s,z-index,0");
        ele.f("transition", "opacity 0.8s, z-index 0.8s");
        ele.f("z-index", "0");
        ele.f("opacity", "0");
        pe(".cara2", 0)[i].f("z-index", "100");
    });
});
pe("body").f("event", "click", e => {
    if(taBierta) openCloseFun(targetActual);
    pe("f").ft(() => pe("f").ca(...pe(".cara1", 0)), "transition,all 0s,z-index,100,opacity,1");
    pe("f").ft(() => pe("f").ca(...pe(".cara2", 0)), "transition,all 0s,z-index,0");
});
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
// mensaje de copiado ––––––––––––––––––––––––––––––––––––––––––––––––––––––
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
    navigator.clipboard.writeText("aalicastro5@gmail.com").then(() => {
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