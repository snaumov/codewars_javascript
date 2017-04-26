function sanitizeInput(expr) {
    var expr = expr.split('').filter(sym => sym != ' ').join('');
    var bracketsStack = [];
    var output = '';
    for (var i = 0; i < expr.length; i++) {
        if(expr[i] === '-' && expr[i+1] === '(' && (expr[i-1] === undefined | expr[i-1] === '(' | '-+*/'.indexOf(expr[i-1]) !== -1)){
            output += '(-1*'
            bracketsStack.push('{');
            continue;
        } else if(expr[i] === '(') {
            bracketsStack.push(expr[i]);
            output += '(';
            continue;
        } else if(expr[i] === ')'){
            bracketsStack.pop();
            output += ')';
            if(bracketsStack[bracketsStack.length - 1] === '{'){
                bracketsStack.pop();
                output += ')';
                continue;
            }
            continue;
        }
        output += expr[i];
    }
    return output;
}

function infixToPostfix(expr) {
    var opstack = [];
    var output = [];
    var currentOperand = '';
    var extraBrackets = [];
    var expr = sanitizeInput(expr);
    for(var i = 0; i < expr.length; i++) {
        
        if(!isNaN(expr[i]) | expr[i] === '.' | (('+-/*'.indexOf(opstack[opstack.length - 1]) !== -1 | opstack[opstack.length - 1] === '(' | i === 0 ) & !currentOperand & expr[i] === '-' & !isNaN(expr[i+1])) ){   //| !opstack.length
            currentOperand += expr[i];
            if(i === expr.length - 1){
                output.push(currentOperand);
                currentOperand = '';
            }
            continue;
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

console.log(infixToPostfix('2 / (2 + 3) - -6'));

console.log(calc('((2.33 / (2.9+3.5)*4) - -6)'));

console.log(calc('(2 + 4) - -6'));

console.log(calc('12* 123/-(-5 + 2)') === 492);

console.log(calc('12* 123/(-5 + 2)') === -492)

console.log(calc('-123') === -123)

console.log(calc('-1 -1') === -2);

console.log(calc('2 / (2 + 3) * 4.33 - -6') === 7.732)

console.log(calc('2 /2+3 * 4.75- -6') === 21.25);

console.log(calc('(1 +2) * (3+4)') === 21);

console.log(calc('(1+2)*3 - (4 - 5) * (6 + 7)') === 22)