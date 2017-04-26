const mutate = (chromosome, p) => {
    return chromosome.split('').map(bit => {
        var num = Math.random();
        if (num <= p) {
            return bit === '0' ? '1' : '0';
        } else {
            return bit;
        }
    }).join('');
};

console.log(mutate('111000', 0.4));