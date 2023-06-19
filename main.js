const progressBar = document.querySelector(".progress-bar");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const value = document.querySelector(".value");
let count = 0;

btn.addEventListener("click", bar)

function bar() {
   const progress = setInterval(() => {
       count++;
       value.textContent = `${count}%`;
       progressBar.style.background = `conic-gradient(#880bea ${count}deg, #ededed 0%)`;
       if (count == input.value) {
           clearInterval(progress);
       }
      
   });
}


