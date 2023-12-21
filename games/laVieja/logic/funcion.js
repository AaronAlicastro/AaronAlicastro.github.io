"use strict";

// data players
const select_ficha = considera("#select_ficha");
const columnInfoPlayers = considera(".columnInfoPlayers", 0);
select_ficha.reset = () => {
    select_ficha.f("html", "Tirar");
    player_switcher.current.fichaSelected = null;
    player_switcher.current.currentMove.c = null;
    player_switcher.current.currentMove.create_saved = false;
    player_switcher.current.currentMove.create = () => { };
    player_switcher.current.currentMove.move_saved = false;
    player_switcher.current.currentMove.move = () => { };
    player_switcher.current.columnInfoPlayer.f("html", player_switcher.current.myCells);
}

const player_switcher = considera("#player_switcher");
player_switcher.current = {
    fichaSelected: null,
    currentMove: {},
    columnInfoPlayer: {
        f: () => {}
    }
};
player_switcher.set = (isOne) => {
    select_ficha.reset();

    let player = player_one;
    if (isOne) player_switcher.isOne = true;
    else {
        player_switcher.isOne = false;
        player = player_two;
    }
    player_switcher.current = player;
    player_switcher.f("html", "Turno del jugador <span style='margin: 0 var(--general_space); color: " + player.color + "'>" + player.name + "</span>");
};

// game data
const cells = new Cells();
const player_one = new Players(
    "juagdor 1",
    "var(--player_one)",
    "var(--player_one_shadow)",
    columnInfoPlayers[0]
);
const player_two = new Players(
    "juagdor 2",
    "var(--player_two)",
    "var(--player_two_shadow)",
    columnInfoPlayers[1]
);
let fragment = document.createDocumentFragment();

for (let i = 0; i < 40; i++) {
    cells.addCell(i);

    if (i == 19) cells.setFicha(i, player_one.cross, player_one);
    else if (i == 20) cells.setFicha(i, player_two.cross, player_two);

    fragment.appendChild(cells.allCells[i].cell.e);
}

considera("#filedGame").f("apend", fragment);

/* game functions */

// seleccionando ficha
select_ficha.f("event", "click", (e) => {
    if (e.target.innerHTML == "Tirar") {
        e.target.innerHTML = ". . .";
        setTimeout(() => {
            select_ficha.f("html", "Juega (" + player_switcher.current.setFicha().be + ")");
            cells.setShadowToMove(player_switcher.isOne, player_switcher.current.shadow);
            player_switcher.current.setCurrentMove(
                -1,
                true,
                cells.allCells.filter(cl => cl.itCanSelected),
                player_switcher.current.fichaSelected
            ); // saving data
        }, 500);
    }
});

// funciones celldas
aplicarPara(cells.allCells.map(cl => cl.cell), "event", "click", (e) => {
    let id = parseInt(e.target.name);
    if (cells.allCells[id].player != player_switcher.current) {
        if (cells.allCells[id].itCanSelected) {
            if (player_switcher.current.currentMove.c == "create") {
                cells.setFicha(id, player_switcher.current.fichaSelected, player_switcher.current);
                player_switcher.current.myCells++;
                cells.quitShadows();
                player_switcher.set((player_switcher.isOne) ? false : true);
            } else if (player_switcher.current.currentMove.c == "move") {
                cells.quitShadows();
                let { cell_id, color } = player_switcher.current.currentMove.move();
                const chagePosition = () => {
                    cells.allCells[id].player = cells.allCells[cell_id].player;
                    cells.allCells[id].ficha = cells.allCells[cell_id].ficha;
                    cells.allCells[id].cell.f("html", cells.allCells[cell_id].ficha.be);
                    cells.allCells[id].cell.f("color", color);

                    cells.allCells[cell_id].player = null;
                    cells.allCells[cell_id].ficha = null;
                    cells.allCells[cell_id].cell.f("html", "");
                    player_switcher.set((player_switcher.isOne) ? false : true);
                }

                if (cells.allCells[id].player === null) chagePosition();
                else {
                    cells.allCells[id].ficha.die(
                        cells.allCells[id].ficha,
                        player_switcher.current.name,
                        (itHadDefense) => {
                            if (!itHadDefense) {
                                if ((player_switcher.current == player_one)) player_two.myCells--;
                                else player_one.myCells--;
                                chagePosition();
                            } else {
                                cells.allCells[id].cell.f("html", cells.allCells[id].ficha.be);
                                player_switcher.set((player_switcher.isOne) ? false : true);
                            }
                        }
                    );
                }
            }
        } else if (player_switcher.current.currentMove.create_saved) {
            cells.quitShadows();

            let { cell_shadows, fichaSelected, shadow } = player_switcher.current.currentMove.create();
            player_switcher.current.fichaSelected = fichaSelected;
            player_switcher.current.currentMove.c = "create";
            cells.setShadows(cell_shadows, shadow);
            select_ficha.f("html", "Juega (" + fichaSelected.be + ")");
        } else {
            cells.quitShadows();
            select_ficha.reset();
        }
    } else {
        cells.quitShadows();

        cells.setFollowShadow(id, player_switcher.current);
        player_switcher.current.setCurrentMove(
            id,
            false,
            cells.allCells.filter(cl => cl.itCanSelected),
            cells.allCells[id].ficha
        ); // saving datas

        select_ficha.f("html", "Mueve (" + cells.allCells[id].ficha.be + ")")
    }
});