// DOM elements
let billInput = document.querySelector(".billInput");
let peopleInput = document.querySelector(".peopleInput");
let btnsWrapper = document.querySelector(".btnsWrapper");
let customInput = document.querySelector(".customPer");
let tipMoney = document.querySelector(".tipMoney span");
let totalMoney = document.querySelector(".totalMoney span");
let resetBtn = document.querySelector(".reset");


btnsWrapper.addEventListener("click", calcBtn);
customInput.addEventListener("input", calcCustom);
resetBtn.addEventListener("click", reset)

function checkValid() {
  if (billInput.value > 0 && peopleInput.value > 0) {
    billInput.classList.remove("unvalid");
    peopleInput.classList.remove("unvalid");
    return true;
  } else {
    if (billInput.value <= 0 && peopleInput.value <= 0) {
      billInput.classList.add("unvalid");
      peopleInput.classList.add("unvalid");
    } else if (billInput.value <= 0) {
      billInput.classList.add("unvalid");
    } else if (peopleInput.value <= 0) {
      peopleInput.classList.add("unvalid");
    }
  }
}

function calcMoney(ev, per) {
  let validity = checkValid();
  if (validity) {
    let peopleNumber = Number(peopleInput.value);
    let billMoney = Number(billInput.value);
    tipMoney.textContent = ((billMoney * (per / 100)) / peopleNumber).toFixed(
      2
    );
    totalMoney.textContent = (
      (billMoney * (per / 100) + billMoney) /
      peopleNumber
    ).toFixed(2);
  }
}

function calcBtn(event) {
  if (
    event.target.tagName === "BUTTON" ||
    event.target.parentElement.tagName === "BUTTON"
  ) {
    let percentage =
      Number(event.target.textContent) ||
      Number(event.target.firstElementChild.textContent);
    calcMoney(event, percentage);
  }
}

function calcCustom() {
  if (customInput.value > 0 && customInput.value < 100) {
    // i add this event text argument as this function run when an event ocurr so using the value as first parameter will cause an issue
    calcMoney("event", Number(customInput.value));
  }
}


function reset() {
	billInput.value = "";
	peopleInput.value = "";
	tipMoney.textContent = "0.00";
	totalMoney.textContent = "0.00"
}

