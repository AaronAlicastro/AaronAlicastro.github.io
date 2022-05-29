"use strict";
const observerNav = new IntersectionObserver(navs=>{
    navs.forEach(ele=>{
        if(ele.isIntersecting){
            if(ele.target.getAttribute("id") == "containerHome") vioSeccion(pe(".nav",0)[0]);
            else if(ele.target.getAttribute("id") == "about") vioSeccion(pe(".nav",0)[1]);
            else if(ele.target.getAttribute("id") == "containerPortafolio") vioSeccion(pe(".nav",0)[2]);
            else if(ele.target.getAttribute("id") == "containerBlogs") vioSeccion(pe(".nav",0)[3]);
            else if(ele.target.getAttribute("id") == "containerContact") vioSeccion(pe(".nav",0)[4]);
        }
    });
},{
    rootMargin: "0px",
    threshold: 0.00312
});
pe(".secciones",0).forEach(ele=>{ observerNav.observe(ele.e); });
function vioSeccion(es){
    pe(".nav",0).forEach(ele=>{
        ele.f("text-d","none");
    }); es.f("text-d","underline #fff");
}
pe("f").ft(()=>pe("f").ca(...pe(".nav",0)),"event","click",e=>{
    pe(".nav",0).forEach(ele=>{
        ele.f("text-d","none");
    }); e.target.style.textDecoration = "underline #fff";
},"event","mouseover",e=>{
    e.target.style.textDecoration = "underline #fff";
},"event","mouseleave",e=>{
    e.target.style.textDecoration = "none";
});
pe("f").ft(()=>pe("f").ca(...pe(".blogs",0)),"event","click",e=>{
    pe("#desaparecer").f("display","none");
    pe("#masInfoHobbby").f("display","flex");
    pe("#masInfoHobbby").f("flex-f","row wrap");
});
pe("#cerrarMasInfo").f("event","click",e=>{
    pe("#masInfoHobbby").f("display","none");
    pe("#desaparecer").f("display","block");
});
pe(".cara1",0).forEach((ele,i)=>{
    ele.f("event","click",e=>{
        pe("f").ft(()=>pe("f").ca(...pe(".cara1",0)),"transition,all 0s,z-index,100,opacity,1");
        pe("f").ft(()=>pe("f").ca(...pe(".cara2",0)),"transition,all 0s,z-index,0");
        e.stopPropagation();
        ele.f("transition","opacity 0.8s, z-index 0.8s");
        ele.f("z-index","0");
        ele.f("opacity","0");
        pe(".cara2",0)[i].f("z-index","100");
    });
});
pe("body").f("event","click",e=>{
    pe("f").ft(()=>pe("f").ca(...pe(".cara1",0)),"transition,all 0s,z-index,100,opacity,1");
    pe("f").ft(()=>pe("f").ca(...pe(".cara2",0)),"transition,all 0s,z-index,0");
});