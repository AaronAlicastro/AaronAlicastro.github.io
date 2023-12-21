class Cells {
    constructor() {
        this.allCells = [];
    }

    addCell(id) {
        let element = document.createElement("DIV");
        element.classList.add("filedGame_cells");
        element.name = id;
        element = genes(element);

        this.allCells.push({
            cell: element,
            itCanSelected: false,
            player: null,
            ficha: null
        });
    }

    setFicha(id, ficha, player) {
        this.allCells[id].cell.f("html", ficha.be);
        this.allCells[id].cell.f("color", player.color);
        this.allCells[id].player = player;
        this.allCells[id].ficha = ficha;
    }

    setShadows(cells, shadow) {
        aplicarPara(
            cells.map(cl => {
                cl.itCanSelected = true;
                return cl.cell;
            }),
            "fondo",
            shadow
        );
    }

    setShadowToMove(isOne, shadow) {
        this.quitShadows();
        if (isOne) {
            aplicarPara(
                this.allCells.filter((cl, i) => {
                    if (
                        cl.cell.e.innerHTML == "" &&
                        (i == 0 ||
                            i == 8 ||
                            i == 16 ||
                            i == 24 ||
                            i == 32)
                    ) {
                        this.allCells[i].itCanSelected = true;
                        return true;
                    }
                    return false;
                }).map(cl => cl.cell),
                "fondo",
                shadow
            );
        } else {
            aplicarPara(
                this.allCells.filter((cl, i) => {
                    if (
                        cl.cell.e.innerHTML == "" &&
                        (i == 7 ||
                            i == 15 ||
                            i == 23 ||
                            i == 31 ||
                            i == 39)
                    ) {
                        this.allCells[i].itCanSelected = true;
                        return true;
                    }
                    return false;
                }).map(cl => cl.cell),
                "fondo",
                shadow
            );
        }
    }

    setFollowShadow(id, current) {
        this.quitShadows();
        let indexes = [];
        let left = id % 8, right = id % 8, top = id - 8, bottom = id + 8;
        if (top >= 0) {
            // no esta arriba
            if (left != 0) {
                // no está a la izquierda
                indexes.push(id - 8 - 1);
                indexes.push(id - 8);
                if (right != 7) indexes.push(id - 8 + 1);
                indexes.push(id - 1);
                indexes.push(id);
                if (right != 7) indexes.push(id + 1);
            } else {
                // esta a la izquierda
                // no está a la derecha
                indexes.push(id - 8);
                indexes.push(id - 8 + 1);
                indexes.push(id);
                indexes.push(id + 1);
            }
            if (bottom <= 39) {
                if (left != 0) indexes.push(id + 8 - 1);
                indexes.push(id + 8);
                if (right != 7) indexes.push(id + 8 + 1);
            }
        } else {
            // esta arriba
            if (left != 0) {
                // no está a la izquierda
                indexes.push(id - 1);
                indexes.push(id);
                if (right != 7) indexes.push(id + 1);
            } else {
                // esta a la izquierda
                // no está a la derecha
                indexes.push(id);
                indexes.push(id + 1);
            }
            if (left != 0) indexes.push(id + 8 - 1);
            indexes.push(id + 8);
            if (right != 7) indexes.push(id + 8 + 1);
        }

        aplicarPara(
            this.allCells.filter((cl, i) => {
                if (cl.ficha) if (!this.allCells[id].ficha.attack && cl.player !== null) return false;
                if (
                    indexes.includes(i) &&
                    cl.player != current
                ) {
                    this.allCells[i].itCanSelected = true;
                    return true;
                }
                return false;
            }).map(cl => cl.cell),
            "fondo",
            this.allCells[id].player.shadow
        );
    }

    quitShadows() {
        aplicarPara(
            this.allCells.filter((cl, i) => {
                if (cl.itCanSelected) {
                    this.allCells[i].itCanSelected = false;
                    return true;
                }
                return false;
            }).map(cl => cl.cell),
            "fondo",
            "var(--none_back)"
        );
    }
}