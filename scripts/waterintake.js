export function initWaterIntake() {
  const waterButtons = document.querySelectorAll(".water-btn");
  const waterCount = document.querySelector(".water-count");
  const waterProgressFill = document.querySelector(".water-progress-fill");

  let waterTotal = 0;

  waterButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      waterTotal = index + 1;

      waterButtons.forEach((btn, btnIndex) => {
        if (btnIndex < waterTotal) {
          btn.classList.add("water-btn_active");
        } else {
          btn.classList.remove("water-btn_active");
        }
      });

      waterCount.textContent = `${waterTotal}/8`;

      waterProgressFill.style.width = `${(waterTotal / 8) * 100}%`;
    });
  });
}