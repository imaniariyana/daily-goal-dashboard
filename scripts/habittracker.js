const habitForm = document.querySelector("#habit-form");
const habitEmojiInput = document.querySelector("#habit-emoji");
const habitNameInput = document.querySelector("#habit-name");
const habitList = document.querySelector("#habit-list");

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let habits = [];

function renderHabits() {
  habitList.innerHTML = "";

  habits.forEach((habit) => {
    const row = document.createElement("div");
    row.classList.add("habit-row");

    const title = document.createElement("p");
    title.textContent = `${habit.emoji} ${habit.name}`;
    row.append(title);

    days.forEach((day) => {
      const button = document.createElement("button");
      button.type = "button";
      button.classList.add("habit-day");

      if (habit.days[day]) {
        button.classList.add("habit-day_active");
        button.textContent = "✓";
      }

      button.addEventListener("click", () => {
        habit.days[day] = !habit.days[day];
        renderHabits();
      });

      row.append(button);
    });

    habitList.append(row);
  });
}

habitForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newHabit = {
    id: Date.now(),
    emoji: habitEmojiInput.value || "✨",
    name: habitNameInput.value,
    days: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    },
  };

  habits.push(newHabit);
  habitForm.reset();
  renderHabits();
});

export function initHabitTracker() {
  console.log("habit tracker working");
}