const ButtonContainer = document.querySelector('.buttonContainer')
const OperationsBox = document.querySelector('.OperationsBox')
const NumberScreen = document.querySelector('.BasicText')

const add = function(numbers) {
      let total = 0
   for(let i = 0; i < numbers.length; i++){
   total += numbers[i]  
}
return total 
};


const substract = function(numbers) {
       let total = numbers[0]
   for(let i = 1; i < numbers.length; i++){
   total -= numbers[i]  
}
return total
};


const multiply = function(numbers) {
   let total = numbers[0]
   for(let i = 1; i < numbers.length; i++){
   total *= numbers[i]  
}
return total
}

const divide = function(numbers) {
          let total = numbers[0]
   for(let i = 1; i < numbers.length; i++){
   total /= numbers[i]  
}
return total

}

const modulo = function(numbers) {
    let total = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        total %= numbers[i]
    }
    return total
}


let firstNumber = '';
let operator = '';
let secondNumber = '';
let lastNumber = '';

function operate(a, b) {
    if (operator === '+') {
        return a + b;
    }

    else if(operator === '-') {
        return a-b;
    }

    else if(operator === '/') {
        return a/b;
    }

    else if(operator === '*') {
        return a*b
    }

    else if(operator === '%') {
        return a%b
    }
}

const EqualButton = document.querySelector('#Equal')
const AddButton = document.querySelector('#Addition')
const MinusButton = document.querySelector('#Minus')
const DivideButton = document.querySelector('#Divide')
const MultiplyButton = document.querySelector('#Multiply')
const One = document.querySelector('#One')
const Two = document.querySelector('#Two')
const Three = document.querySelector('#Three')
const Four = document.querySelector('#Four')
const Five = document.querySelector('#Five')
const Six = document.querySelector('#Six')
const Seven = document.querySelector('#Seven')
const Eight = document.querySelector('#Eight')
const Nine = document.querySelector('#Nine')
const Zero = document.querySelector('#Zero')
const Delete = document.querySelector('#Delete')
const ModuloButton = document.querySelector('#ModuloButton')
const Point = document.querySelector('#Point')
const Reinitialize = document.querySelector('#Reinitialize')


ButtonContainer.addEventListener('click', (e => {
    if(!e.target.classList.contains('White')) return;
    const clickedNumber = e.target.textContent;

    if(operator === ''){
        firstNumber += clickedNumber;

        NumberScreen.textContent = firstNumber;
    }
    else if(operator === '=' || operator === '+' || operator === '%' || operator === '/' || operator === '-'){
        secondNumber = clickedNumber;

        NumberScreen.textContent = secondNumber
    }
}))