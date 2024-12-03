const s0_title = document.querySelector(".section-1 .wrap .inner-title");
const s0_img = document.querySelector(".section-1 .wrap .inner-img");
const s0_Wedding = document.querySelector(
  ".section-1 .wrap .inner-img .wedding-title"
);
const s0_Name = document.querySelector(
  ".section-1 .wrap .inner-img .wedding-desc "
);
const body = document.querySelector("body");
setTimeout(() => {
  s0_img.classList.toggle("moveFromBottom");
}, 500);
setTimeout(() => {
  s0_title.classList.toggle("moveFromBottom");
}, 1000);
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentMonth = 1;
  const currentYear = 2025;
  const currentDay = 19;
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
  document.getElementById("month").textContent = monthNames[currentMonth - 1];
  document.getElementById("year").textContent = currentYear;

  function generateCalendar(month, year) {
    const calendarBody = document.getElementById("inner-calendar-body");
    calendarBody.innerHTML = "";

    // Set the target date to January 19, 2025
    const targetDate = new Date(2025, 0, 19); // January is month 0
    const currentDay = targetDate.getDate();
    const today = targetDate; // Set today to the target date

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      // Maximum of 6 rows
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < (firstDay === 0 ? 6 : firstDay - 1)) {
          cell.textContent = ""; // Empty cell before the first day of the month
        } else if (date > daysInMonth) {
          cell.textContent = ""; // Empty cells after the last day of the month
        } else {
          if (
            date === currentDay &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            const hov = document.createElement("div");
            hov.classList.add("selected"); // Highlight the current day
            hov.textContent = date;
            cell.appendChild(hov);
          } else {
            cell.textContent = date; // Fill in the day number
          }
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);

      if (date > daysInMonth) break; // Stop if we exceed the number of days in the month
    }
  }

  // Call the function for January 2025
  // 0 for January, 2025 for the year
  function countdown(targetDate) {
    function updateCountdown() {
      const now = new Date();
      // console.log(now);
      const diff = targetDate - now;

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
  // generateCalendar(currentMonth, currentYear);
  generateCalendar(0, 2025);

  // Gọi hàm đếm ngược (thay đổi targetDate thành ngày mong muốn)
  const targetDate = new Date("2025-01-19T11:00:00");
  countdown(targetDate);
});

// navbar
const navbar = document.querySelector(".header");
const pivot = document.querySelector("#pivot-nav");
const pivotPotision = pivot.offsetTop;

// animation section-0

// animation section-1
const weddingBox = document.querySelectorAll(
  ".section-1 .wrap .wedding-nav .wedding-box"
);
// animation section-2
const s2_pList = document.querySelectorAll(".section-2-main > p");

// animation section-3
const s3_title = document.querySelector(".album .album-title");
const s3_desc = document.querySelector(".album .album-desc");
const s3_album1 = document.querySelectorAll(
  ".album .album-img .col:first-child .img"
);
const s3_album2 = document.querySelectorAll(
  ".album .album-img .col:last-child .img"
);
const s3_btn = document.querySelector(".album .see-all-album p a");

// animation section-4
const s4_calender = document.querySelector(".inner-calendar");
const s4_countDown = document.querySelector(".inner-countdown");

// animation section-5
const pivot2 = 4055;
const s5_h2Title = document.querySelector(".section-5 .wrap h2");
const s5_h3Title = document.querySelector(".section-5 .wrap > h3");
const timeLinecard = document.querySelectorAll(
  ".section-5 .wrap .inner-wrap .time-line-card"
);
// animation section-6
const s6_main = document.querySelectorAll(".section-6-main .item");

// animation section-7
const s7_title = document.querySelector(".wedding-event .wedding-event-title");
const s7_desc = document.querySelector(".wedding-event .wedding-event-desc");
const s7_item = document.querySelectorAll(
  ".wedding-event .inner-wedding .event"
);
// animation section-8
const s8_title = document.querySelector(
  ".section-bride-groom .inner-wrap > h2"
);
const s8_items = document.querySelectorAll(
  ".section-bride-groom .inner-wrap .inner-list-bg .inner-box"
);

