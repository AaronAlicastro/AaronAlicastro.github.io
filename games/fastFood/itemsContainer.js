const itemsListCreated =
  JSON.parse(localStorage.getItem("itemsListCreated")) || [];

const itemsContainer = document.querySelector("#itemsContainer");

// side bar

const itemsContainer_sideBar = document.querySelector(
  "#itemsContainer_sideBar",
);
const itemsContainer_sideBar_btn = document.querySelector(
  "#itemsContainer_sideBar_btn",
);
const itemsContainer_sideBar_content = document.querySelector(
  "#itemsContainer_sideBar_content",
);

// form

const itemsRegister = document.querySelector("#itemsRegister");
const itemsRegister_btn = document.querySelector("#itemsRegister_btn");

// events

itemsContainer_sideBar_btn.addEventListener("click", () => {
  openSideBar(itemsContainer_sideBar);
});

itemsRegister_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const { filled, entrences } = getFormData(itemsRegister);
  if (filled) {
    itemsListCreated.push(entrences.itemName);

    addItemToLists(
      [entrences.itemName],
      itemsContentList,
      itemsContainer_sideBar,
    );

    localStorage.setItem("itemsListCreated", JSON.stringify(itemsListCreated));
  }
});
