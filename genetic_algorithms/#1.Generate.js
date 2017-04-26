const generate = length => {

    var result = '';
    var i = 0;
    while(i < length){
        result += ['0', '1'][Math.floor(Math.random() * 2)];
        i++;
    }
    return result;
};

console.log(generate(10));