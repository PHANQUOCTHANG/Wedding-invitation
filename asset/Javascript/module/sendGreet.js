export function sendGreet() {
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
}
