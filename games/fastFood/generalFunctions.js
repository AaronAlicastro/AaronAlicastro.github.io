function closeAndOpenPanel(close, open) {
  close.style.display = "none";
  open.style.display = "flex";
}

function setFloatButton(si = true, btn) {
  if (si) btn.style.display = "inline-block";
  else btn.style.display = "none";
}

function goToInicialPanel() {
  closeAndOpenPanel(currentPanel, innitialContainer);
  setFloatButton(false, floatButton);
  setFloatButton(false, floatBottomRight);
  if (ventasCreated.length) setFloatButton(true, clearAll_btn);
}

function openSideBar(sideBar) {
  let name = sideBar.getAttribute("name");

  if (name === "opened") {
    sideBar.style.animation = "openSideBar .5s forwards";
    sideBar.setAttribute("name", "closed");
  } else {
    sideBar.style.animation = "closeSideBar .5s forwards";
    sideBar.setAttribute("name", "opened");
  }
}

function addItemToLists(items = [], containers = [], father) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < containers.length; j++) {
      let label = document.createElement("LABEL");

      if (containers[j].btn) {
        label.setAttribute("class", "cartaWithItemsLabel");
        let counter = 0;

        let span1 = document.createElement("SPAN");
        span1.innerHTML = items[i];
        let input = document.createElement("INPUT");
        input.setAttribute("type", "number");
        input.setAttribute("name", items[i]);
        input.setAttribute("readonly", true);
        input.value = 0;

        let span2 = document.createElement("SPAN");
        span2.innerHTML = "++";
        span2.addEventListener("click", () => {
          counter++;
          input.value = counter;
        });

        let span3 = document.createElement("SPAN");
        span3.innerHTML = "--";
        span3.addEventListener("click", () => {
          counter--;
          input.value = counter;
        });

        label.appendChild(span1);
        label.appendChild(input);
        label.appendChild(span2);
        label.appendChild(span3);
      } else {
        label.innerHTML = items[i];
        label.addEventListener("click", () => {
          openSideBar(father);
        });
      }

      containers[j].ct.appendChild(label);
    }
  }
}

function addCategorieButton(ctx = []) {
  ctx.forEach((ct) => {
    let button = document.createElement("BUTTON");
    button.innerHTML = ct;

    button.addEventListener("click", () => {
      ventaRegister.innerHTML = "";
      let selected = cartaListCreated.filter((carta) => carta.cartaTag === ct);

      selected.forEach((selec) => {
        let productName = selec.cartaName;

        let label = document.createElement("LABEL");
        label.innerHTML = productName;

        let input = document.createElement("INPUT");
        input.setAttribute("name", "productAmount");
        input.setAttribute("type", "number");

        let button2 = document.createElement("BUTTON");
        button2.innerHTML = "guardar";
        button2.addEventListener("click", (btn2_e) => {
          btn2_e.preventDefault();

          if (input.value.trim()) {
            setFloatButton(true, floatBottomRight);

            currentVenta.push({
              productName,
              amount: parseInt(input.value),
              total: parseInt(input.value) * selec.cartaPrice,
            });

            let li = document.createElement("LI");
            li.innerHTML = input.value + " " + productName;
            ventaContainer_list.appendChild(li);
          }
        });

        label.appendChild(input);
        ventaRegister.appendChild(label);
        ventaRegister.appendChild(button2);
      });
    });

    ventaContainer.appendChild(button);
  });
}
