//modul import
import { calendar } from "./module/calender.js";
import { scrollEvent } from "./module/scrollEvent.js";
import { clickEvent } from "./module/menu.js";
import { buttonEvent } from "./module/buttonEvent.js";
import { snowFall } from "./module/snowFall.js";
import { sendGreet } from "./module/sendGreet.js";


import { Links } from "./module/Link.js";
//xử lý khi mới vào trang
const s0_title = document.querySelector(".section-1 .wrap .inner-title");
const s0_img = document.querySelector(".section-1 .wrap .inner-img");
setTimeout(() => {
  s0_img.classList.toggle("moveFromBottom");
}, 500);
setTimeout(() => {
  s0_title.classList.toggle("moveFromBottom");
}, 1000);

//sử lý sự kiện cuộn
window.onscroll = () => {
  scrollEvent();
};
//sử lý sự kiện click
clickEvent();

//Xử lý sự kiện button
buttonEvent();

//Xử lý sự kiện tuyết rơi
snowFall();

//Xử lý sổ lưu bút
sendGreet();

//<-------------------- Links variables-------------------------> .
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

// qr nhóm chat + form đăng kí .
const img_9_1 = document.querySelector("#img-9-1");
img_9_1.src = Links.img_9_1;
const img_9_2 = document.querySelector("#img-9-2");
img_9_2.src = Links.img_9_2;

// end 

//<-------------------- Links variables-------------------------> .
