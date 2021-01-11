import faker from "faker";

const mount = (el) => {
  const numberOfItems = faker.random.number();

  const cartText = `<div>You have ${numberOfItems} ${
    numberOfItems === 1 ? "item" : "items"
  } in your cart </div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
