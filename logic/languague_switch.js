class Languague_switch {
    constructor() {
        this.currentLanguague = {}
        this.spanish = {
            navigator: {
                selector: ".navigation_titles",
                multi: true,
                value: ["English", "Proyectos", "Contactos"]
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
            }
        };
        this.english = {};
    }

    englishSelected(was) {
        if (was) this.currentLanguague = this.english;
        else this.currentLanguague = this.spanish;

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
            else considera(this.currentLanguague[pr].selector).f(innerText, this.currentLanguague[pr].value);
        });
    }
}