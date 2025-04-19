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
  buttonClass.textContent = buttonTextClose;

  if (btnConfirm) {
    btnConfirm.remove();
  }

  if (showButtonClose) {
    buttonClose.classList.add("d_block");
  } else {
    buttonClose.classList.remove("d_block");
  }

  headerAlert.classList.remove(...alertClass);

  buttonClose.classList.remove(...buttonClass);

  modalIcon.classList.remove(...iconClass);

  switch (alertType) {
    case "success":
      headerAlert.classList.add("bg_success_modal");
      buttonClose.classList.add("btn_modal_success");
      modalIcon.textContent = "✔";
      modalIcon.classList.add("text_success");
      break;
    case "error":
      headerAlert.classList.add("bg_danger_modal");
      buttonClose.classList.add("btn_modal_danger");
      modalIcon.textContent = "!";
      modalIcon.classList.add("text_danger");
      break;
    case "warning":
      headerAlert.classList.add("bg_warning_modal");
      buttonClose.classList.add("btn_modal_warning");
      modalIcon.textContent = "!";
      modalIcon.classList.add("text_warning");
      break;
    default:
      headerAlert.classList.add("bg_info_modal");
      buttonClose.classList.add("btn_modal_info");
      modalIcon.textContent = "!";
      modalIcon.classList.add("text_info");
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

let show = document.getElementById("show");
show.addEventListener("click", () => {
  persianAlert({
    message: "از حذف مطمئن هستید",
    description: "قابل بازگردانی نیست",
    alertType: "info",
    position: "top-right",
    // timeout: 3000,
    buttonTextClose: "بی خیال",
    showButtonClose: true,
    enableConfirm: true,
    onConfirm: function () {
      persianAlert({
        message: "عملیات",
        description: "عملیات موفقیت آمیز بود",
        alertType: "success",
        position: "top-right",
        buttonTextClose: "بی خیال",
      });
    },
  });
});
