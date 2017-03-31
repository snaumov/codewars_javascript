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


function multiDimArraySort(arr1, arr2) {
    for(i = 0; i < 4; i++){
        if(arr1[i] < arr2[i]) {
            return -1;
        } 
        if(arr1[i] > arr2[i]) {
            return 1;
        }
    }
    return 0;
}

function currentRectsYSort(arr1, arr2) {
    if(arr1[1] < arr2[1]){
        return -1
    }
    if(arr1[1] > arr2[1]){
        return 1;
    }
    return 0;
}

function calculate(arrayOfRect) {
    

    var sortedArrOfRect = arrayOfRect.sort(multiDimArraySort);

    var currentX = sortedArrOfRect[0][0];

    

    var resultingSquare = 0;

    while(sortedArrOfRect.length) {
        var currentRects = [sortedArrOfRect[0]];
        var nextX = (() => {
            for (arr of sortedArrOfRect.slice(1)) {
                if (arr[0] > currentX && arr[0] < currentRects[0][2]) {
                    return arr[0];
                } else if (arr[0] > currentX) {
                    sortedArrOfRect.shift();
                    return currentRects[0][2];
                }
            }
        })();

        

        currentRects.sort(currentRectsYSort);

        while(currentRects.length) {
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
                var nextY = currentRects[0][3]
                currentRects.shift();
                return nextY;
            })();

            resultingSquare += (nextX - currentX) * (nextY - currentY);
        }
        
        currentX = nextX;
    }
    
    return resultingSquare;
}


console.log(calculate([[3,3,8,5], [6,3,8,9], [11,6,14,12]]));