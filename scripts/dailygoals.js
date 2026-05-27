const goalForm = document.querySelector(".goal-form");
const goalInput = document.getElementById("goal-input");
const goalList = document.querySelector(".goal-list");
const progress = document.querySelector(".progress");

function updateProgress() {
  const totalGoals = goalList.children.length;
  const completedGoals = goalList.querySelectorAll(
    ".goal-checkbox:checked",
  ).length;
  progress.textContent = `${completedGoals}/${totalGoals} completed`;
}

goalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const goalText = goalInput.value.trim();

  if (!goalText) {
    return;
  }

  const li = document.createElement("li");
  li.classList.add("goal-item");

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

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateProgress();
  });

  const checkbox = li.querySelector(".goal-checkbox");
  checkbox.addEventListener("change", () => {
    updateProgress();
  });

  goalList.appendChild(li);
  updateProgress();
  goalForm.reset();
});

export function initDailyTracker() {
  console.log("daily tracker working");
}
