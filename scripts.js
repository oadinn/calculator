const currentOperation = document.getElementById('operation')
const result = document.getElementById("result")

const OPERATORS = ['+', '-', '*', '/']

const displayResult = (expression, answer) => {
    currentOperation.textContent = expression
    result.textContent = answer
}

const calculate = (expression) => {

    // find operator
    let operator = expression.split('')
    for (let i = 0; i < operator.length; i++) {
        if (OPERATORS.includes(operator[i])) {
            operator = operator[i]
            break;
        }
    }
    
    // split expression by operator and parse as either float or int
    let [firstNum, secondNum] = expression.split(operator);

    firstNum.includes('.') ? firstNum = parseFloat(firstNum) : firstNum = parseInt(firstNum)
    secondNum.includes('.') ? secondNum = parseFloat(secondNum) : secondNum = parseInt(secondNum)

    // calculate expression depending on operator
    switch (operator) {
        case '+':
            displayResult(expression, firstNum + secondNum)
            break;
        case '-':
            displayResult(expression, firstNum - secondNum)
            break;
        case '*':
            displayResult(expression, firstNum * secondNum)
            break;
        case '/':
            displayResult(expression, firstNum / secondNum)
            break;  
    }
}

const alreadyExists = (expression) => {
    expression = expression.split('')
    for (let i = 0; i < expression.length; i++) {
        if (OPERATORS.includes(expression[i])) {
            console.log(true)
            return true
        }
    }
    return false;
}

const displayValue = value => {
    if (value === '.' && result.textContent.includes('.')) {
        return
    }
    if (OPERATORS.includes(value) && alreadyExists(result.textContent)) {
        calculate(result.textContent)
        return  
    }
    const currentText = result.textContent || ''
    result.textContent = currentText + value
}

const clearScreen = () => {
    currentOperation.textContent = ''
    result.textContent = ''
}

const deleteOne = () => {
    if (result.textContent !== '') {
        const currentText = result.textContent
        result.textContent = currentText
    }
}

// populating result screen
document.getElementById('number-1').addEventListener('click', () => displayValue(1))
document.getElementById('number-2').addEventListener('click', () => displayValue(2))
document.getElementById('number-3').addEventListener('click', () => displayValue(3))
document.getElementById('number-4').addEventListener('click', () => displayValue(4))
document.getElementById('number-5').addEventListener('click', () => displayValue(5))
document.getElementById('number-6').addEventListener('click', () => displayValue(6))
document.getElementById('number-7').addEventListener('click', () => displayValue(7))
document.getElementById('number-8').addEventListener('click', () => displayValue(8))
document.getElementById('number-9').addEventListener('click', () => displayValue(9))

document.getElementById('decimal').addEventListener('click', () => displayValue("."))
document.getElementById('plus').addEventListener('click', () => displayValue('+'))
document.getElementById('minus').addEventListener('click', () => displayValue('-'))
document.getElementById('multiply').addEventListener('click', () => displayValue('*'))
document.getElementById('divide').addEventListener('click', () => displayValue('/'))

document.getElementById('equal').addEventListener('click', () => calculate(result.textContent))


document.getElementById('clear').addEventListener('click', () => clearScreen())

