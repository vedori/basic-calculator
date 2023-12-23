const textField = document.querySelector('.calc-input');
const buttonInputs = document.querySelectorAll('.number-pad button');
const computeButton = document.querySelector(".calc-compute");
const clearButton = document.querySelector(".calc-clear");

const keys = ['1', '2', '3', ' + ', 
              '4', '5', '6', ' - ',
              '7', '8', '9', ' * ',
              '0', '.', '', ' / ', 
];

// Updates the text when the page is loaded
let calculation = localStorage.getItem('calculation') || '';
textField.textContent = calculation;

// Updates the calculation when the key is clicked
// assumes buttons ordered in accordance to the keys array
for (let index = 0; index < buttonInputs.length; index++) {
  if (keys[index]) {
    buttonInputs[index].addEventListener("click", function() {
      updateCalculation(keys[index]);
    });
  }
}

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', calculation);
  textField.textContent = calculation;
  console.log(calculation);
}

function compute() {
  calculation = eval(calculation);
  localStorage.setItem('calculation', calculation);
  textField.textContent = calculation;
  console.log(calculation);
}

function clearCalculator() {
  textField.textContent = '';

  // resets calculation
  calculation = '';
  localStorage.removeItem('calculation');

  console.log('clear');
}

// Ensures compute and clear run their respective functions when clicked
computeButton.addEventListener("click", compute);
clearButton.addEventListener("click", clearCalculator);
