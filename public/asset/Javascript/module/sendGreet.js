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
export function sendGreet() {
  //greet
  const firebaseConfig = {
    apiKey: "AIzaSyC4J4vNDDyOzL71pIt3kt-pSqVVsgGyPKo",
    authDomain: "iwedding-14b7b.firebaseapp.com",
    projectId: "iwedding-14b7b",
    storageBucket: "iwedding-14b7b.appspot.com",
    messagingSenderId: "551497067888",
    appId: "1:551497067888:web:684c654b7bd519f505f3b5",
    measurementId: "G-L93WV3ZVSZ",
  };

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

  document.getElementById("greetInput").addEventListener("blur", function () {
    validateInput(
      this,
      document.getElementById("greetError"),
      "Lời chúc không được để trống!"
    );
  });

  // Xử lý khi submit
  document.getElementById("greetForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const greetInput = document.getElementById("greetInput");

    const nameError = document.getElementById("nameError");
    const greetError = document.getElementById("greetError");

    validateInput(greetInput, greetError, "Lời chúc không được để trống!");

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    // Form và danh sách lời chúc
    const wishForm = document.getElementById("greetForm");
    const wishList = document.querySelector(".show-comment");
    // Gửi lời chúc
    const name = document.getElementById("nameInput").value.trim();
    const wish = document.getElementById("greetInput").value.trim();

    if (wish) {
      try {
        // Thêm dữ liệu vào Firestore
        await addDoc(collection(db, "wishes"), {
          name: name === "" ? "Bạn thân" : name,
          wish: wish,
          timestamp: serverTimestamp(),
        });
        alert("Lời chúc đã được gửi thành công!");
        wishForm.reset();
        console.log("yeal");
        let reference = wishList.querySelector(".wish:first-child");
        let div = document.createElement("div");
        div.classList.add("wish");
        div.innerHTML = `
            <p><strong>${name === "" ? "Bạn thân" : name}</strong>:</p>
            <p>${wish.value}</p>
          
            `;
        wishList.insertBefore(div, reference);
      } catch (error) {
        console.error("Lỗi khi gửi lời chúc:", error);
        alert("Có lỗi xảy ra khi gửi lời chúc!");
      }
    }

    // Lấy và hiển thị lời chúc theo thời gian thực
  });
}
