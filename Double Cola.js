var peopleMap = {
    1: 'Sheldon',
    2: 'Leonard',
    3: 'Penny',
    4: 'Rajesh',
    5: 'Howard'
}

function numbersInSum(n) {
    var grade = 0;
    var sum = 2 ** grade;
    while (sum < n ) {
        grade += 1;
        sum = sum + 2 ** grade;
    }

    return sum === n ? {grade: grade, amountOfElems: sum} : {grade: grade - 1, amountOfElems: sum - 2 ** grade};
}

//console.log(numbersInSum(8));


function whoIsNext(names, n) {

    var numbersInSumResult = numbersInSum(parseInt(n / names.length));
    [order, remainder] = [numbersInSumResult.grade, n - names.length * numbersInSumResult.amountOfElems ];

    [orderOfRemainder, remainderOfRemainder] = [parseInt(remainder / 2 ** (order + 1)) , remainder % 2 ** (order + 1)];

    return remainderOfRemainder === 0 ? names[orderOfRemainder - 1] : names[orderOfRemainder];
} 

console.log(whoIsNext(['Daisuke Aramaki',
 'Motoko Kusanagi',
  'Batou',
  'Togusa',
  'Ishikawa',
  'Saito',
  'Pazu',
  'Borma',
  'Azuma',
  'Yano',
  'Proto'], 71));