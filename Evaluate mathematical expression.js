function minusToMultiply(expr) {
    var expr = expr.filter(sym => sym != ' ');
    var bracketsStack = [];
    var positionsStack = [];
    for (var i = 0; i < expr.length; i++) {
        if(expr[i] === '-' && expr[i+1] === '('){
            positionsStack[i];
            positionsStack.push('(');
        }
        if(expr[i] === ')') {
            bracketsStack.pop();
        }
        if(!bracketsStack.length & minusIndex) {
            positionsStack.push([minusIndex, i]);
        }
    }
}

function infixToPostfix(expr) {
    var opstack = [];
    var output = [];
    var currentOperand = '';
    var extraBrackets = [];
    for(var i = 0; i < expr.length; i++) {
        if(expr[i] === ' '){
            continue;
        }
        if(!isNaN(expr[i]) | expr[i] === '.' | (('+-/*'.indexOf(opstack[opstack.length - 1]) !== -1 | !opstack.length | opstack[opstack.length - 1] === '(' ) & !currentOperand & expr[i] === '-') ){
            currentOperand += expr[i];
            if(i === expr.length - 1){
                output.push(currentOperand);
                currentOperand = '';
            }
            continue;
        } 

        //special case for -(..)
        if(expr[i] === '(' & currentOperand === '-') {
            extraBrackets.push('(');
            opstack.push('(');
            opstack.push('*');
            output.push('-1');
            currentOperand = '';
        }
        
        if(currentOperand) {
            output.push(currentOperand);
            currentOperand = '';
        }
        
        if(expr[i] === '('){
            opstack.push(expr[i]);
            continue
        } else if(expr[i] === ')'){
            var currentOperator = '';
            while (true){
                var currentOperator = opstack.pop();
                if (currentOperator === '(') {
                    if(extraBrackets.length & !opstack.includes('(')){
                        expr = expr.slice(0, i) + ')' + expr.slice(i);
                    }
                    break;
                } else {
                    output.push(currentOperator);
                }
            }

        } else if ('+-*/'.indexOf(expr[i]) !== -1){
            const currentOperator = expr[i];
            while(true & opstack.length > 0 & opstack[opstack.length - 1] !== '('){
                const currentOperatorFromOpstack = opstack[opstack.length - 1];
                if(currentOperator === '*' | currentOperator === '/'){
                    if (currentOperatorFromOpstack === '+' | currentOperatorFromOpstack === '-'){
                        break;
                    }
                }
                output.push(opstack.pop());
            }
            opstack.push(currentOperator);
        }
    }

    while(opstack.length !== 0) {
        output.push(opstack.pop());
    }

    return output;
}

const calc = function(expr) {
    const convExpr = infixToPostfix(expr);
    var stack = [];
    for(token of convExpr){
        if(!isNaN(token)){
            stack.push(Number(token));
        } else {
            switch(token){
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break;
                case '-':
                    var b = stack.pop();
                    var a = stack.pop();
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(stack.pop() * stack.pop());
                    break;
                case '/':
                    var b = stack.pop();
                    var a = stack.pop();
                    stack.push(a / b);
                    break;
            }
        }
    }
    return stack[0];
}

console.log(calc('12* 123/-(-5 + 2))'));

console.log(calc('12* 123/(-5 + 2)'))

console.log(calc('-123'))

console.log(calc('-1 -1'));

console.log(calc('2 / (2 + 3) * 4.33 - -6'))

console.log(calc('2 /2+3 * 4.75- -6'));

console.log(calc('(1 +2) * (3+4)'));

console.log(calc('(1+2)*3 - (4 - 5) * (6 + 7)'))