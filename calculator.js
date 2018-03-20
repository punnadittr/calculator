const operatorRegEx = /[\/\*\+\-]/
const display = document.querySelector('.display-text')
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

window.addEventListener('keydown', function(e) {
  if (e.key <= 9 && e.key >= 0 && e.key != ' ') {
    appendValue(e.key);
  }
  else if (operatorRegEx.test(e.key)) {
    appendOperator(e.key);
  }
  else if (e.key == "Backspace") {back();}
  else if (e.key == '.') {addDot();}
  else if (e.key == 'Escape') {clearDisplay();}
  else if (e.key == 'Enter') {operate();}
  else {
    return;
  }
});
for (let l = 0; l < operatorButtons.length; l++) {
  operatorButtons[l].addEventListener('click', function(e) {
    appendOperator(e.target.innerText);
  })
};
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(e) {
  appendValue(e.target.innerText);
});
}
backButton.addEventListener('click', back);
equalButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearDisplay);
dotButton.addEventListener('click', addDot);

function clearDisplay() {
  display.value = '';
};
function appendValue(target) {
  if (display.value.length >= 16) {
    alert("Only supports 16 digits");
    return;
  }
  else {
  display.value += target;
  operatorClicked = false;
  }
};
function appendOperator(target) {
  if (operatorClicked != true) {
  display.value += target;
  dotClicked = false;
  operatorClicked = true;
  }
  else {
    return;
  };
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
function addDot() {
  if (dotClicked == false) {
    display.value += '.';
    dotClicked = true;
  }
  else {
    return;
  }
};
