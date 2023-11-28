const btn = document.querySelector("button");
const textElement = document.querySelector("span");

btn.addEventListener("click", () => {
  let yourName = prompt("Enter your name here👇");
  textElement.textContent = yourName;
});
