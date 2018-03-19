const display = document.querySelector('.display-text')
display.value = '';
const numButtons = Array.from(document.querySelectorAll('.display-button'));
const operatorButtons = Array.from(document.querySelectorAll('.operator-button'));
const equalButton = document.querySelector('.equal-button');
const clearButton = document.querySelector('.clear');
const dotButton = document.querySelector('.dot');
const backButton = document.querySelector('.back');
let dotClicked = false;
let operatorClicked = false;
let displayDigits;
let checkValue;

for (let l = 0; l < operatorButtons.length; l++) {
  operatorButtons[l].addEventListener('click', appendOperator)
};

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', appendValue);
};
backButton.addEventListener('click', back);
equalButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearDisplay);
dotButton.addEventListener('click', addDot);

function clearDisplay() {
  display.value = '';
};
function appendValue(e) {
  if (display.value.length >= 16) {
    alert("Only supports 16 digits");
    return;
  }
  else {
  display.value += e.target.innerText;
  operatorClicked = false;
  }
};
function appendOperator(e) {
  if (operatorClicked != true) {
  display.value += e.target.innerText;
  dotClicked = false;
  operatorClicked = true;
  }
  else {return;};
};
function operate() {
  checkValue = Math.round(eval(display.value) * 10000000000) / 10000000000;
  if (checkValue.length >= 16) {
    alert("Only supports 16 digits");
    display.value = '';
  }
  else {
    display.value = checkValue;
    dotClicked = false;
  }
};
function back() {
  display.value = display.value.slice(0, -1);
  operatorClicked = false;
};
function addDot(e) {
  if (dotClicked == false) {
    display.value += e.target.innerText;
    dotClicked = true;
  }
  else {
    return;
  }
};
