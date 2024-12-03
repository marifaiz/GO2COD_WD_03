let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    case '%':
      result = prev % curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = null;
  previousNumber = '';
  updateDisplay();
}

function clearEntry() {
  currentNumber = '';
  updateDisplay();
}

function clearAll() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('result');
  display.value = currentNumber || '0';
}
