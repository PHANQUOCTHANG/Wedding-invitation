export function snowFall() {
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
}
