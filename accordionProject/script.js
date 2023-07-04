"use strict";

let btn = document.querySelectorAll(".accordion");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].classList.contains("is-open")) {
      btn[i].classList.toggle("is-open");
      btn[i].nextElementSibling.style.maxHeight = "0";
    } else {
      btn[i].classList.toggle("is-open");
      btn[i].nextElementSibling.style.maxHeight =
        btn[i].nextElementSibling.scrollHeight + "px";
    }
  });
}
