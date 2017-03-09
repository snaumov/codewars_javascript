function plus(func) {
    return {action: 'plus', value: func};
}

function times(func) {
    return {action: 'times', value: func};
}

function minus(func){
    return {action: 'minus', value: func};
}

function dividedBy(func) {
    return {action: 'dividedBy', value: func};
}

function zero(func) {
    if(func === undefined) {
        return 0;
    }

    switch(func.action) {
        case 'plus':
            return 0 + func.value;
        case 'minus':
            return 0 - func.value;
        case 'times':
            return 0 * func.value;
        case 'dividedBy':
            return 0 / func.value;
    } 
}

function one(func) {
    if(func === undefined) {
        return 1;
    }

    switch(func.action) {
        case 'plus':
            return 1 + func.value;
        case 'minus':
            return 1 - func.value;
        case 'times':
            return 1 * func.value;
        case 'dividedBy':
            return 1 / func.value;
    } 
}

function two(func) {
    if(func === undefined) {
        return 2;
    }

    switch(func.action) {
        case 'plus':
            return 2 + func.value;
        case 'minus':
            return 2 - func.value;
        case 'times':
            return 2 * func.value;
        case 'dividedBy':
            return 2 / func.value;
    } 
}

function three(func) {
    if(func === undefined) {
        return 3;
    }

    switch(func.action) {
        case 'plus':
            return 3 + func.value;
        case 'minus':
            return 3 - func.value;
        case 'times':
            return 3 * func.value;
        case 'dividedBy':
            return 3 / func.value;
    } 
}

function four(func) {
    if(func === undefined) {
        return 4;
    }

    switch(func.action) {
        case 'plus':
            return 4 + func.value;
        case 'minus':
            return 4 - func.value;
        case 'times':
            return 4 * func.value;
        case 'dividedBy':
            return 4 / func.value;
    } 
}

function five(func) {
    if(func === undefined) {
        return 5;
    }

    switch(func.action) {
        case 'plus':
            return 5 + func.value;
        case 'minus':
            return 5 - func.value;
        case 'times':
            return 5 * func.value;
        case 'dividedBy':
            return 5 / func.value;
    } 
}

function six(func) {
    if(func === undefined) {
        return 6;
    }

    switch(func.action) {
        case 'plus':
            return 6 + func.value;
        case 'minus':
            return 6 - func.value;
        case 'times':
            return 6 * func.value;
        case 'dividedBy':
            return 6 / func.value;
    } 
}

function seven(func) {
    if(func === undefined) {
        return 7;
    }

    switch(func.action) {
        case 'plus':
            return 7 + func.value;
        case 'minus':
            return 7 - func.value;
        case 'times':
            return 7 * func.value;
        case 'dividedBy':
            return 7 / func.value;
    } 
}

function eight(func) {
    if(func === undefined) {
        return 8;
    }

    switch(func.action) {
        case 'plus':
            return 8 + func.value;
        case 'minus':
            return 8 - func.value;
        case 'times':
            return 8 * func.value;
        case 'dividedBy':
            return 8 / func.value;
    } 
}

function nine(func) {
    if(func === undefined) {
        return 9;
    }

    switch(func.action) {
        case 'plus':
            return 9 + func.value;
        case 'minus':
            return 9 - func.value;
        case 'times':
            return 9 * func.value;
        case 'dividedBy':
            return 9 / func.value;
    } 
}

console.log(one(plus(one())));
console.log(eight(minus(three())))