const s8_items1 = Array.from(s8_items[0].children);
const s8_items2 = Array.from(s8_items[1].children);

// animation section-9
const s9_title = document.querySelector(".section-9-main .header-main");
const s9_items = document.querySelectorAll(
  ".section-9-main .box-item .box-img"
);
// animation section-10
const s10_title = document.querySelector(".wedding-box .wedding-box-title");
const s10_desc = document.querySelector(".wedding-box .wedding-box-desc");
const s10_items = document.querySelectorAll(".wedding-box .qr-box .qr");
// animation section-11
const s11_title = document.querySelector(".section-11 .wrap .inner-title");
const s11_desc = document.querySelector(".section-11 .wrap .inner-desc");
window.onscroll = () => {
  remindBox.classList.add("hide");

  if (window.pageYOffset >= pivotPotision) {
    navbar.classList.add("sticky-nav");
    navbar.classList.remove("hide");
  } else {
    navbar.classList.remove("sticky-nav");
    navbar.classList.add("hide");
  }
  // animate section-0
  if (window.pageYOffset + window.innerHeight >= s0_Wedding.offsetTop + 300) {
    s0_Wedding.classList.add("moveFromBottom");
  } else {
    s0_Wedding.classList.remove("moveFromBottom");
  }
  if (window.pageYOffset + window.innerHeight >= s0_Name.offsetTop + 250) {
    s0_Name.classList.add("moveFromBottom");
  } else {
    s0_Name.classList.remove("moveFromBottom");
  }
  // animate section-1
  weddingBox.forEach((value, key, arr) => {
    if (key === 0) {
      if (window.pageYOffset + window.innerHeight >= value.offsetTop + 50) {
        arr[key].classList.add("moveFromLeft");
      } else {
        arr[key].classList.remove("moveFromLeft");
      }
    } else if (key === 1) {
      if (window.pageYOffset + window.innerHeight >= value.offsetTop + 50) {
        arr[key].classList.add("moveFromBottom");
      } else {
        arr[key].classList.remove("moveFromBottom");
      }
    } else {
      if (window.pageYOffset + window.innerHeight >= value.offsetTop + 50) {
        arr[key].classList.add("moveFromRight");
      } else {
        arr[key].classList.remove("moveFromRight");
      }
    }
  });

  //animate section-2
  s2_pList.forEach((element) => {
    if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
      element.classList.add("moveFromBottom");
    } else {
      element.classList.remove("moveFromBottom");
    }
  });
  let s2_iframe = document.querySelector(".section-2-main .iframe");
  if (window.pageYOffset + window.innerHeight >= s2_iframe.offsetTop - 100) {
    s2_iframe.classList.add("moveFromBottom");
  } else {
    s2_iframe.classList.remove("moveFromBottom");
  }
  //animate section-3
  // part1
  if (window.pageYOffset + window.innerHeight >= s3_title.offsetTop + 100) {
    s3_title.classList.add("moveFromBottom");
  } else {
    s3_title.classList.remove("moveFromBottom");
  }
  if (window.pageYOffset + window.innerHeight >= s3_desc.offsetTop + 100) {
    s3_desc.classList.add("moveFromBottom");
  } else {
    s3_desc.classList.remove("moveFromBottom");
  }
  // part2
  s3_album1.forEach((element, index) => {
    if (index === 0) {
      if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
        element.classList.add("moveFromLeft");
        s3_album2[index].classList.add("moveFromRight");
      } else {
        element.classList.remove("moveFromLeft");
        s3_album2[index].classList.remove("moveFromRight");
      }
    } else {
      if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
        element.classList.add("moveFromCenterToLeft");
        s3_album2[index].classList.add("moveFromCenterToRight");
      } else {
        element.classList.remove("moveFromCenterToLeft");
        s3_album2[index].classList.remove("moveFromCenterToRight");
      }
    }
  });
  // part3
  if (window.pageYOffset + window.innerHeight >= s3_btn.offsetTop + 100) {
    s3_btn.classList.add("moveFromBottom");
  } else {
    s3_btn.classList.remove("moveFromBottom");
  }
  //animate section-4
  if (window.pageYOffset + window.innerHeight >= s4_calender.offsetTop + 100) {
    s4_calender.classList.add("moveFromLeft");
  } else {
    s4_calender.classList.remove("moveFromLeft");
  }
  if (window.pageYOffset + window.innerHeight >= s4_countDown.offsetTop + 100) {
    s4_countDown.classList.add("moveFromRight");
  } else {
    s4_countDown.classList.remove("moveFromRight");
  }
  //animate section-5
  //part1
  if (window.pageYOffset + window.innerHeight >= s5_h2Title.offsetTop + 100) {
    s5_h2Title.classList.add("moveFromBottom");
  } else {
    s5_h2Title.classList.remove("moveFromBottom");
  }
  //part2

  if (window.pageYOffset + window.innerHeight >= s5_h3Title.offsetTop + 100) {
    s5_h3Title.classList.add("moveFromBottom");
  } else {
    s5_h3Title.classList.remove("moveFromBottom");
  }
  //part3
  timeLinecard.forEach((element) => {
    let thisTop = element.offsetTop; // Lấy vị trí của phần tử
    if (window.pageYOffset + window.innerHeight >= thisTop + 50) {
      element.classList.add("moveFromLeft"); // Thêm class khi đã cuộn đến
    } else {
      element.classList.remove("moveFromLeft"); // Xóa class khi chưa đến
    }
  });
  //animate section-6
  s6_main.forEach((value) => {
    if (window.pageYOffset + window.innerHeight >= value.offsetTop + 100) {
      value.classList.add("moveFromBottom"); // Thêm class khi đã cuộn đến
    } else {
      value.classList.remove("moveFromBottom"); // Xóa class khi chưa đến
    }
  });
  //animate section-7
  if (window.pageYOffset + window.innerHeight >= s7_title.offsetTop + 100) {
    s7_title.classList.add("moveFromBottom");
  } else {
    s7_title.classList.remove("moveFromBottom");
  }
  if (window.pageYOffset + window.innerHeight >= s7_desc.offsetTop + 100) {
    s7_desc.classList.add("moveFromBottom");
  } else {
    s7_desc.classList.remove("moveFromBottom");
  }
  s7_item.forEach((element) => {
    if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
      element.classList.add("rotate360X"); // Thêm class khi đã cuộn đến
    } else {
      element.classList.remove("rotate360X"); // Xóa class khi chưa đến
    }
  });
  //animate section-8
  if (window.pageYOffset + window.innerHeight >= s8_title.offsetTop + 100) {
    s8_title.classList.add("moveFromBottom");
  } else {
    s8_title.classList.remove("moveFromBottom");
  }
  s8_items1.forEach((element) => {
    if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
      element.classList.add("rotate360X"); // Thêm class khi đã cuộn đến
    } else {
      element.classList.remove("rotate360X"); // Xóa class khi chưa đến
    }
  });
  s8_items2.forEach((element) => {
    if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
      element.classList.add("rotate360Y"); // Thêm class khi đã cuộn đến
    } else {
      element.classList.remove("rotate360Y"); // Xóa class khi chưa đến
    }
  });
  //animate section-9
  if (window.pageYOffset + window.innerHeight >= s9_title.offsetTop + 100) {
    s9_title.classList.add("moveFromBottom");
  } else {
    s9_title.classList.remove("moveFromBottom");
  }
  s9_items.forEach((element) => {
    if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
      element.classList.add("moveFromBottom"); // Thêm class khi đã cuộn đến
    } else {
      element.classList.remove("moveFromBottom"); // Xóa class khi chưa đến
    }
  });
  //animate section-10
  if (window.pageYOffset + window.innerHeight >= s10_title.offsetTop + 100) {
    s10_title.classList.add("moveFromBottom");
  } else {
    s10_title.classList.remove("moveFromBottom");
  }
  if (window.pageYOffset + window.innerHeight >= s10_desc.offsetTop + 100) {
    s10_desc.classList.add("moveFromBottom");
  } else {
    s10_desc.classList.remove("moveFromBottom");
  }
  s10_items.forEach((element, index) => {
    if (index === 0) {
      if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
        element.classList.add("moveFromLeft"); // Thêm class khi đã cuộn đến
      } else {
        element.classList.remove("moveFromLeft"); // Xóa class khi chưa đến
      }
    } else {
      if (window.pageYOffset + window.innerHeight >= element.offsetTop + 100) {
        element.classList.add("moveFromRight"); // Thêm class khi đã cuộn đến
      } else {
        element.classList.remove("moveFromRight"); // Xóa class khi chưa đến
      }
    }
  });
  //animate section-11
  if (window.pageYOffset + window.innerHeight >= s11_title.offsetTop + 100) {
    s11_title.classList.add("moveFromBottom");
  } else {
    s11_title.classList.remove("moveFromBottom");
  }
  if (window.pageYOffset + window.innerHeight >= s11_desc.offsetTop + 100) {
    s11_desc.classList.add("moveFromBottom");
  } else {
    s11_desc.classList.remove("moveFromBottom");
  }
};

