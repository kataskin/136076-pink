var link = document.querySelector(".main-nav__icon-menu");
var menu = document.querySelector(".main-nav__menu");

var form = document.querySelector(".form__main-field");
var required = document.querySelectorAll(".form__item--required");
var buttonOk = document.querySelector(".form-btn--ok");
var buttonClose = document.querySelector(".form-btn--close");
var popupSuccess = document.querySelector(".popup--wrapper-true");
var popupFalse = document.querySelector(".popup--wrapper-false")

if (link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("main-nav__menu--show");
    link.classList.toggle("main-nav__icon-menu--close");
  })
}

function hasValue(elem) {
  return elem.value;
}

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    for (i = 0; i < required.length; i++) {
      if (!required[i].value) {
        popupFalse.classList.add("popup--show");
        return;
      }
    }
    popupSuccess.classList.add("popup--show");
  });
  buttonOk.addEventListener("click", function(event) {
    popupFalse.classList.remove("popup--show");
  })
  buttonClose.addEventListener("click", function(event) {
    popupSuccess.classList.remove("popup--show");
  })
}
