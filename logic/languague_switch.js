class Languague_switch {
    constructor() {
        this.my_projects = new My_projects();

        this.currentLanguague = {}
        this.spanish = {
            navigator: {
                selector: ".navigation_titles",
                multi: true,
                value: ["Proyectos", "Contacto"]
            },
            nav_container_info_message: {
                selector: ".nav_container_info_message",
                multi: true,
                value: ["Volver", "Cerrar"]
            },
            about_block: {
                selector: ".about_block",
                multi: true,
                value: [
                    "Desarrollador Web Full Stack",
                    "Hola, mi nombre es Aaron Alicastro",

                    "Desarrollador web con experiencia creando plataformas útiles y " +
                    "funcionales utilizando frameworks y lenguajes de programación " +
                    "como React, Angular, Javascript, NodeJS, MongoDB.",

                    "Proyectos"
                ]
            },
            container_proyects_title: {
                selector: "#container_proyects_title",
                multi: false,
                value: "Proyectos"
            },
            game_introduccion: {
                selector: ".game_introduccion",
                multi: true,
                value: [
                    "¿Te gustaría distraerte con un juego?, te tengo varios diseñados por mí para ti, ¿te animas? Al darle jugar puede salir cualquier cosa.",
                    "Jugar"
                ]
            },
            my_projects: {
                selector: ".my_projects_to_show",
                multi: true,
                value: [] // los valores le colocarán después de que el idioma sea colocado
            },
            footer_part: {
                selector: ".footer_part",
                multi: true,
                value: [
                    "Contacto",
                    "Datos de contacto"
                ]
            }
        };
        this.english = {
            navigator: {
                selector: ".navigation_titles",
                multi: true,
                value: ["Projects", "Contact"]
            },
            nav_container_info_message: {
                selector: ".nav_container_info_message",
                multi: true,
                value: ["Go back", "Close"]
            },
            about_block: {
                selector: ".about_block",
                multi: true,
                value: [
                    "Full Stack Web Developer",
                    "Hi, my name is Aaron Alicastro",

                    "Experienced Web Developer skilled in creating useful and " +
                    "functional platforms using frameworks and programming " +
                    "languages such as React, Angular, Javascript, NodeJS, MongoDB.",

                    "Projects"
                ]
            },
            container_proyects_title: {
                selector: "#container_proyects_title",
                multi: false,
                value: "Projects"
            },
            game_introduccion: {
                selector: ".game_introduccion",
                multi: true,
                value: [
                    "Would you like to try a game?, I have several games created from me to you, what do you say? Click on begin and be prepare for anything.",
                    "Begin"
                ]
            },
            my_projects: {
                selector: ".my_projects_to_show",
                multi: true,
                value: [] // los valores le colocarán después de que el idioma sea colocado
            },
            footer_part: {
                selector: ".footer_part",
                multi: true,
                value: [
                    "Contact",
                    "Contact data"
                ]
            }
        };
    }

    englishSelected(was) {
        if (was) this.currentLanguague = this.english;
        else this.currentLanguague = this.spanish;

        this.my_projects.englishSelected(was);
        this.currentLanguague.my_projects.value = this.my_projects.showShortDescription();
        this.setLanguague();
    }

    setLanguague() {
        let parts = Object.keys(this.currentLanguague);
        parts.forEach(pr => {
            if (this.currentLanguague[pr].multi) {
                considera(this.currentLanguague[pr].selector, 0).forEach((ele, i) => {
                    ele.f("innerText", this.currentLanguague[pr].value[i]);
                });
            }
            else considera(this.currentLanguague[pr].selector).f("innerText", this.currentLanguague[pr].value);
        });
    }
}