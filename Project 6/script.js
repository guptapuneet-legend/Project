const btn = document.getElementById(`btn`);
btn.innerText = "July 20,2023 10:00:00";

let btn_days = document.getElementById(`days`);
let btn_hours = document.getElementById(`hours`);
let btn_minutes = document.getElementById(`minutes`);
let btn_seconds = document.getElementById(`seconds`);

function displayTimer() {
  const currDate = new Date();
  const endDate = new Date(btn.innerText);
  let diff = (endDate - currDate) / 1000;
  btn_days.value = Math.floor(diff / 3600 / 24);
  btn_hours.value = Math.floor(diff / 3600) % 24;
  btn_minutes.value = Math.floor(diff / 60) % 60;
  btn_seconds.value = Math.floor(diff) % 60;
}

setInterval(() => {
  displayTimer();
}, 1000);
