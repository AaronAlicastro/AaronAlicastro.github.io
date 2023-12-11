class My_games {
    constructor() {
        this.currentLanguague = {};
        this.spanish = {
            title: "¿Te gustaría distraerte con un juego?, te tengo varios diseñados por mí para ti, ¿te animas? Al darle jugar puede salir cualquier cosa",
            button: "Jugar",
            games: [
                {
                    description: "Vamos a trabajar la memoria en este juego, ¿estás preparado?",
                    link: "./games/memoryGame/"
                },
                {
                    description: "Supera obstáculos y trata de llegar a la plataforma... ¿puedes?",
                    link: "./games/kurt/"
                },
                {
                    description: "Todos conocen este juego, inténtalo",
                    link: "./games/laVieja/"
                }
            ]
        };
        this.english = {
            title: "Would you like to try a game?, I have several games created from me to you, what do you say? Click on begin and be prepare for anything",
            button: "Begin",
            games: [
                {
                    description: "Let's use our memory in this game, are you ready?",
                    link: "./games/memoryGame/"
                },
                {
                    description: "Overcome obstacles and try to reach the platform... can you?",
                    link: "./games/kurt/"
                },
                {
                    description: "Everyone knows this game, try it",
                    link: "./games/laVieja/"
                }
            ]
        };
    }

    englishSelected(was) {
        if (was) this.currentLanguague = this.english;
        else this.currentLanguague = this.spanish;
    }
}