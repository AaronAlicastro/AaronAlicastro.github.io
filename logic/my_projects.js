class My_projects {
    constructor() {
        this.currentLanguague = [];
        this.englishIsOn = false;
        this.spanish = [
            {
                title: "Sell Yard",
                short_description: "Proyecto inclinado al diseño, en donde maqueto una tienda implementando una API",
                long_description: "Este proyecto lo inicié junto al curso de diseño en Platzi. Todo el diseño lo formé en clases y la idea final era poder pasarlo en otro curso, a un React app. <br /> <br /> Yo me tomé la tarea de intentar crear el aplicativo de React sin ver el curso, y como relleno usé la API '" + PAGE_VARIABLES.proyect_data.api_sellyard_link + "'. <br /> <br /> ¡Puedes ver el resultado final de este proyecto!",
                first_button: {
                    enable: true,
                    tag: "Ver página",
                    link: "https://aaronalicastro.github.io/sellYard/"
                },
                second_button: {
                    enable: true,
                    tag: "Ver código",
                    link: "https://github.com/AaronAlicastro/sellYard",
                }
            },
            {
                title: "MCG Soluciones",
                short_description: "Si necesitas cualquier servicio relacionado con GLP, entra y mira",
                long_description: "MCG soluciones es una empresa que invierte en la renovación, cree fielmente que el GLP es una de las energías más limpias del planeta y, es por ello, que se encarga garantizar la distribución y el traslado de este maravilloso producto para el mundo. <br /> <br /> Consulta sus servicios si presentas cualquier necesidad relacionada.",
                first_button: {
                    enable: true,
                    tag: "Ver página",
                    link: "https://m-c-g-soluciones-and-contingencias.onrender.com"
                },
                second_button: {
                    enable: true,
                    tag: "Ver código",
                    link: "https://github.com/AaronAlicastro/MCG_Soluciones",
                }
            },
            {
                title: "Endúlzate",
                short_description: "Este es otro caso de enmaquetado de una tienda, pero esta no implementa una API",
                long_description: "¿Te gustan los dulces de leche?, acá en una presentación muy, muy dulce, te enseño varios productos populares",
                first_button: {
                    enable: true,
                    tag: "Ver página",
                    link: "https://aaronalicastro.github.io/endulzate/"
                },
                second_button: {
                    enable: true,
                    tag: "Ver código",
                    link: "https://github.com/AaronAlicastro/endulzate",
                }
            },
            {
                title: "Hero api",
                short_description: "¿Te gustan los héroes?, echa un vistazo",
                long_description: "Haciendo uso de la API '" + PAGE_VARIABLES.proyect_data.api_heros + "', te muestro varios de los héroes que nos acompañaron gran parte de nuestra infancia en una estética administrativa. <br /> <br /> El diseño quedó de una prueba técnica que hice para una empresa, y como el diseño me parece bastante lindo, decidí publicar la página personalizando los datos ¡entra a ver!",
                first_button: {
                    enable: true,
                    tag: "Ver página",
                    link: "https://aaronalicastro.github.io/test-econtainers/"
                },
                second_button: {
                    enable: true,
                    tag: "Ver código",
                    link: "https://github.com/AaronAlicastro/test-econtainers",
                }
            },
            {
                title: "Rick and Morty api",
                short_description: "Haciendo uso de otra muy bien conocida API, puedes rescatar personajes de tan entretenida serie",
                long_description: "La API en concreto es '" + PAGE_VARIABLES.proyect_data.api_rick_and_morty + "'. Entra a ver lo recursiva que es la funcionalidad, de hecho, fue mi primer proyecto en React y he de decir, que amo React.",
                first_button: {
                    enable: true,
                    tag: "Ver página",
                    link: "https://aaronalicastro.github.io/personajes-rickAndMorty/"
                },
                second_button: {
                    enable: true,
                    tag: "Ver código",
                    link: "https://github.com/AaronAlicastro/personajes-rickAndMorty",
                }
            },
            {
                title: "Pizzas laurelys",
                short_description: "¿Qué mejor que una buena pizza?, entra a ver",
                long_description: "Haciendo de apollo a un emprendimiento familiar, hice esta web para presentar sus productos como pizzero, y, ¿qué más haría el rumiante que pasar el día procesando alimentos si fue diseñado para eso? Así pues, uno abarca en virtud en lo que puede ser bueno.",
                first_button: {
                    enable: true,
                    tag: "Ver página",
                    link: "https://aaronalicastro.github.io/pizzas_laurelys/"
                },
                second_button: {
                    enable: true,
                    tag: "Ver código",
                    link: "https://github.com/AaronAlicastro/pizzas_laurelys",
                }
            }
        ];
        this.english = [
            {
                title: "Sell Yard",
                short_description: "This proyect is focused on design where I create a store aesthetics using an API",
                long_description: "I began this proyect following a Platzi course. All design was created in class and the final goal was to create a React app with it. <br /> <br /> I took the time to create it bymyself without watching the React course, and as a filled I used the API '" + PAGE_VARIABLES.proyect_data.api_sellyard_link + "'. <br /> <br /> You can watch the final result of this project!",
                first_button: {
                    enable: true,
                    tag: "Page",
                    link: "https://aaronalicastro.github.io/sellYard/"
                },
                second_button: {
                    enable: true,
                    tag: "Github",
                    link: "https://github.com/AaronAlicastro/sellYard",
                }
            },
            {
                title: "MCG Soluciones",
                short_description: "If you need any service about GLP, go in and look",
                long_description: "MCG soluciones is a company that invests in renovation, it is confident that GLP is one of the cleanest energy of the planet and, for that reazon, it is responsible for guaranteeing the distribution and transfer of this wonderful product to the world. <br /> <br /> Check its services if you have any need about it.",
                first_button: {
                    enable: true,
                    tag: "Page",
                    link: "https://m-c-g-soluciones-and-contingencias.onrender.com"
                },
                second_button: {
                    enable: true,
                    tag: "Github",
                    link: "https://github.com/AaronAlicastro/MCG_Soluciones",
                }
            },
            {
                title: "Endúlzate",
                short_description: "This is other case of store aesthetics, but this doesn't implement an API",
                long_description: "Do you like caramel spread?, here in a presentation very, very sweet, I show you a variety of popular caramel spreads",
                first_button: {
                    enable: true,
                    tag: "Page",
                    link: "https://aaronalicastro.github.io/endulzate/"
                },
                second_button: {
                    enable: true,
                    tag: "Github",
                    link: "https://github.com/AaronAlicastro/endulzate",
                }
            },
            {
                title: "Hero api",
                short_description: "Do you like heros?, look at this small project",
                long_description: "Using the API '" + PAGE_VARIABLES.proyect_data.api_heros + "', I show you many heros who were with us in our childhood in an administrative aesthetic. <br /> <br /> I created this project for a technnical test, and how I think the design is so beautiful, I decided to upload with my own data. Go in and watch!",
                first_button: {
                    enable: true,
                    tag: "Page",
                    link: "https://aaronalicastro.github.io/test-econtainers/"
                },
                second_button: {
                    enable: true,
                    tag: "Github",
                    link: "https://github.com/AaronAlicastro/test-econtainers",
                }
            },
            {
                title: "Rick and Morty api",
                short_description: "Using other well-known API, you can get characters from that funny series",
                long_description: "The API is '" + PAGE_VARIABLES.proyect_data.api_rick_and_morty + "'. Go in to see how recursive the functionality is, in fact, this was my first project with React and I have to say, I love React.",
                first_button: {
                    enable: true,
                    tag: "Page",
                    link: "https://aaronalicastro.github.io/personajes-rickAndMorty/"
                },
                second_button: {
                    enable: true,
                    tag: "Github",
                    link: "https://github.com/AaronAlicastro/personajes-rickAndMorty",
                }
            },
            {
                title: "Pizzas laurelys",
                short_description: "What is better than a delicious pizza?, be welcome to see",
                long_description: "To help a family entrepreneurship, I made this web to show their products as a pizza maker, and, What would become of the sapien if he did not use his hands? So, I do as much as my knowledge can reach.",
                first_button: {
                    enable: true,
                    tag: "Page",
                    link: "https://aaronalicastro.github.io/pizzas_laurelys/"
                },
                second_button: {
                    enable: true,
                    tag: "Github",
                    link: "https://github.com/AaronAlicastro/pizzas_laurelys",
                }
            }
        ];
    }

    englishSelected(was) {
        this.englishIsOn = was;
        if (was) this.currentLanguague = this.english;
        else this.currentLanguague = this.spanish;
    }

    showShortDescription() {
        let res = [];
        this.currentLanguague.forEach(py => {
            res.push(py.title);
            res.push(py.short_description);
            if (this.englishIsOn) res.push("Watch more");
            else res.push("Ver más");
        });
        return res;
    }
}