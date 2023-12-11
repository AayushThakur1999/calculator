let text = document.getElementById("textArea");
let calculation = "";
let operators = ['/', '*', '-', '+'];

//NUMBERS
let nums = Array.from(document.getElementsByClassName("number"));
nums.forEach(num => {
    num.addEventListener('click', () => {
        calculation += num.innerText;
        text.innerText = calculation;
    });
});

//MULTIPLICATION
let multiply = document.querySelector("#multiply");
multiply.addEventListener('click', () => {
    if(calculation !== "" && operators.every(operator => (operator !== calculation[calculation.length - 1]))){
        calculation += '*';
        text.innerText = calculation;
        console.log(calculation)
    }
});

//DIVISION
let divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    if(calculation !== "" && operators.every(operator => (operator !== calculation[calculation.length - 1]))){
        calculation += divide.innerText;
        text.innerText = calculation;
        console.log(calculation)
    }
});

//ADDITION
let plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    if(calculation !== "" && operators.every(operator => (operator !== calculation[calculation.length - 1]))){
        calculation += plus.innerText;
        text.innerText = calculation;
        console.log(calculation)
    }
});

//SUBTRACTION
let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if(calculation && operators.every(operator => (operator !== calculation[calculation.length - 1]))){
        calculation += minus.innerText;
        console.log(calculation)
    } else if (calculation && operators.some(operator => (operator === calculation[calculation.length - 1]))){
        
    } else{
        calculation = minus.innerText;
        console.log(calculation)
    }
});

//EQUALS
let equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    text.innerText = eval(calculation);
    calculation = Number(text.innerText);
});

//ALL CLEAR
let allClear = document.querySelector('#all-clear');
allClear.addEventListener('click', () => {
    if(calculation) {
        text.innerText = "";
        calculation = "";
        console.log(calculation)
    }
});