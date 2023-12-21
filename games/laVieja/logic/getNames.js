"use strict";

const bienvenida_container = considera("#bienvenida_container");
const juego = considera("#juego");
const btn_welcome_start = considera("#btn_welcome_start");
const input_players = considera(".input_players", 0);
const input_players_spans = considera(".input_players_spans", 0);

input_players[0].e.onchange = () => {
    input_players_spans[0].f("add-class", "input_players_focus_span");
};

input_players[1].e.onchange = () => {
    input_players_spans[1].f("add-class", "input_players_focus_span");
};

btn_welcome_start.f("event", "click", () => {
    if (input_players[0].e.value.trim() != "" && input_players[1].e.value.trim() != "") {
        player_one.name = input_players[0].e.value.trim();
        player_two.name = input_players[1].e.value.trim();
        bienvenida_container.f("display", "none");
        juego.f("display", "block");
        player_switcher.set(true);
    } else window.alert("Debes llenar ambos campos");
});