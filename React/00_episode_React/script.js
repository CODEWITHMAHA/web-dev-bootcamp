
// First method: Vanilla JS
/*let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let backet1counter = document.querySelector(".counter1");
let backet2counter = document.querySelector(".counter2");

let totalApples = 10;
backet1counter.innerText = totalApples;
let basket2Apples = 0;
backet2counter.innerText = basket2Apples;

btn1.addEventListener("click", () => {
  if (totalApples > 0) {
    totalApples--;
    backet1counter.innerText = totalApples;
    basket2Apples++;
    backet2counter.innerText = basket2Apples;
  }
})

btn2.addEventListener("click", () => {
  if (totalApples < 0) {
    totalApples++;
    backet1counter.innerText = totalApples;
    basket2Apples--;
    backet2counter.innerText = basket2Apples;
  }

})*/

// second method

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let backet1counter = document.querySelector(".counter1");
let backet2counter = document.querySelector(".counter2");

const totalApples = 10;
backet1counter.innerText = totalApples;
let SecondBasketAppleCount = 0;
let FirstBasketAppleCount = totalApples - SecondBasketAppleCount;

btn1.addEventListener("click",()=>{
  if (FirstBasketAppleCount > 0) {
    FirstBasketAppleCount--;
    backet1counter.innerText = FirstBasketAppleCount;
    SecondBasketAppleCount++;
    backet2counter.innerText = SecondBasketAppleCount;
  }
})

btn2.addEventListener("click",()=>{
  if (SecondBasketAppleCount > 0) {
    FirstBasketAppleCount++;
    backet1counter.innerText = FirstBasketAppleCount;
    SecondBasketAppleCount--;
    backet2counter.innerText = SecondBasketAppleCount;
  }
})