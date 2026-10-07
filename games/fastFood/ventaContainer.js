const ventasCreated = JSON.parse(localStorage.getItem("ventasCreated")) || [];

const ventaContainer = document.querySelector("#ventaContainer");

let categories = cartaListCreated.map((ct) => ct.cartaTag);
categories = [...new Set(categories)];

const currentVenta = [];

// form
const ventaRegister = document.querySelector("#ventaRegister");
const ventaRegister_btn = document.querySelector("#ventaRegister_btn");
const ventaContainer_list = document.querySelector("#ventaContainer_list");
const floatBottomRight = document.querySelector("#floatBottomRight");

// functions

addCategorieButton(categories);

floatBottomRight.addEventListener("click", () => {
  if (currentVenta.length) {
    ventasCreated.push([...currentVenta]);
    localStorage.setItem("ventasCreated", JSON.stringify(ventasCreated));
    goToInicialPanel();
  }
});
