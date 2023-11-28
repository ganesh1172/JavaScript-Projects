const updateColorBtn = document.querySelector("#update-color");
const txtColorCode = document.querySelector("#txt-color");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

//function will return random values from 0 to e
function getRandomHexValue() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
}

//function will return random string value in 6 digit
function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }
  return hexString;
}

updateColorBtn.addEventListener("click", () => {
  const randomHexColor = "#" + getRandomHexString(6);
  document.body.style.backgroundColor = randomHexColor;
  // document.body.style.setProperty("background-color", randomHexColor);
  txtColorCode.textContent = randomHexColor;
});
