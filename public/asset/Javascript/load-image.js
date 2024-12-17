// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4J4vNDDyOzL71pIt3kt-pSqVVsgGyPKo",
  authDomain: "iwedding-14b7b.firebaseapp.com",
  projectId: "iwedding-14b7b",
  storageBucket: "iwedding-14b7b.firebasestorage.app",
  messagingSenderId: "551497067888",
  appId: "1:551497067888:web:684c654b7bd519f505f3b5",
  measurementId: "G-L93WV3ZVSZ",
};

// Khởi tạo Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Load dữ liệu từ Firestore
async function loadImages() {
  // const wishesRef = collection(db, "wishes"); // Tham chiếu đến collection "wishes"
  // const q = query(wishesRef, orderBy("timestamp", "desc")); // Truy vấn và sắp xếp theo timestamp
  const colImg = document.querySelectorAll(".col");
  const slideBlock = document.querySelector(".slide-block");
  const thumbNail = document.querySelector(".Thumbnail");
  const querySnapshot = await db.collection("album").get();
  // xử lí ảnh hiện ở ngoài .
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
            </div>
      `;

    // xử lí 2 cột chứa ảnh phù hợp .
    // chỉ lấy tối đa 6 ảnh để hiện ra bên ngoài .
    if (count <= 6) {
      if (count % 2 == 1) col1 += divAlbumImg;
      else col2 += divAlbumImg;
    }

    // end .

    // slide-block
    let divSlideBlock = `
      <div class="mySlides">
            <div class="thumb-img">
              <img src=${data.url} style="width: 100%" id="album-3-1" alt="" />
            </div>
            <div class="image-decs">
              <h4></h4>
            </div>
          </div>
      `;

    slideBlockHtml += divSlideBlock;
    // end .

    // thumbnail - img
    let divThumbNail = `
      <div class="column">
              <img
                class="demo"
                src= ${data.url}
                onclick="offAutoPlay();currentSlide(${count});"
                alt="Nature"
                id="slide-3-1"
              />
            </div>
    `;
    thumbNailHtml += divThumbNail;
    count++;
    // end .
  });
  colImg[0].innerHTML = col1;
  colImg[1].innerHTML = col2;
  slideBlock.innerHTML = slideBlockHtml;
  thumbNail.innerHTML = thumbNailHtml;
}

// Hàm chuyển đổi link YouTube thành dạng nhúng
function convertToEmbedURL(youtubeURL) {
  const url = new URL(youtubeURL);
  const videoId = url.searchParams.get("v"); // Lấy VIDEO_ID từ tham số 'v'
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return null; // Trả về null nếu không tìm thấy ID
}

const address_a = `<a href="https://www.google.com/maps/place/450+L%C3%AA+V%C4%83n+Vi%E1%BB%87t,+T%C4%83ng+Nh%C6%A1n+Ph%C3%BA+A,+Qu%E1%BA%ADn+9,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8448016,106.7926635,17z/data=!4m15!1m8!3m7!1s0x3175273e114b735f:0x39a8ffdacc2d57b5!2zNDUwIEzDqiBWxINuIFZp4buHdCwgVMSDbmcgTmjGoW4gUGjDuiBBLCBRdeG6rW4gOSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!3b1!8m2!3d10.8448016!4d106.7952384!16s%2Fg%2F11ggw6q7sy!3m5!1s0x3175273e114b735f:0x39a8ffdacc2d57b5!8m2!3d10.8448016!4d106.7952384!16s%2Fg%2F11ggw6q7sy?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"  target="_blank">TP.HCM</a> đến <a href="https://www.google.com/maps/place/T%C3%B4m+kh%C3%B4+Thu%E1%BB%B3+Trang/@10.4655871,106.7773873,17z/data=!3m1!4b1!4m6!3m5!1s0x317539b1ba28e235:0xb145c281a345c200!8m2!3d10.4655871!4d106.7773873!16s%2Fg%2F11tsf0jtpp?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"  target="_blank"> Cần Giờ</a> `;
// Hàm load lời ngỏ từ Firestore
async function loadIntroduction() {
  const introDiv = document.getElementById("text-6-1");
  const linkYoutube = document.getElementById("link-youtube");
  const VideoIntro = document.getElementById("text");
  const eventIntro = document.getElementById("text-7");
  const busInfoIntro = document.getElementById("text-9-1");
  const guestBookIntro = document.getElementById("guestBookIntro") ; 
  const imageIntroUrl = document.getElementById ("imageIntroUrl") ;
  const imageIntroUrl2 = document.getElementById ("imageIntroUrl2") ;


  // Lắng nghe document 'introduction'
  db.collection("content")
    .doc("introduction")
    .onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        console.log(data);
        introDiv.textContent = data.text || "Chưa có lời ngỏ!";
        linkYoutube.src =
          convertToEmbedURL(data.linkYoutube) ||
          "https://www.youtube.com/watch?v=HnuY6AQmkkw&ab_channel=RINMusic";
        VideoIntro.textContent = data.videoIntro || "Chưa có thông tin";
        eventIntro.textContent = data.eventIntro || "Chưa có thông tin";
        busInfoIntro.innerHTML = data.busInfoIntro + ` ${address_a}` || "Chưa có thông tin";
        guestBookIntro.textContent = data.guestBookIntro || "Chưa có thông tin";
        imageIntroUrl.src = data.imageIntroUrl || "Chưa có thông tin";
        console.log(imageIntroUrl.src) ;
        imageIntroUrl2.src = data.imageIntroUrl2 || "Chưa có thông tin";
      } else {
        introDiv.textContent = "Chưa có dữ liệu!";
      }
    });
}

loadImages();
loadIntroduction();
