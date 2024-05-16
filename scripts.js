const currentOperation = document.getElementById('operation')
const result = document.getElementById("result")

const calculate = () => {

}

const displayValue = value => {
    if (value === '.' && result.textContent.includes('.')) {
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


document.getElementById('clear').addEventListener('click', () => clearScreen())

