// Open the Modal
"strict mode";

const imgDesc = [
  "Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn",
  "Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh",
  "Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu",
  "Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá",
  "Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng",
  "Đối với thế giới, bạn có thể là một người, nhưng với một người, bạn là cả thế giới",
  "Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm tay kia",
  "Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ",
  "Đối với thế giới, bạn có thể là một người, nhưng với một người, bạn là cả thế giới",
  "Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí",
  "Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu",
  "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó",
];
var checkPlay = 1;
let interval;
const modal = document.querySelector("#myModal");
const body = document.querySelector("body");
const playIcon = document.querySelector(".play_icon");
const pauseIcon = document.querySelector(".pause_icon");
const pagecount = document.querySelector("#number-page");
const WeddingGreet = document.querySelectorAll(".image-decs h4");
const WeddingGreets = document.querySelectorAll(".image-decs");
const turnOffThumbnail = document.querySelector(".turnOffThumbnail");
const zoomOut = document.querySelector(".zoom-out");
const zoomIn = document.querySelector(".zoom-in");
const imageTop = document.querySelector(".top-nav");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
var progressBar = document.getElementById("progress-bar");
var Thumbnail = document.querySelector(".Thumbnail");
var WrapThumbnail = document.querySelector(".wrap-thumbnail");
let timeout;

function hideElements() {
  // Ẩn các phần tử bạn muốn
  if (!checkPlay) {
    imageTop.style.transform = "tranlateY(-500px)";
    imageTop.style.opacity = "0";
    nextBtn.style.transform = "tranlateX(500px)";
    nextBtn.style.opacity = "0";
    prevBtn.style.transform = "tranlateX(-500px)";
    prevBtn.style.opacity = "0";
  }
}
var remindBox = document.querySelector(".remindScroll");
let timeout2;
function showRemind() {
  remindBox.classList.remove("hide");
  console.log("oce");
}
function resetTimer() {
  // Xóa bộ đếm thời gian cũ
  imageTop.style.transform = "tranlateY(0px)";
  imageTop.style.opacity = "1";
  nextBtn.style.transform = "tranlateX(0px)";
  nextBtn.style.opacity = "1";
  prevBtn.style.transform = "tranlateX(0px)";
  prevBtn.style.opacity = "1";

  clearTimeout(timeout);

  // Thiết lập bộ đếm thời gian mới
  timeout = setTimeout(hideElements, 3000); // 10 giây
}
function resetTimer1() {
  // Xóa bộ đếm thời gian cũ
  remindBox.classList.add("hide");
  clearTimeout(timeout2);
  // Thiết lập bộ đếm thời gian mới
  timeout2 = setTimeout(showRemind, 20000);
}
// Lắng nghe các sự kiện tương tác
modal.addEventListener("click", resetTimer);
modal.addEventListener("mousemove", resetTimer);
modal.addEventListener("keypress", resetTimer);
body.addEventListener("click", resetTimer1);
body.addEventListener("scroll", resetTimer1);
body.addEventListener("mousemove", resetTimer1);
body.addEventListener("keypress", resetTimer1);
// Khởi động bộ đếm thời gian khi trang được tải
resetTimer1();
resetTimer();
function changePlayStatus() {
  if (checkPlay) {
    clearInterval(interval);
    playIcon.style.display = "flex";
    pauseIcon.style.display = "none";
    checkPlay = 0;
    progressBar.classList.add("hide");
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "flex";
    checkPlay = 1;
    autoPlay();
  }
}

