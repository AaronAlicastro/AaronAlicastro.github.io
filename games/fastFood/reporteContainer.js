const reporteContainer = document.querySelector("#reporteContainer");
const reporteContainer_items = document.querySelector(
  "#reporteContainer_items",
);
const reporteContainer_grid = document.querySelector("#reporteContainer_grid");

function generateProductsCards() {
  reporteContainer_items.innerHTML = "";
  reporteContainer_grid.innerHTML = "";
  let productNamesRegistered = [];
  let nameAndAmount = {};
  let total = 0;

  for (let i = ventasCreated.length - 1; i >= 0; i--) {
    let cardDiv = document.createElement("DIV");
    let cardTotal = 0;

    ventasCreated[i].forEach((venta) => {
      let cardP = document.createElement("P");
      cardP.innerHTML = venta.amount + " " + venta.productName;

      productNamesRegistered.push(venta.productName);
      total += venta.total;
      cardTotal += venta.total;

      if (nameAndAmount[venta.productName]) {
        nameAndAmount[venta.productName] += venta.amount;
      } else {
        nameAndAmount[venta.productName] = venta.amount;
      }

      cardDiv.appendChild(cardP);
    });

    let pTotal = document.createElement("P");
    pTotal.innerHTML = "Total " + cardTotal.toLocaleString();

    cardDiv.appendChild(pTotal);
    reporteContainer_grid.appendChild(cardDiv);
  }

  productNamesRegistered = [...new Set(productNamesRegistered)];

  let allSelected = cartaListCreated.filter((ct) => {
    return productNamesRegistered.includes(ct.cartaName);
  });

  let titleLi = document.createElement("LI");
  titleLi.innerHTML = "Hecho: " + total.toLocaleString();
  reporteContainer_items.appendChild(titleLi);

  for (let i = 0; i < itemsListCreated.length; i++) {
    let li = document.createElement("LI");
    let itemTotalUsed = 0;

    allSelected.forEach((sele) => {
      let itemInCarta = sele.items.find((itm) => {
        return itm.name === itemsListCreated[i];
      });

      if (itemInCarta) {
        itemTotalUsed += itemInCarta.value * nameAndAmount[sele.cartaName];
      }
    });

    li.innerHTML = itemTotalUsed + " " + itemsListCreated[i];
    reporteContainer_items.appendChild(li);
  }
}
