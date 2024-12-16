export function scrollEvent() {
  // navbar
  const navbar = document.querySelector(".header");
  const pivot = document.querySelector("#pivot-nav");
  const pivotPotision = pivot.offsetTop;

  // animation section-0
  const s0_title = document.querySelector(".section-1 .wrap .inner-title");
  const s0_img = document.querySelector(".section-1 .wrap .inner-img");
  const s0_Wedding = document.querySelector(
    ".section-1 .wrap .inner-img .wedding-title"
  );
  const s0_Name = document.querySelector(
    ".section-1 .wrap .inner-img .wedding-desc "
  );
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
  const s5_h2Title = document.querySelector(".section-5 .wrap h2");
  const s5_h3Title = document.querySelector(".section-5 .wrap > h3");
  const timeLinecard = document.querySelectorAll(
    ".section-5 .wrap .inner-wrap .time-line-card"
  );
  // animation section-6
  const s6_main = document.querySelectorAll(".section-6-main .item");

  // animation section-7
  const s7_title = document.querySelector(
    ".wedding-event .wedding-event-title"
  );
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
  const s9_contentt = document.querySelector(".section-9 .box-content ");
  const s9_title = document.querySelector(".section-9-main .header-main");
  const s9_items = document.querySelectorAll(".section-9 .qr-box ");
  // animation section-10
  const s10_title = document.querySelector(".wedding-box .wedding-box-title");
  const s10_desc = document.querySelector(".wedding-box .wedding-box-desc");
  const s10_items = document.querySelectorAll(".wedding-box .qr-box .qr");
  // animation section-11
  const s11_title = document.querySelector(".section-11 .wrap .inner-title");
  const s11_desc = document.querySelector(".section-11 .wrap .inner-desc");
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
  if (window.pageYOffset + window.innerHeight >= s9_contentt.offsetTop + 100) {
    s9_contentt.classList.add("moveFromBottom");
  } else {
    s9_contentt.classList.remove("moveFromBottom");
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
}
