export function initMoodTracker() {
  const moodButtons = document.querySelectorAll(".mood-btn");
  const moodMessage = document.querySelector(".mood-message");

  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      moodButtons.forEach((btn) => {
        btn.classList.remove("mood-btn_active");
      });

      button.classList.add("mood-btn_active");

      const mood = button.dataset.mood;

      moodMessage.textContent = `You're feeling ${mood} today`;
    });
  });
}
