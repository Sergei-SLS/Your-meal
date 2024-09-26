import { modalDeliveryForm } from "./elements.js";

export const orderController = (getCart) => {
  modalDeliveryForm.addEventListener("change", () => {
    if (modalDeliveryForm.format.value === "pickup") {
      modalDeliveryForm["address-info"].classList.add(
        "modal-delivery_fieldset_hide"
      );
    }

    if (modalDeliveryForm.format.value === "delivery") {
      modalDeliveryForm["address-info"].classList.remove(
        "modal-delivery_fieldset_hide"
      );
    }
  });

  modalDeliveryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(modalDeliveryForm);
    const data = Object.fromEntries(formData);
    data.order = getCart();

    fetch("https://reqres.in/api/users", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
};
