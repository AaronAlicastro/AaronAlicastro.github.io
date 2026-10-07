const floatButton = document.querySelector("#floatButton");
const clearAll_btn = document.querySelector("#clearAll_btn");
const innitialContainer = document.querySelector("#innitialContainer");
const innitialContainer_btn = document.querySelectorAll(
  ".innitialContainer_btn",
);

// events

let currentPanel = null;

floatButton.addEventListener("click", () => goToInicialPanel());
clearAll_btn.addEventListener("click", () => {
  localStorage.removeItem("ventasCreated");
  setFloatButton(false, clearAll_btn);
  ventasCreated.splice(0);
});

innitialContainer_btn[0].addEventListener("click", () => {
  currentPanel = ventaContainer;
  currentVenta.splice(0);
  ventaRegister.innerHTML = "";
  ventaContainer_list.innerHTML = "";
  closeAndOpenPanel(innitialContainer, ventaContainer);
  setFloatButton(true, floatButton);
  setFloatButton(false, clearAll_btn);
});

innitialContainer_btn[1].addEventListener("click", () => {
  currentPanel = itemsContainer;
  closeAndOpenPanel(innitialContainer, itemsContainer);
  setFloatButton(true, floatButton);
  setFloatButton(false, clearAll_btn);
});

innitialContainer_btn[2].addEventListener("click", () => {
  currentPanel = cartaContainer;
  closeAndOpenPanel(innitialContainer, cartaContainer);
  setFloatButton(true, floatButton);
  setFloatButton(false, clearAll_btn);
});

innitialContainer_btn[3].addEventListener("click", () => {
  currentPanel = reporteContainer;
  closeAndOpenPanel(innitialContainer, reporteContainer);
  setFloatButton(true, floatButton);
  setFloatButton(false, clearAll_btn);
  generateProductsCards();
});

if (ventasCreated.length) setFloatButton(true, clearAll_btn);
