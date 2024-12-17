export function buttonEvent() {
  const listWedding = document.querySelector(".box-item-wedding");
  const buttonOpen = document.querySelector(".button-open");
  const buttonClose = document.querySelector(".button-close");
  const openVolum = document.querySelector(".open-volum");
  const closeVolum = document.querySelector(".close-volum");
  const textWeddings = document.querySelectorAll(".text-wedding");
  const audio = document.querySelector(".audio");
  const textVolum = document.querySelector(".text-volum");
  const buttonWeddings = document.querySelectorAll(".button-wedding");

  setTimeout(() => {
    closeVolum.style.display = "block";
  }, 2000);

  function ClickEven() {
    buttonOpen.addEventListener("click", () => {
      buttonOpen.style.display = "none";
      listWedding.style.display = "block";
    });

    buttonClose.addEventListener("click", () => {
      buttonOpen.style.display = "block";
      listWedding.style.display = "none";
    });

    closeVolum.addEventListener("click", () => {
      openVolum.style.display = "block";
      closeVolum.style.display = "none";
      audio.play();
      // check = true;
    });

    openVolum.addEventListener("click", () => {
      openVolum.style.display = "none";
      closeVolum.style.display = "block";
      audio.pause();
    });
  }

  function timeShow() {
    setTimeout(() => {
      buttonOpen.style.display = "none";
      listWedding.style.display = "block";
    }, 4000);
  }

  function showText() {
    let delay = 16000;
    setInterval(() => {
      for (let i = 0; i < textWeddings.length; i++) {
        setTimeout(() => {
          textWeddings[i].style.opacity = "1";
          textWeddings[i].style.visibility = "visible";
          buttonWeddings[i].classList.add("shake");
        }, 3000 * (i + 1));
        setTimeout(() => {
          // box.classList.remove("shake"); // Xóa class sau 0.5s
        }, 3000 * (i + 1) + 500); // Thời gian phải khớp với animation trong CSS
        setTimeout(() => {
          textWeddings[i].style.opacity = "0";
          textWeddings[i].style.visibility = "hidden";
        }, 3000 * (i + 1) + 1500);
      }
    }, delay);
  }

  function showTextAudio() {
    setTimeout(() => {
      textVolum.style.opacity = "1";
      textVolum.style.visibility = "visible";
    }, 4000);
    setTimeout(() => {
      textVolum.style.opacity = "0";
      textVolum.style.visibility = "hidden";
    }, 10000);
  }

  ClickEven();
  showTextAudio();
  timeShow();
  showText();
}
