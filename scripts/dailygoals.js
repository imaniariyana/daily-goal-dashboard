// Select the form element
const goalForm = document.querySelector(".goal-form");

// Select the input field where users type their goal
const goalInput = document.getElementById("goal-input");

// Select the list where goals will appear
const goalList = document.querySelector(".goal-list");

// Select the progress text element
const progress = document.querySelector(".progress");

// Function to update the completed goals counter
function updateProgress() {
  // Get the total number of goals
  const totalGoals = goalList.children.length;

  // Count how many checkboxes are checked
  const completedGoals = goalList.querySelectorAll(
    ".goal-checkbox:checked",
  ).length;

  // Update the progress text
  progress.textContent = `${completedGoals}/${totalGoals} completed`;
}

// Listen for form submission
goalForm.addEventListener("submit", function (evt) {
  // Prevent page refresh
  evt.preventDefault();

  // Get the input value and remove extra spaces
  const goalText = goalInput.value.trim();

  // Stop the function if the input is empty
  if (!goalText) {
    return;
  }

  // Create a new list item
  const li = document.createElement("li");

  // Add a class for styling
  li.classList.add("goal-item");

  // Create the goal structure
  li.innerHTML = `
  <div class="goal-li-content">
    <input type="checkbox" class="goal-checkbox">
    <span>${goalText}</span>
    </div>
    <div class="goal-item-btn">
      <button type="button" class="delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  // Select the delete button inside the new goal item
  const deleteBtn = li.querySelector(".delete-btn");

  // Remove the goal when delete button is clicked
  deleteBtn.addEventListener("click", () => {
    li.remove();

    // Update progress after deleting
    updateProgress();
  });

  // Select the checkbox inside the goal item
  const checkbox = li.querySelector(".goal-checkbox");

  // Update progress whenever checkbox changes
  checkbox.addEventListener("change", () => {
    updateProgress();
  });

  // Add the goal item to the list
  goalList.appendChild(li);

  // Update progress after adding a new goal
  updateProgress();

  // Clear the form input
  goalForm.reset();
});

// Export function for importing into other JS files
export function initDailyTracker() {
  console.log("daily tracker working");
}
