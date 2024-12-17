//modul import
import { calendar } from "./module/calender.js";
import { scrollEvent } from "./module/scrollEvent.js";
import { clickEvent } from "./module/menu.js";
import { buttonEvent } from "./module/buttonEvent.js";
import { snowFall } from "./module/snowFall.js";
import { sendGreet } from "./module/sendGreet.js";
import { Links } from "./module/Link.js";
import { textWedding } from "./module/Text-wedding.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
// Firebase Configuration

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

// section-5 (ảnh thiệp cưới - chuyện tình yêu)
const img_5_1 = document.querySelector("#img-5-1");
img_5_1.src = Links.img_5_1;
const img_5_2 = document.querySelector("#img-5-2");
img_5_2.src = Links.img_5_2;
const img_5_3 = document.querySelector("#img-5-3");
img_5_3.src = Links.img_5_3;
const img_5_4 = document.querySelector("#img-5-4");
img_5_4.src = Links.img_5_4;

// section-5



// qr nhóm chat + form đăng kí .
const img_9_1 = document.querySelector("#img-9-1");
img_9_1.src = Links.img_9_1;
const img_9_2 = document.querySelector("#img-9-2");
img_9_2.src = Links.img_9_2;

// end

//<-------------------- end Links variables -------------------------> .

//<-------------------- Texts variables -------------------------> .

// section-5 (chuyện tình yêu)
const text_5_1 = document.querySelector("#text-5-1");
text_5_1.innerHTML = textWedding.text_5_1;
const text_5_2 = document.querySelector("#text-5-2");
text_5_2.innerHTML = textWedding.text_5_2;
const text_5_3 = document.querySelector("#text-5-3");
text_5_3.innerHTML = textWedding.text_5_3;
const text_5_4 = document.querySelector("#text-5-4");
text_5_4.innerHTML = textWedding.text_5_4;
// end section-5

// <----- end -----> 


const firebaseConfig = {
  apiKey: "AIzaSyC4J4vNDDyOzL71pIt3kt-pSqVVsgGyPKo",
  authDomain: "iwedding-14b7b.firebaseapp.com",
  projectId: "iwedding-14b7b",
  storageBucket: "iwedding-14b7b.appspot.com",
  messagingSenderId: "551497067888",
  appId: "1:551497067888:web:684c654b7bd519f505f3b5",
  measurementId: "G-L93WV3ZVSZ",
};

//Xử lý realtime sổ lưu bút
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const wishList = document.querySelector(".show-comment");
const wishesRef = collection(db, "wishes"); // Tham chiếu đến collection "wishes"
const q = query(wishesRef, orderBy("timestamp", "desc")); // Truy vấn và sắp xếp theo timestamp
onSnapshot(q, (snapshot) => {
  wishList.innerHTML = "";
  snapshot.forEach((doc) => {
    const wishData = doc.data();
    wishList.innerHTML += `
      <div class="wish">
          <p><strong>${wishData.name}</strong></p>
          <p>${wishData.wish}</p>
      </div>
    `;
  });
});
