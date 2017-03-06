function add(firstNumber) {
    console.log('first_num: ', firstNumber)
    return function(secondNumber) {
        if(add(secondNumber).prototype === Function)
        return firstNumber + add(secondNumber);
    }
}

console.log(add(2)(5));