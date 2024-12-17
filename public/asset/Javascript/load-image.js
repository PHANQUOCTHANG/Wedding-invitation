// Import các module Firebase cần thiết
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4J4vNDDyOzL71pIt3kt-pSqVVsgGyPKo",
  authDomain: "iwedding-14b7b.firebaseapp.com",
  projectId: "iwedding-14b7b",
  storageBucket: "iwedding-14b7b.appspot.com", // Đúng định dạng storageBucket
  messagingSenderId: "551497067888",
  appId: "1:551497067888:web:684c654b7bd519f505f3b5",
  measurementId: "G-L93WV3ZVSZ",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load dữ liệu từ Firestore
async function loadImages() {
  const colImg = document.querySelectorAll(".col");
  const slideBlock = document.querySelector(".slide-block");
  const thumbNail = document.querySelector(".Thumbnail");

  // Truy cập collection "album"
  const querySnapshot = await getDocs(collection(db, "album"));

  let col1 = ``;
  let col2 = ``;
  let count = 1;
  let slideBlockHtml = ``;
  let thumbNailHtml = ``;

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    // album-img .
    let divAlbumImg = `<div class="img">
              <img
                src=${data.url}
                alt=""
                onclick="openModal();onAutoPlay();currentSlide(${count});"
                class="hover-shadow"
              />
            </div>`;

    // Chia cột ảnh
    if (count <= 6) {
      if (count % 2 == 1) col1 += divAlbumImg;
      else col2 += divAlbumImg;
    }

    // Slide-block
    let divSlideBlock = `
      <div class="mySlides">
        <div class="thumb-img">
          <img src=${data.url} style="width: 100%" id="album-3-1" alt="" />
        </div>
        <div class="image-decs">
          <h4></h4>
        </div>
      </div>`;

    slideBlockHtml += divSlideBlock;

    // Thumbnail
    let divThumbNail = `
      <div class="column">
        <img
          class="demo"
          src=${data.url}
          onclick="offAutoPlay();currentSlide(${count});"
          alt="Nature"
          id="slide-3-1"
        />
      </div>`;
    thumbNailHtml += divThumbNail;
    count++;
  });

  // Gán nội dung vào HTML
  colImg[0].innerHTML = col1;
  colImg[1].innerHTML = col2;
  slideBlock.innerHTML = slideBlockHtml;
  thumbNail.innerHTML = thumbNailHtml;
}

// Hàm chuyển đổi link YouTube thành dạng nhúng
function convertToEmbedURL(youtubeURL) {
  const url = new URL(youtubeURL);
  const videoId = url.searchParams.get("v");
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return null;
}

const address_a = `<a href="..." target="_blank">TP.HCM</a> đến <a href="..." target="_blank">Cần Giờ</a>`;

// Load lời ngỏ từ Firestore
async function loadIntroduction() {
  const introDiv = document.getElementById("text-6-1");
  const linkYoutube = document.getElementById("link-youtube");
  const VideoIntro = document.getElementById("text");
  const eventIntro = document.getElementById("text-7");
  const busInfoIntro = document.getElementById("text-9-1");
  const guestBookIntro = document.getElementById("guestBookIntro");
  const imageIntroUrl = document.getElementById("imageIntroUrl");
  const imageIntroUrl2 = document.getElementById("imageIntroUrl2");
  const brideUrl = document.getElementById("brideUrl");
  const groomUrl = document.getElementById("groomUrl");
  const eventUrl1 = document.getElementById("eventUrl1");
  const eventUrl2 = document.getElementById("eventUrl2");
  const eventUrl3 = document.getElementById("eventUrl3");
  const eventUrl4 = document.getElementById("eventUrl4");
  const wMoneyIntro = document.querySelectorAll("#wMoneyIntro");

  const linkDefault =
    "https://firebasestorage.googleapis.com/v0/b/ktech-75019.appspot.com/o/iwedding%2F2566.jpg?alt=media&token=570084b9-43f8-494a-8e5e-87638c1134ec";

  // Lắng nghe realtime document 'introduction'
  onSnapshot(doc(db, "content", "introduction"), (docSnapshot) => {
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log(data);

      introDiv.textContent = data.text || "Chưa có lời ngỏ!";
      linkYoutube.src =
        convertToEmbedURL(data.linkYoutube) ||
        "https://www.youtube.com/embed/defaultVideoID";
      VideoIntro.textContent = data.videoIntro || "Chưa có thông tin";
      eventIntro.textContent = data.eventIntro || "Chưa có thông tin";
      busInfoIntro.innerHTML =
        data.busInfoIntro + ` ${address_a}` || "Chưa có thông tin";
      guestBookIntro.textContent = data.guestBookIntro || "Chưa có thông tin";
      imageIntroUrl.src = data.imageIntroUrl || linkDefault;
      imageIntroUrl2.src = data.imageIntroUrl2 || linkDefault;
      brideUrl.src = data.brideUrl || linkDefault;
      groomUrl.src = data.groomUrl || linkDefault;
      eventUrl1.src = data.eventUrl1 || linkDefault;
      eventUrl2.src = data.eventUrl2 || linkDefault;
      eventUrl3.src = data.eventUrl3 || linkDefault;
      eventUrl4.src = data.eventUrl4 || linkDefault;
      wMoneyIntro[0].textContent = data.wMoneyIntro || "Chưa có thông tin";
      wMoneyIntro[1].textContent = data.wMoneyIntro || "Chưa có thông tin";
    } else {
      introDiv.textContent = "Chưa có dữ liệu!";
    }
  });
}

// Gọi hàm load dữ liệu
loadImages();
loadIntroduction();
