// Select the form element
const habitForm = document.querySelector("#habit-form");

// Select the input where users type the habit name
const habitNameInput = document.querySelector("#habit-name");

// Select the container where habits will be displayed
const habitList = document.querySelector("#habit-list");

// Array of days that will be used to create the tracker buttons
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Array to store all habits
let habits = [];

// Function to display all habits on the page
function renderHabits() {
  // Clear the habit list before re-rendering
  habitList.innerHTML = "";

  // Loop through each habit in the habits array
  habits.forEach((habit) => {
    // Create a row for each habit
    const row = document.createElement("div");
    row.classList.add("habit-row");

    // Create the habit title
    const title = document.createElement("p");

    // Add the emoji and habit name
    title.textContent = `${habit.emoji} ${habit.name}`;

    // Add the title to the row
    row.append(title);

    // Loop through each day of the week
    days.forEach((day) => {
      // Create a button for each day
      const button = document.createElement("button");

      // Set the button type
      button.type = "button";

      // Add styling class
      button.classList.add("habit-day");

      // If the habit is completed for this day
      if (habit.days[day]) {
        // Add active styling
        button.classList.add("habit-day_active");

        // Show a checkmark
        button.textContent = "✓";
      }

      // Toggle the day completion when clicked
      button.addEventListener("click", () => {
        // Change true to false or false to true
        habit.days[day] = !habit.days[day];

        // Re-render the habits to update the UI
        renderHabits();
      });

      // Add the button to the row
      row.append(button);
    });

    // Add the completed row to the page
    habitList.append(row);
  });
}

// Listen for form submission
habitForm.addEventListener("submit", (evt) => {
  // Prevent the page from refreshing
  evt.preventDefault();

  // Create a new habit object
  const newHabit = {
    // Unique ID using current timestamp
    id: Date.now(),

    // Default emoji for every habit
    emoji: "✨",

    // Habit name from the input field
    name: habitNameInput.value,

    // Track completion for each day
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

  // Add the new habit to the habits array
  habits.push(newHabit);

  // Clear the form input
  habitForm.reset();

  // Re-render habits so the new one appears
  renderHabits();
});

// Export function for importing into other JS files
export function initHabitTracker() {
  console.log("habit tracker working");
}
