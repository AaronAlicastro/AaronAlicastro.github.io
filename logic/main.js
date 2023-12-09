"use strict";
const languague_switch = new Languague_switch();

// insertando proyectos ...
let fragment = document.createDocumentFragment();
for (let i = 0; i < languague_switch.my_projects.spanish.length; i++) {
    fragment.appendChild(proyect_card_structure(i));
}
considera("#container_proyects").e.appendChild(fragment);

languague_switch.englishSelected(false); // first set languague

// obteniendo elementos
let page_float_button = considera("#page_float_button");

let main_container_page = considera("#main_container_page");
let container_float_nav = considera("#container_float_nav");
let nav_container_info = considera(".nav_container_info", 0);

let footer_scroll_hidden = considera("#footer_scroll_hidden");
let container_contact = considera("#container_contact");

let english_switch_container = considera("#english_switch_container");
english_switch_container.isTurnedOn = false;
let english_switch_container_ball = considera("#english_switch_container_ball");
let english_switch_ball = considera("#english_switch_ball");

let container_proyect_description = considera("#container_proyect_description");
let project_description = considera("#project_description");
let project_description_des = considera(".project_description_des", 0);

/* funciones de la página */

// función del boton flotante
document.onscroll = () => {
    let html = document.querySelector("html");
    let allScroll = Math.floor(window.innerHeight / html.scrollHeight * 100) + Math.floor(html.scrollTop / html.scrollHeight * 100);

    if (html.scrollTop > 300) {
        page_float_button.f("display", "block");
        if (allScroll >= 95) page_float_button.f("fondo", "var(--unique)");
        else page_float_button.f("fondo", "var(--develop)");
    }
    else page_float_button.f("display", "none");
};
page_float_button.f("event", "click", () => document.querySelector("html").scrollTo(0, 0));

// Boton para abrir linkedin
considera("#seccion_about_open_linkedin").f("event", "click", () => window.open(PAGE_VARIABLES.url_linkedin));

// función del switcher de inglés
english_switch_container.f("event", "click", () => {
    if (english_switch_container.isTurnedOn) {
        english_switch_container.isTurnedOn = false;
        english_switch_container_ball.f("justify-c", "start");
        english_switch_ball.f("fondo", "var(--emphasis)");
        languague_switch.englishSelected(false);
    } else {
        english_switch_container.isTurnedOn = true;
        english_switch_container_ball.f("justify-c", "end");
        english_switch_ball.f("fondo", "var(--unique)");
        languague_switch.englishSelected(true);
    }
});

// funcion para los botones 'ver mas' en los proyectos
aplicarPara(considera(".button_view_project", 0), "event", "click", e => {
    let index = parseInt(e.target.name);
    console.log(index)
    project_description.f("rm-class", "close_cortina_class");
    container_proyect_description.f("display", "block");
    container_proyect_description.f("add-class", "open_cortina_class");
    container_float_nav.f("display", "none");
    container_contact.f("display", "none");
    footer_scroll_hidden.f("add-class", "small_footer");
    nav_container_info[0].f("display", "block");

    // poniendo titulo
    project_description_des[0].f("innerText", languague_switch.my_projects.currentLanguague[index].title);
    // poniendo descripción
    project_description_des[1].f("html", languague_switch.my_projects.currentLanguague[index].long_description);
    // poniendo boton 1 (ver pagina)
    if (languague_switch.my_projects.currentLanguague[index].first_button.enable) {
        project_description_des[2].f("display", "inline-block");
        project_description_des[2].f("innerText", languague_switch.my_projects.currentLanguague[index].first_button.tag);
        project_description_des[2].e.onclick = () => window.open(languague_switch.my_projects.currentLanguague[index].first_button.link);
    } else project_description_des[2].f("display", "none");
    // poniendo boton 2 (ver codigo)
    if (languague_switch.my_projects.currentLanguague[index].second_button.enable) {
        project_description_des[3].f("display", "inline-block");
        project_description_des[3].f("innerText", languague_switch.my_projects.currentLanguague[index].second_button.tag);
        project_description_des[3].e.onclick = () => window.open(languague_switch.my_projects.currentLanguague[index].second_button.link);
    } else project_description_des[3].f("display", "none");

    setTimeout(() => {
        main_container_page.f("display", "none");
        project_description.f("display", "flex");
    }, 500);
    document.querySelector("html").scrollTo(0, 0);
});
// boton de cerrar proyectos
nav_container_info[0].f("event", "click", () => {
    project_description.f("add-class", "close_cortina_class");
    container_proyect_description.f("rm-class", "open_cortina_class");
    container_proyect_description.f("display", "none");
    container_float_nav.f("display", "block");
    container_contact.f("display", "flex");
    footer_scroll_hidden.f("rm-class", "small_footer");
    nav_container_info[0].f("display", "none");

    setTimeout(() => {
        main_container_page.f("display", "block");
        project_description.f("display", "none");
    }, 500);
});

// funciones de datos de contacto
aplicarPara(considera(".img_link_contact", 0), "event", "click", e => {
    if (e.target.name == "phone_broken") {
        navigator.clipboard.writeText(PAGE_VARIABLES.phone_number).then(() => {
            window.alert("¡Copiado!");
        }).catch(err => console.log(err));
    }
    else if (e.target.name == "email") {
        navigator.clipboard.writeText(PAGE_VARIABLES.email).then(() => {
            window.alert("¡Copiado!");
        }).catch(err => console.log(err));
    }
    else window.open(PAGE_VARIABLES.url_linkedin);
});