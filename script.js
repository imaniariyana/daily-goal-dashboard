const goalForm = document.querySelector(".goal-form");
const goalInput = document.getElementById("goal-input");
const goalList = document.querySelector(".goal-list");

goalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const goalText = goalInput.value.trim();
  const li = document.createElement("li");
  li.classList.add("goal-item");
  li.textContent = goalText;
  goalList.appendChild(li);
  goalForm.reset();

  console.log(goalText);
  console.log(li);
  console.log(goalList);
});
