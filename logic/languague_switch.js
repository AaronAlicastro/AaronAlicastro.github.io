class Languague_switch {
    constructor() {
        this.my_projects = new My_projects();
        this.my_games = new My_games();

        this.englishIsOn = false;
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
                value: [] // se introduce luego
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
                value: [] // se introduce luego
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
        this.englishIsOn = was;
        if (was) this.currentLanguague = this.english;
        else this.currentLanguague = this.spanish;

        this.my_projects.englishSelected(was);
        this.my_games.englishSelected(was);
        this.currentLanguague.my_projects.value = this.my_projects.showShortDescription();
        this.currentLanguague.game_introduccion.value = [
            this.my_games.currentLanguague.title,
            this.my_games.currentLanguague.button
        ];
        this.setLanguagues();
    }

    setLanguagues() {
        Object.keys(this.currentLanguague).forEach(pr => {
            if (this.currentLanguague[pr].multi) {
                considera(this.currentLanguague[pr].selector, 0).forEach((ele, i) => {
                    ele.f("innerText", this.currentLanguague[pr].value[i]);
                });
            }
            else considera(this.currentLanguague[pr].selector).f("innerText", this.currentLanguague[pr].value);
        });
    }

    typed(text, fun, fun_closer) {
        clearInterval(this.inter);
        let characters = text.split("");
        
        this.inter = setInterval(() => {
            if (characters.length) fun(characters.splice(0, 1));
            else closeInter();
        }, 60);

        const closeInter = () => {
            clearInterval(this.inter);
            fun_closer();
        }
    }

    getSortGame() {
        return {
            button: (this.englishIsOn) ? "Go" : "Ir",
            game: this.my_games.currentLanguague.games[
                Math.floor(Math.random() * this.my_games.currentLanguague.games.length)
            ]
        }
    }
}