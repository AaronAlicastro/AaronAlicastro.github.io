class Players {
    constructor(name, color, shadow, columnInfoPlayer) {
        this.cross = fichas().cross;
        this.name = name;
        this.color = color;
        this.shadow = shadow;
        this.myCells = 0;
        this.fichaSelected = null;
        this.columnInfoPlayer = columnInfoPlayer;
        this.currentMove = {
            c: null,
            create_saved: null,
            create: () => { },
            move_saved: null,
            move: () => { }
        };
    }

    setFicha() {
        let sort = Math.floor(Math.random() * 3);
        this.fichaSelected = fichas().toPlay[sort];
        return this.fichaSelected;
    }

    setCurrentMove(id, create, cell_shadows, fichaSelected) {
        if (create) {
            this.currentMove.c = "create";
            this.currentMove.create_saved = true;
            this.currentMove.create = () => {
                return {
                    cell_shadows,
                    fichaSelected,
                    shadow: this.shadow
                }
            };
        }
        else {
            this.currentMove.c = "move";
            this.currentMove.move_saved = true;
            this.currentMove.move = () => {
                return {
                    cell_id: id,
                    color: this.color
                }
            };
        }
    }
}