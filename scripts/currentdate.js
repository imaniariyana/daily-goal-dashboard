export function initCurrentDate() {
  const currentDate = document.getElementById("current-date");

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  currentDate.textContent = formattedDate;
}
