const fichas = () => {
    return {
        cross: {
            be: "+",
            attack: false,
            defense: false,
            transformation: null,
            die: (_, player_name) => {
                window.alert("El juagdor -- " + player_name + " -- ha ganado la partida");
                window.history.go(0);
            }
        },
        toPlay: [
            {
                be: "<>",
                attack: true,
                defense: false,
                transformation: null,
                die: (_, __, fun) => fun()
            },
            {
                be: "@",
                attack: true,
                defense: true,
                transformation: "O",
                die: (ficha, _, fun) => {
                    if (ficha.defense) {
                        ficha.defense = false;
                        ficha.attack = false;
                        ficha.be = ficha.transformation;
                        fun(true);
                    }
                    else fun();
                }
            },
            {
                be: "&",
                attack: false,
                defense: true,
                transformation: "Y",
                die: (ficha, _, fun) => {
                    if (ficha.defense) {
                        ficha.defense = false;
                        ficha.be = ficha.transformation;
                        fun(true);
                    }
                    else fun();
                }
            }
        ]
    };
}