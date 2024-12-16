export const calendar = document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentMonth = 1;
  const currentYear = 2025;
  const currentDay = 19;
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
  document.getElementById("month").textContent = monthNames[currentMonth - 1];
  document.getElementById("year").textContent = currentYear;

  function generateCalendar(month, year) {
    const calendarBody = document.getElementById("inner-calendar-body");
    calendarBody.innerHTML = "";

    // Set the target date to January 19, 2025
    const targetDate = new Date(2025, 0, 19); // January is month 0
    const currentDay = targetDate.getDate();
    const today = targetDate; // Set today to the target date

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      // Maximum of 6 rows
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < (firstDay === 0 ? 6 : firstDay - 1)) {
          cell.textContent = ""; // Empty cell before the first day of the month
        } else if (date > daysInMonth) {
          cell.textContent = ""; // Empty cells after the last day of the month
        } else {
          if (
            date === currentDay &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            const hov = document.createElement("div");
            hov.classList.add("selected"); // Highlight the current day
            hov.textContent = date;
            cell.appendChild(hov);
          } else {
            cell.textContent = date; // Fill in the day number
          }
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);

      if (date > daysInMonth) break; // Stop if we exceed the number of days in the month
    }
  }

  // Call the function for January 2025
  // 0 for January, 2025 for the year
  function countdown(targetDate) {
    function updateCountdown() {
      const now = new Date();
      // console.log(now);
      const diff = targetDate - now;

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
  // generateCalendar(currentMonth, currentYear);
  generateCalendar(0, 2025);

  // Gọi hàm đếm ngược (thay đổi targetDate thành ngày mong muốn)
  const targetDate = new Date("2025-01-19T11:00:00");
  countdown(targetDate);
});
