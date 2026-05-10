const goalForm = document.querySelector(".goal-form");
const goalInput = document.getElementById("goal-input");
const goalList = document.querySelector(".goal-list");

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
  });

  goalList.appendChild(li);
  goalForm.reset();
});
