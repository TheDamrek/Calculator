const ButtonContainer = document.querySelector('.ButtonContainer')
const OperationsBox = document.querySelector('.OperationsBox')

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
}

