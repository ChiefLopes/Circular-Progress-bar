const progressBar = document.querySelector(".progress-bar");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const value = document.querySelector(".value");
let count = 0;
let colors = ["red", "#fff"];

btn.addEventListener("click", bar);

// function reset() {
//   value.textContent = "0%";
//   value.fontSize = "0px";
// }

// console.log(reset);

function bar() {
  const progress = setInterval(() => {
    count++;
    value.textContent = `${count}%`;
    progressBar.style.background = `conic-gradient(#880bea ${
      count * 3.6
    }deg, #ededed 0%)`;
    if (count == input.value) {
      clearInterval(progress);
      input.value = "";
    } else if (count > 100) {
       value.textContent = `${count}% limit ` ;
    }
  });
}


// const greet = setInterval(() => {
//   console.log("Lopes");
// }, 5000);

// setTimeout(() => {
//   clearInterval(greet)
// }, 50000);

// else if (input.value <= 0) {
//       value.textContent = "no number entered";
//       value.style.fontSize = "18px";
//       value.style.color = "red";

//       var colorChangeCount = 0;
//       var interval = setInterval(function () {
//         let currentColor = progressBar.style.background;
//         let newColor = currentColor === colors[0] ? colors[1] : colors[0];
//         progressBar.style.background = newColor;
//         colorChangeCount++;

//         if (colorChangeCount === 3) {
//           progressBar.style.background = "red";
//           clearInterval(interval);
//         }
//       }, 1000);
//     }