function offAutoPlay() {
  clearInterval(interval);
  playIcon.style.display = "flex";
  pauseIcon.style.display = "none";
  checkPlay = 0;
  progressBar.classList.add("hide");
}
function onAutoPlay() {
  checkPlay = 1;
}
function autoPlay() {
  plusSlides(0);
  interval = setInterval(() => {
    plusSlides(1);
  }, 4000);
}
function openModal() {
  document.getElementById("myModal").style.display = "block";
  addAnimateForThumb(1000);
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  clearInterval(interval);
  checkPlay = 0;
  offThumbBtn();
}
turnOffThumbnail.addEventListener("click", function () {
  if (!WrapThumbnail.classList.contains("flyFromBottom")) {
    offThumbBtn();
  } else {
    addAnimateForThumb(1000);
  }
});
function offThumbBtn() {
  WrapThumbnail.classList.add("flyFromBottom");
  WeddingGreets.forEach((Element) => {
    Element.classList.remove("clearBottom");
  });
  turnOffThumbnail.classList.remove("clearBottom");
}
function addAnimateForThumb(time) {
  setTimeout(() => {
    WrapThumbnail.classList.remove("flyFromBottom");
  }, time);
  WeddingGreets.forEach((Element) => {
    setTimeout(() => {
      Element.classList.add("clearBottom");
    }, 800);
  });
  setTimeout(() => {
    turnOffThumbnail.classList.add("clearBottom");
  }, 800);
}
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  if (checkPlay) {
    checkPlay = 0;
    changePlayStatus();
  }
  showSlides((slideIndex = n));
}
function runProgress() {
  progressBar.classList.remove("hide");
  progressBar.style.transition = "none";
  progressBar.style.width = "0";
  setTimeout(() => {
    progressBar.style.transition = "width 4s linear";
    progressBar.style.width = "100%";
  }, 10);
}
var zoomRadio = 1;

zoomIn.addEventListener("click", function () {
  const curImage = slides[slideIndex - 1].querySelector(".thumb-img img");
  if (zoomRadio < 2) {
    zoomRadio += 0.2;
    curImage.style.transform = `scale(${zoomRadio})`;
    zoomIn.style.opacity = "1";
    if (zoomRadio > 1) zoomOut.style.opacity = "1";
  } else {
    zoomOut.style.opacity = "1";
    zoomIn.style.opacity = "0.1";
  }
});
zoomOut.addEventListener("click", function () {
  const curImage = slides[slideIndex - 1].querySelector(".thumb-img img");
  if (zoomRadio > 1) {
    zoomRadio -= 0.2;
    curImage.style.transform = `scale(${zoomRadio})`;
    zoomOut.style.opacity = "1";
    if (zoomRadio < 2) zoomIn.style.opacity = "1";
  } else {
    zoomIn.style.opacity = "1";
    zoomOut.style.opacity = "0.1";
  }
});
function showSlides(n) {
  zoomRadio = 1;
  [...slides].forEach((Element) => {
    let temp = Element.querySelector(".thumb-img img");
    temp.style.transform = `scale(1)`;
  });
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  var slide_ctn = document.querySelector(".slide-block");
  if (checkPlay) runProgress();
  var i;
  if (n > slides.length) {
    slideIndex = 1;
    slide_ctn.style.transform = `translateX(0px)`;
  } else if (n < 1) {
    slideIndex = slides.length;
    slide_ctn.style.transform = `translateX(${-((slideIndex - 1) * 100)}%)`;
  } else {
    slide_ctn.style.transform = `translateX(${-((slideIndex - 1) * 100)}%)`;
  }
  pagecount.innerHTML = `${slideIndex} / ${slides.length}`;
  WeddingGreet[slideIndex - 1].innerHTML = imgDesc[slideIndex - 1];
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

  captionText.innerHTML = dots[slideIndex - 1].alt;

  const screenWidth = window.innerWidth;
  const imgLength = 100 * slides.length + 1 * (slides.length - 1);
  if (imgLength >= screenWidth) {
    if (slideIndex === slides.length) {
      Thumbnail.style.transform = `translateX(${-(imgLength - screenWidth)}px)`;
    } else if (slideIndex > 2) {
      let temp = imgLength - 100 * (slideIndex - 2);
      if (temp <= screenWidth) {
        Thumbnail.style.transform = `translateX(${-(
          imgLength - screenWidth
        )}px)`;
      } else {
        Thumbnail.style.transform = `translateX(${-100 * (slideIndex - 2)}px)`;
      }
    } else {
      Thumbnail.style.transform = `translateX(0px)`;
    }
  } else {
    Thumbnail.style.transform = `translateX(0px)`;
  }
}
