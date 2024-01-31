const counterAddBtn = document.getElementById("count-add");
const counterSubBtn = document.getElementById("count-sub");
const counterDisplayTxt = document.querySelector(".count");

let total = 0;
let limit = 20;

let updateCounterTxt = () => {
  if (total < 0) {
    total = 0;
  }

  if (total > 20) {
    total = limit;
  }
  counterDisplayTxt.textContent = total;
  document.body.style.setProperty(
    "background-color",
    `rgb(${(total / limit) * 255}, 15, 10)`
  );
};

counterAddBtn.addEventListener("click", function () {
  total += 1;
  updateCounterTxt();
});

counterSubBtn.addEventListener("click", function () {
  total -= 1;
  updateCounterTxt();
});

updateCounterTxt();
