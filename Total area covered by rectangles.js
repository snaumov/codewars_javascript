function calculate1(arrayOfRect) {
    // var outterMostLeft = Infinity;
    // var outterMostBottom = Infinity;
    // var outterMostRight = 0;
    // var outterMostTop = 0;

    // var resultingArea = 0;

    var occupiedSquares = new Set();

    for (array of arrayOfRect) {
        // if(array[0] < outterMostLeft) {
        //     outterMostLeft = array[0];
        // }

        // if(array[1] < outterMostBottom) {
        //     outterMostBottom = array[0];
        // }

        // if(array[2] > outterMostRight) {
        //     outterMostRight = array[2];
        // }

        // if(array[3] > outterMostTop) {
        //     outterMostTop = array[3]
        // }
        for(var y = array[1]; y < array[3]; y++){
            
            for(var x = array[0]; x < array[2]; x++) {
                occupiedSquares.add([x, y, x + 1, y + 1].toString())
            }
        }
    }

    // for (var y = outterMostBottom; y < outterMostTop; y++){
    //     for (var x = outterMostLeft; x < outterMostRight; x++) {
    //         if (!occupiedSquares.has([x, y, x + 1, y + 1].toString())){
    //             resultingArea += 1;
    //         }
    //     }
    // }
    
    return arrayOfRect.length === 0 ? 0 : occupiedSquares.size;
    //(outterMostRight - outterMostLeft) * (outterMostTop - outterMostBottom) - resultingArea;
}

function calculate(arrayOfRect) {
    

    var sortedArrOfRect = arrayOfRect.sort();

    var currentX = sortedArrOfRect[0][0];

    var currentRects = [];

    var resultingSquare = 0;

    while(sortedArrOfRect) {
        var nextX = (() => {
            for (arr of sortedArrOfRect) {
                currentRects.push(arr);
                if (arr[0] > currentX && arr[0] < currentRects[0][2]) {
                    sortedArrOfRect.shift();
                    return currentRects[0][2];
                } else if (arr[0] > currentX) {
                    return arr[0];
                }
            }
        })();

        while(currentRects) {
            var currentY = currentRects[0][1];

            var nextY = (() => {
                for(arr of currentRects) {
                    if (arr[1] > currentY && arr[1] < currentRects[0][3]) {
                        return arr[1];
                    } else if (arr[1] > currentY) {
                        currentRects.shift();
                        return currentRects[0][3];
                    }
                }
            })();

            resultingSquare += (nextX - currentX) * (nextY - currentY);
        }
    }
    
    return resultingSquare;
}


console.log(calculate([[ 1, 3, 4, 5 ],
  [ 2, 1, 4, 7 ],
  [ 3, 4, 5, 6 ],
  [ 6, 6, 8, 7 ],
  [ 5, 3, 8, 4 ],
  [ 6, 0, 7, 3 ]]));