let btn = document.getElementById(`hex`);
document.getElementById(`btn`).addEventListener(`click`, () => {
  const random = Math.floor(Math.random() * 16777215);
  const hex = "#" + random.toString(16);
  document.querySelector(`.main`).style.backgroundColor = hex;
  btn.innerHTML = hex;
  btn.style.color = hex;
  navigator.clipboard.writeText(hex);
});
