const cartaListCreated =
  JSON.parse(localStorage.getItem("cartaListCreated")) || [];

const cartaContainer = document.querySelector("#cartaContainer");

// side bar

const cartaContainer_sideBar = document.querySelector(
  "#cartaContainer_sideBar",
);
const cartaContainer_sideBar_btn = document.querySelector(
  "#cartaContainer_sideBar_btn",
);
const cartaContainer_sideBar_content = document.querySelector(
  "#cartaContainer_sideBar_content",
);

// form

const cartaRegister = document.querySelector("#cartaRegister");
const cartaRegister_btn = document.querySelector("#cartaRegister_btn");
const cartaRegister_inputs = document.querySelectorAll(".cartaRegister_inputs");

// events

const itemsContentList = [
  {
    ct: itemsContainer_sideBar_content,
    btn: false,
  },
  {
    ct: cartaRegister,
    btn: true,
  },
];

// this add items to items bar and register form
addItemToLists(itemsListCreated, itemsContentList, itemsContainer_sideBar);
// this add the carta to its barSide
addItemToLists(
  cartaListCreated.map((c) => c.cartaName),
  [
    {
      ct: cartaContainer_sideBar_content,
      btn: false,
    },
  ],
  cartaContainer_sideBar,
);

cartaContainer_sideBar_btn.addEventListener("click", () => {
  openSideBar(cartaContainer_sideBar);
});

cartaRegister_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const { filled, entrences } = getFormData(cartaRegister, true);

  if (filled) {
    let carta = {
      cartaName: entrences.cartaName,
      cartaPrice: entrences.cartaPrice,
      cartaTag: entrences.cartaTag,
      items: itemsListCreated.map((i) => {
        return { name: i, value: parseInt(entrences[i]) };
      }),
    };

    cartaListCreated.push(carta);
    if (!categories.includes(entrences.cartaTag)) {
      categories.push(entrences.cartaTag);
      addCategorieButton([entrences.cartaTag]);
    }

    addItemToLists(
      [entrences.cartaName],
      [
        {
          ct: cartaContainer_sideBar_content,
          btn: false,
        },
      ],
      cartaContainer_sideBar,
    );

    localStorage.setItem("cartaListCreated", JSON.stringify(cartaListCreated));
  }

  cartaRegister_inputs.forEach((input) => (input.value = ""));
});
