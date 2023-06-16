let result = document.getElementById('result');
let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(num) {
    currentNumber += num;
    result.value = currentNumber;
}

function appendOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let num1 = parseFloat(previousNumber);
    let num2 = parseFloat(currentNumber);
    let resultValue;

    switch (operator) {
        case '+':
            resultValue = num1 + num2;
            break;
        case '-':
            resultValue = num1 - num2;
            break;
        case '*':
            resultValue = num1 * num2;
            break;
        case '/':
            resultValue = num1 / num2;
            break;
        default:
            return;
    }

    currentNumber = resultValue.toString();
    result.value = currentNumber;
    operator = '';
    previousNumber = '';
}

function appendDecimal() {
    if (currentNumber.indexOf('.') === -1) {
        currentNumber += '.';
        result.value = currentNumber;
    }
}

function clearResult() {
    currentNumber = '';
    result.value = '';
}

function deleteLastEntry() {
    currentNumber = currentNumber.slice(0, -1);
    result.value = currentNumber;
}
