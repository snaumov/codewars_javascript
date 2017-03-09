Math.round = function(number) {
    return number - parseInt(number) >= 0.5 ? parseInt(number) : parseInt(number) + 1;
}

Math.ceil = function(number) {
    return parseInt(number) + 1;
}

Math.floor = function (number) {
    return parseInt(number);
}