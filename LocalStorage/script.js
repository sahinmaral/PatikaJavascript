let increaseButton = document.getElementById("increaseButton");
let decreaseButton = document.getElementById("decreaseButton");
let counterHeader = document.getElementById("counterHeader");

let counter = null;

function setCounterHeader() {
  if (localStorage.getItem("counter") == null) counterHeader.innerHTML = 0;
  else counterHeader.innerHTML = localStorage.getItem("counter");
}

if (localStorage.getItem("counter") == null)
  counter = parseInt(counterHeader.innerHTML);
else counter = parseInt(localStorage.getItem("counter"));

increaseButton.addEventListener("click", () => {
  counter = counter + 1;
  localStorage.setItem("counter", counter);
  counterHeader.innerHTML = counter;
});

decreaseButton.addEventListener("click", () => {
  counter = counter - 1;
  localStorage.setItem("counter", counter);
  counterHeader.innerHTML = counter;
});
