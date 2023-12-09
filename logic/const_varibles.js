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
}

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
}