let decodeMorse = function(morseCode){
    //your code here
    return morseCode.split('   ').map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ').trim()

};

export default decodeMorse;

