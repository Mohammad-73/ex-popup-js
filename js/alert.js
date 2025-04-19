function setHtml() {
  let body = document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="content_modal_persian center_modal" id="alert_persian">
      <div class="modal">
        <div class="header_modal">
          <span class="alert_modal_icon" id="alert_modal_icon_persian">!</span>
        </div>
        <div class="body_modal">
          <h3 class="title_modal" id="title_modal_persian"></h3>
          <p class="text_modal" id="text_modal_persian"></p>
          <div class="button_modal" id="button_modal_persian">
            <button
              class="close_modal"
              id="close_persian_modal"
            ></button>
          </div>
        </div>
      </div>
    </div>`
  );
}

setHtml();

function persianAlert(options) {
  const {
    message,
    description,
    alertType,
    position,
    timeout,
    buttonTextClose,
    showButtonClose = true,
    enableConfirm = false,
    onConfirm,
  } = options;
  let alertPersian = document.getElementById("alert_persian");
  let headerAlert = alertPersian.querySelector(".modal .header_modal");
  let modalAlert = alertPersian.querySelector(".modal");
  let buttonClose = alertPersian.querySelector("#close_persian_modal");
  let titleModalPersian = alertPersian.querySelector("#title_modal_persian");
  let textModalPersian = alertPersian.querySelector("#text_modal_persian");
  let modalIcon = alertPersian.querySelector("#alert_modal_icon_persian");
  let buttonGroup = alertPersian.querySelector("#button_modal_persian");
  let btnConfirm = alertPersian.querySelector(".btn_confirm");

  function setClass(el, className) {
    el.classList.add(className);
  }

  function removeClass(el, className) {
    el.classList.remove(...className);
  }

  let alertClass = [
    "bg_success_modal",
    "bg_danger_modal",
    "bg_warning_modal",
    "bg_info_modal",
  ];
  let buttonClass = [
    "btn_modal_success",
    "btn_modal_danger",
    "btn_modal_warning",
    "btn_modal_info",
  ];
  let iconClass = ["text_success", "text_danger", "text_warning", "text_info"];

  alertPersian.classList.add("d_flex");
  modalAlert.classList.add("slidInDownAnimation");
  modalAlert.classList.remove("slidInUpAnimation");
  titleModalPersian.textContent = message;
  textModalPersian.textContent = description;

  if (buttonTextClose) {
    buttonClose.textContent = buttonTextClose;
  } else {
    buttonClose.textContent = "بستن";
  }
  buttonClose.addEventListener("click", alertClose);
  if (position) {
    alertPersian.classList.remove("center_modal");
    modalAlert.classList.add(position);
  }

  if (btnConfirm && typeof onConfirm === "function") {
    btnConfirm.remove();
  }

  if (showButtonClose) {
    buttonClose.classList.add("d_block");
  } else {
    buttonClose.classList.remove("d_block");
  }

  removeClass(headerAlert, alertClass);

  removeClass(buttonClose, buttonClass);

  removeClass(modalIcon, iconClass);

  switch (alertType) {
    case "success":
      setClass(headerAlert, "bg_success_modal");
      setClass(buttonClose, "btn_modal_success");
      setClass(modalIcon, "text_success");
      modalIcon.textContent = "✔";
      break;
    case "error":
      setClass(headerAlert, "bg_danger_modal");
      setClass(buttonClose, "btn_modal_danger");
      setClass(modalIcon, "text_danger");
      modalIcon.textContent = "!";
      break;
    case "warning":
      setClass(headerAlert, "bg_warning_modal");
      setClass(buttonClose, "btn_modal_warning");
      setClass(modalIcon, "text_warning");
      modalIcon.textContent = "!";
      break;
    default:
      setClass(headerAlert, "bg_info_modal");
      setClass(buttonClose, "btn_modal_info");
      setClass(modalIcon, "text_info");
      modalIcon.textContent = "!";
  }

  if (timeout) {
    setTimeout(() => {
      modalAlert.classList.remove("slidInDownAnimation");
      modalAlert.classList.add("slidInUpAnimation");
      setTimeout(() => {
        alertPersian.classList.remove("d_flex");
      }, 500);
    }, timeout);
  }

  if (enableConfirm) {
    let buttonConfirm = document.createElement("button");
    buttonConfirm.classList.add("bg_danger_modal", "btn_confirm");
    buttonConfirm.textContent = "تایید";
    buttonGroup.appendChild(buttonConfirm);
    buttonGroup.classList.add("d_flex");
    buttonConfirm.addEventListener("click", () => {
      alertClose();
      setTimeout(() => {
        onConfirm();
      }, 500);
    });
  }
}

function alertClose() {
  let alertPersian = document.getElementById("alert_persian");
  let modalAlert = alertPersian.querySelector(".modal");
  modalAlert.classList.remove("slidInDownAnimation");
  modalAlert.classList.add("slidInUpAnimation");
  setTimeout(() => {
    alertPersian.classList.remove("d_flex");
  }, 500);
}
