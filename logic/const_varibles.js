// data
const PAGE_VARIABLES = {
    url_linkedin: "https://www.linkedin.com/in/aaron-alicastro-web-developer/",
    phone_number: "+57 302 496 4680",
    email: "aalicastro5@gmail.com",
    proyect_data: {
        api_sellyard_link: "https://fakestoreapi.com",
        api_heros: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/",
        api_rick_and_morty: "https://rickandmortyapi.com/api/"
    }
};

// html structure data
const proyect_card_structure = (proyect_id) => {
    let div_project_cards = document.createElement("DIV");
    div_project_cards.classList.add("project_cards");

    let div_project_cards_container_short_description = document.createElement("DIV");
    div_project_cards_container_short_description.classList.add("project_cards_container_short_description");

    let h6_my_projects_to_show = document.createElement("H6");
    let p_my_projects_to_show = document.createElement("P");
    h6_my_projects_to_show.classList.add("my_projects_to_show");
    p_my_projects_to_show.classList.add("my_projects_to_show");

    let button_my_projects_to_show = document.createElement("BUTTON");
    button_my_projects_to_show.classList.add("general_button_third");
    button_my_projects_to_show.classList.add("my_projects_to_show");
    button_my_projects_to_show.classList.add("button_view_project");
    button_my_projects_to_show.name = proyect_id;

    div_project_cards_container_short_description.appendChild(h6_my_projects_to_show);
    div_project_cards_container_short_description.appendChild(p_my_projects_to_show);
    div_project_cards.appendChild(div_project_cards_container_short_description);
    div_project_cards.appendChild(button_my_projects_to_show);

    return div_project_cards;
};

const project_game_card_structure = () => {
    let div_game_card = document.createElement("DIV");
    div_game_card.classList.add("project_cards");

    let p_my_games_to_show = document.createElement("P");
    p_my_games_to_show.classList.add("game_introduccion");

    let a_games_to_show = document.createElement("A");
    a_games_to_show.target = "_blank";
    a_games_to_show.classList.add("general_button_second");
    a_games_to_show.classList.add("game_introduccion");

    div_game_card.appendChild(p_my_games_to_show);
    div_game_card.appendChild(a_games_to_show);

    return div_game_card;
};

const span_reject_current_game = (english, fun) => {
    let span_game = document.createElement("SPAN");

    span_game.innerText = (english) ? "Go back" : "Volver";
    span_game.classList.add("span_game_close");
    span_game.onclick = fun;

    return span_game;
};