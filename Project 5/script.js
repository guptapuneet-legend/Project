// const arr = document.getElementsByClassName("x");
// const btn = document.getElementById(`icon`);
// btn.addEventListener(`click`, () => {
//   for (let i = 0; i < 3; i++) {
//     arr[i].classList.toggle(`hidden`);
//   }
// });

// const btn1 = document.getElementById(`icon1`);
// const arr1 = document.getElementsByClassName("x1");
// btn1.addEventListener(`click`, () => arr1[0].classList.toggle(`hidden`));

// const arr = [
//   "https://www.w3schools.com/howto/img_nature_wide.jpg",
//   "https://www.w3schools.com/howto/img_snow_wide.jpg",
//   "https://www.w3schools.com/howto/img_lights_wide.jpg",
//   "https://www.w3schools.com/howto/img_mountains_wide.jpg",
// ];
// const btn__1 = document.getElementById(`icon-1`);
// const btn__2 = document.getElementById(`icon-2`);
// const img_btn = document.getElementById(`img`);
// const btn01 = document.getElementById(`btn--1`);
// const btn02 = document.getElementById(`btn--2`);
// const btn03 = document.getElementById(`btn--3`);
// const btn04 = document.getElementById(`btn--4`);

// let currPointer = 0;
// btn__1.addEventListener(`click`, () => {
//   --currPointer;
//   if (currPointer < 0) {
//     currPointer = 3;
//   }
//   currPointer = currPointer % 4;
//   img_btn.src = arr[currPointer];
// });

// btn__2.addEventListener(`click`, () => {
//   ++currPointer;
//   currPointer = currPointer % 4;
//   console.log(currPointer);
//   img_btn.src = arr[currPointer];
// });

// btn01.addEventListener(`click`, () => {
//   img_btn.src = arr[0];
// });

// btn02.addEventListener(`click`, () => {
//   img_btn.src = arr[1];
// });

// btn03.addEventListener(`click`, () => {
//   img_btn.src = arr[2];
// });

// btn04.addEventListener(`click`, () => {
//   img_btn.src = arr[3];
// });

// let ans = "";
const inputTag = document.getElementById(`input-field`);
const btn = document.querySelectorAll(`.btn`);

for (let i = 0; i < 16; i++) {
  btn[i].addEventListener(`click`, () => {
    switch (btn[i].textContent) {
      case "=":
        inputTag.value = eval(inputTag.value);
        break;
      case "AC":
        inputTag.value = "";
        break;
      default:
        inputTag.value = `${inputTag.value}${btn[i].textContent}`;
    }
  });
}
