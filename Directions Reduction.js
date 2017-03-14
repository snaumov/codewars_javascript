

function dirReduce(arr){
    var resultArr = arr;
    var reducedArr = [];

    function reduceArr(array) {
        array.forEach((value, index) => {
            switch(value) {
                case 'NORTH':
                    if (array[index + 1] === 'SOUTH'){
                        array[index] = ''; array[index + 1] = '';
                    }
                    break;
                case 'SOUTH':
                    if (array[index + 1] === 'NORTH'){
                        array[index] = ''; array[index + 1] = '';
                    }
                    break;
                case 'EAST':
                    if (array[index + 1] === 'WEST'){
                        array[index] = ''; array[index + 1] = '';
                    }
                    break;
                case 'WEST':
                    if (array[index + 1] === 'EAST'){
                        array[index] = ''; array[index + 1] = '';
                    }
                    break;
                case '':
                    break;
            }

        })
        return array.filter(el => el !== '');
    }

    // function reduceArr(array) {
    //     array.forEach((value, index) => {
    //         switch(value) {
    //             case 'NORTH':
    //                 if (array[index + 1] === 'SOUTH'){
    //                     array.splice(index, index + 2);
    //                 }
    //                 break;
    //             case 'SOUTH':
    //                 if (array[index + 1] === 'NORTH'){
    //                     array.splice(index, index + 2);
    //                 }
    //                 break;
    //             case 'EAST':
    //                 if (array[index + 1] !== 'WEST'){
    //                     array.splice(index, index + 2);
    //                 }
    //                 break;
    //             case 'WEST':
    //                 if (array[index + 1] !== 'EAST'){
    //                     array.splice(index, index + 2);
    //                 }
    //                 break;
    //         }

    //     })
    //     return array;
    // }

    while(resultArr.length !== reducedArr.length){
        console.log(reducedArr);
        resultArr = reduceArr(resultArr);
        reducedArr = reduceArr(resultArr);
    }

    
    return resultArr;

}

console.log(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));