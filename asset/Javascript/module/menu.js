// menu -btn
export function clickEvent() {
  const btn_menu = document.querySelector("#menu-btn");
  const background = document.querySelector("#bgr");
  const subMenu = document.querySelector(".sub-menu .wrap");
  const closeBtn = document.querySelector("#cls-btn");
  const pay = document.querySelector("#pay");
  const paybtn1 = document.querySelector(".pay-btn");
  const paybtn2 = document.querySelector(".pay-btn2");
  const closePay = document.querySelector(".wrap-icon");
  const paybtnContent = document.querySelector(".payment .wedding-box");

  paybtn1.addEventListener("click", function (e) {
    e.preventDefault();
    pay.classList.remove("hide");
  });
  paybtn2.addEventListener("click", function (e) {
    e.preventDefault();
    pay.classList.remove("hide");
  });
  pay.addEventListener("click", function (event) {
    if (!paybtnContent.contains(event.target)) {
      pay.classList.toggle("hide");
    }
  });
  closePay.addEventListener("click", function () {
    pay.classList.toggle("hide");
  });
  btn_menu.addEventListener("click", function () {
    if (!subMenu.classList.contains("show-menu")) {
      background.classList.remove("hide");
      subMenu.classList.add("show-menu");
    } else {
      background.classList.add("hide");
      subMenu.classList.remove("show-menu");
    }
  });
  closeBtn.addEventListener("click", function () {
    if (subMenu.classList.contains("show-menu")) {
      background.classList.add("hide");
      subMenu.classList.remove("show-menu");
    }
  });

  background.addEventListener("click", function () {
    if (!background.classList.contains("hide")) {
      background.classList.add("hide");
      subMenu.classList.remove("show-menu");
    }
  });
}
