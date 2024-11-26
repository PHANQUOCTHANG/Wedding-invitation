

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

// animation section-0
const s0_title = document.querySelector(".section-1 .wrap .inner-title");
const s0_img = document.querySelector(".section-1 .wrap .inner-img");

// animation section-1
const weddingBox = document.querySelectorAll(
  ".section-1 .wrap .wedding-nav .wedding-box"
);
const pivot1 = document.querySelector(".wedding-nav").offsetTop;
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
  if (window.pageYOffset >= pivotPotision) {
    navbar.classList.add("sticky-nav");
    navbar.classList.remove("hide");
  } else {
    navbar.classList.remove("sticky-nav");
    navbar.classList.add("hide");
  }
  //animate section-0
  if (window.pageYOffset + window.innerHeight >= s0_title.offsetTop + 150) {
    s0_title.classList.add("moveFromBottom");
  } else {
    s0_title.classList.remove("moveFromBottom");
  }
  if (window.pageYOffset + window.innerHeight >= s0_img.offsetTop + 150) {
    s0_img.classList.add("moveFromBottom");
  } else {
    s0_img.classList.remove("moveFromBottom");
  }
  //animate section-1
  if (window.pageYOffset + window.innerHeight >= pivot1 + 150) {
    weddingBox.forEach((value, key, arr) => {
      if (key === 0) {
        arr[key].classList.add("moveFromLeft");
      } else if (key === 1) {
        arr[key].classList.add("moveFromBottom");
      } else {
        arr[key].classList.add("moveFromRight");
      }
    });
  } else {
    weddingBox.forEach((value, key, arr) => {
      if (key === 0) {
        arr[key].classList.remove("moveFromLeft");
      } else if (key === 1) {
        arr[key].classList.remove("moveFromBottom");
      } else {
        arr[key].classList.remove("moveFromRight");
      }
    });
  }
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
        box.classList.remove("shake"); // Xóa class sau 0.5s
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

import {Links} from "./Link.js"

// lời ngỏ (section-6) .
const img_6_1 = document.querySelector("#img-6-1") ;
img_6_1.src = Links.img_6_1 ;
// end lời ngỏ .


// phù dâu & phù rể (section-9) .
const img_9_1 = document.querySelector("#img-9-1") ;
img_9_1.src = Links.img_9_1 ;
const img_9_2 = document.querySelector("#img-9-2") ;
img_9_2.src = Links.img_9_2 ;
const img_9_3 = document.querySelector("#img-9-3") ;
img_9_3.src = Links.img_9_3 ;
const img_9_4 = document.querySelector("#img-9-4") ;
img_9_4.src = Links.img_9_4 ;
// end phù dâu & phù rể .
