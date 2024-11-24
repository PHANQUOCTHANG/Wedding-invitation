document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();
  const monthNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  document.getElementById("month").textContent = monthNames[currentMonth];
  document.getElementById("year").textContent = currentYear;

  function generateCalendar(month, year) {
    const calendarBody = document.getElementById("inner-calendar-body");
    calendarBody.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      // Tối đa 6 hàng
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < (firstDay === 0 ? 6 : firstDay - 1)) {
          cell.textContent = "";
        } else if (date > daysInMonth) {
          cell.textContent = "";
        } else {
          if (
            date === currentDay &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            const hov = document.createElement("div");
            hov.classList.add("selected");
            hov.textContent = date;
            cell.appendChild(hov);
          } else cell.textContent = date;
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);

      if (date > daysInMonth) break;
    }
  }

  function countdown(targetDate) {
    function updateCountdown() {
      const now = new Date();
      const diff = now - targetDate;

      if (diff < 0) return; // Ngưng nếu đã qua ngày

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
    }

    updateCountdown(); // Chạy ngay lập tức
    setInterval(updateCountdown, 1000); // Cập nhật mỗi giây
  }

  // Gọi hàm tạo lịch
  generateCalendar(currentMonth, currentYear);

  // Gọi hàm đếm ngược (thay đổi targetDate thành ngày mong muốn)
  const targetDate = new Date("2023-04-04T00:00:00");
  countdown(targetDate);
});

// navbar

const navbar = document.querySelector(".header");
const pivot = document.querySelector("#pivot-nav");
const pivotPotision = pivot.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= pivotPotision) {
    navbar.classList.add("sticky-nav");
    navbar.classList.remove("hide");
  } else {
    navbar.classList.remove("sticky-nav");
    navbar.classList.add("hide");
  }
};

// menu -btn
const btn_menu = document.querySelector("#menu-btn");
const background = document.querySelector("#bgr");
const subMenu = document.querySelector(".sub-menu .wrap");
const closeBtn = document.querySelector("#cls-btn");
btn_menu.addEventListener("click", function () {
  if (!subMenu.classList.contains("show-menu")) {
    console.log(subMenu);
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

const listWedding = document.querySelector(".box-item-wedding");
const buttonOpen = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");
const openVolum = document.querySelector(".open-volum");
const closeVolum = document.querySelector(".close-volum");
const textWeddings = document.querySelectorAll(".text-wedding");
const audio = document.querySelector(".audio");
const textVolum = document.querySelector(".text-volum");
const buttonWeddings = document.querySelectorAll(".button-wedding") ;

console.log(buttonWeddings) ;

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
    check = true;
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
        buttonWeddings[i].classList.add('shake')
      }, 3000 * (i + 1));
      setTimeout(() => {
        box.classList.remove('shake'); // Xóa class sau 0.5s
      }, 3000*(i+1)+500); // Thời gian phải khớp với animation trong CSS
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
