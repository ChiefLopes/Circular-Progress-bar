const progressBar = document.querySelector(".progress-bar");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const value = document.querySelector(".value");
let count = 0;
let colors = ["red", "#fff"];

btn.addEventListener("click", bar);

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
    } else if (input.value <= 0) {
      value.textContent = "no number entered";
      value.style.fontSize = "18px";
      value.style.color = "red";
      var interval = setInterval(function () {
        let currentColor = progressBar.style.background;
        let newColor = currentColor === colors[0] ? colors[1] : colors[0];
          progressBar.style.background = newColor;
          console.log(newColor);
      }, 10);
        
        var clearTime = 1000; // Time in milliseconds to clear the interval
        setTimeout(function () {
            clearInterval(interval);
            
            if (clearTime == 1000) {
               progressBar.style.background = 'green'
            }
        }, clearTime);
    } 
  });
}
