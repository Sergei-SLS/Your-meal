import { modalProduct, catalogList } from "./elements.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListControler } from "./navigationListControler.js";
import { cartInit } from "./cart.js";

const closeModal = (event) => {
  if (event.key === "Escape") {
    modalProduct.classList.remove("modal_open");

    document.removeEventListener("keydown", closeModal);
  }
};

catalogList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(".product_detail") || target.closest(".product_image")) {
    const id = target.closest(".product").dataset.idProduct;
    openModal(id);

    document.addEventListener("keydown", closeModal);
  }
});

modalProduct.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest(".modal_close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }
});

const init = () => {
  renderListProduct();
  navigationListControler(renderListProduct);
  cartInit();
};

init();