// menu -btn
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

// Snow fall
const snowfallContainer = document.getElementById("snowfall-container");

// Tạo các bông tuyết
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Đặt vị trí ngẫu nhiên
  snowflake.style.left = Math.random() * window.innerWidth + "px";

  // Kích thước và thời gian rơi ngẫu nhiên
  const size = Math.random() * 10; // Kích thước từ 5px đến 15px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  const duration = Math.random() * 3 + 5; // Thời gian rơi từ 2s đến 5s
  snowflake.style.animationDuration = `${duration}s`;

  // Thêm bông tuyết vào container
  snowfallContainer.appendChild(snowflake);

  // Loại bỏ bông tuyết sau khi kết thúc rơi
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// Tạo tuyết rơi liên tục
setInterval(createSnowflake, 100); // Tạo mỗi 100ms

// Links variables .

import { Links } from "./Link.js";

// Ảnh cưới (section-1) .
const img_1_1 = document.querySelector("#img-1-1");
img_1_1.src = Links.img_1_1;
// end ảnh cưới .

// album ảnh cưới (section-3) .
const img_3_1 = document.querySelector("#img-3-1");
img_3_1.src = Links.img_3_1;
const img_3_2 = document.querySelector("#img-3-2");
img_3_2.src = Links.img_3_2;
const img_3_3 = document.querySelector("#img-3-3");
img_3_3.src = Links.img_3_3;
const img_3_4 = document.querySelector("#img-3-4");
img_3_4.src = Links.img_3_4;
const img_3_5 = document.querySelector("#img-3-5");
img_3_5.src = Links.img_3_5;
const img_3_6 = document.querySelector("#img-3-6");
img_3_6.src = Links.img_3_6;

