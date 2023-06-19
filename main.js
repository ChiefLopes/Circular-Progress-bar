const progressBar = document.querySelector(".progress-bar");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const value = document.querySelector(".value");
let count = 0;

btn.addEventListener("click", bar)

function bar() {
   const progress = setInterval(() => {
       count++;
       value.textContent = `${count}%`
       if (count == input.value) {
           clearInterval(progress);
       }
       console.log(count);
   });
}