const album_3_1 = document.querySelector("#album-3-1");
album_3_1.src = Links.img_3_1;
const album_3_2 = document.querySelector("#album-3-2");
album_3_2.src = Links.img_3_2;
const album_3_3 = document.querySelector("#album-3-3");
album_3_3.src = Links.img_3_3;
const album_3_4 = document.querySelector("#album-3-4");
album_3_4.src = Links.img_3_4;
const album_3_5 = document.querySelector("#album-3-5");
album_3_5.src = Links.img_3_5;
const album_3_6 = document.querySelector("#album-3-6");
album_3_6.src = Links.img_3_6;
const album_3_7 = document.querySelector("#album-3-7");
album_3_7.src = Links.img_3_7;
const album_3_8 = document.querySelector("#album-3-8");
album_3_8.src = Links.img_3_8;
const album_3_9 = document.querySelector("#album-3-9");
album_3_9.src = Links.img_3_9;
const album_3_10 = document.querySelector("#album-3-10");
album_3_10.src = Links.img_3_10;
const album_3_11 = document.querySelector("#album-3-11");
album_3_11.src = Links.img_3_11;

const slide_3_1 = document.querySelector("#slide-3-1");
slide_3_1.src = Links.img_3_1;
const slide_3_2 = document.querySelector("#slide-3-2");
slide_3_2.src = Links.img_3_2;
const slide_3_3 = document.querySelector("#slide-3-3");
slide_3_3.src = Links.img_3_3;
const slide_3_4 = document.querySelector("#slide-3-4");
slide_3_4.src = Links.img_3_4;
const slide_3_5 = document.querySelector("#slide-3-5");
slide_3_5.src = Links.img_3_5;
const slide_3_6 = document.querySelector("#slide-3-6");
slide_3_6.src = Links.img_3_6;
const slide_3_7 = document.querySelector("#slide-3-7");
slide_3_7.src = Links.img_3_7;
const slide_3_8 = document.querySelector("#slide-3-8");
slide_3_8.src = Links.img_3_8;
const slide_3_9 = document.querySelector("#slide-3-9");
slide_3_9.src = Links.img_3_9;
const slide_3_10 = document.querySelector("#slide-3-10");
slide_3_10.src = Links.img_3_10;
const slide_3_11 = document.querySelector("#slide-3-11");
slide_3_11.src = Links.img_3_11;

// end album ảnh cưới (sectiom-3) .

// lời ngỏ (section-6) .
const img_6_1 = document.querySelector("#img-6-1");
img_6_1.src = Links.img_6_1;
// end lời ngỏ .

// phù dâu & phù rể (section-9) .
const img_9_1 = document.querySelector("#img-9-1");
img_9_1.src = Links.img_9_1;
const img_9_2 = document.querySelector("#img-9-2");
img_9_2.src = Links.img_9_2;
const img_9_3 = document.querySelector("#img-9-3");
img_9_3.src = Links.img_9_3;
const img_9_4 = document.querySelector("#img-9-4");
img_9_4.src = Links.img_9_4;
// end phù dâu & phù rể .

//greet
function validateInput(input, errorElement, errorMessage) {
  if (!input.value.trim() || !input.checkValidity()) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
    input.style.borderColor = "#e63946";
    input.style.backgroundColor = "#ffe6e6";
    return 0;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
    input.style.borderColor = "#007bff";
    input.style.backgroundColor = "#e6ffe6";
    return 1;
  }
}
function validateNameLength(input, errorElement, errorMessage) {
  if (input.value.length < 5) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
    input.style.borderColor = "#e63946";
    input.style.backgroundColor = "#ffe6e6";
    return 0;
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
    input.style.borderColor = "#007bff";
    input.style.backgroundColor = "#e6ffe6";
    return 1;
  }
}
// Kiểm tra từng input khi blur
document.getElementById("nameInput").addEventListener("blur", function () {
  if (
    validateInput(
      this,
      document.getElementById("nameError"),
      "Tên không được để trống!"
    )
  ) {
    validateNameLength(
      this,
      document.getElementById("nameError"),
      "Tên phải lớn hơn 5 kí tự"
    );
  }
});

document.getElementById("emailInput").addEventListener("blur", function () {
  validateInput(
    this,
    document.getElementById("emailError"),
    "Email không hợp lệ!"
  );
});

document.getElementById("greetInput").addEventListener("blur", function () {
  validateInput(
    this,
    document.getElementById("greetError"),
    "Lời chúc không được để trống!"
  );
});
function addNewComment(name, comment) {
  const parent = document.querySelector(".show-comment");
  const newComment = document.createElement("div");
  newComment.classList.add("box-comment");
  newComment.innerHTML = `<h2 class="title">${name}</h2>
  <p class="detail">${comment}</p>`;
  if (parent.firstChild) {
    parent.insertBefore(newComment, parent.firstChild);
  } else {
    parent.appendChild(newComment);
  }
}
// Xử lý khi submit
document.getElementById("greetForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const greetInput = document.getElementById("greetInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const greetError = document.getElementById("greetError");

  validateInput(nameInput, nameError, "Tên không được để trống!");
  validateNameLength(nameInput, nameError, "Tên phải dài hơn 5 kí tự!");
  validateInput(emailInput, emailError, "Email không hợp lệ!");
  validateInput(greetInput, greetError, "Lời chúc không được để trống!");

  if (
    !nameError.textContent &&
    !emailError.textContent &&
    !greetError.textContent
  ) {
    addNewComment(nameInput.value.trim(), greetInput.value.trim());
    alert("Lời chúc của bạn đã được gửi thành công!");
    document.getElementById("greetForm").reset();
  }
});
