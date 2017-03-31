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
    return arr1[0] - arr2[0] || arr1[3] - arr2[3];
}

function calculate(arrayOfRect) {
    
    if(arrayOfRect.length === 0) {
        return 0;
    }
    var sortedArrOfRect = arrayOfRect.sort(multiDimArraySort);

    var currentX = sortedArrOfRect[0][0];

    

    var resultingSquare = 0;

    while(sortedArrOfRect.length) {
        var currentRects = [sortedArrOfRect[0]];
        if(currentX < currentRects[0][0]){
            currentX = currentRects[0][0];
        }
        var nextX = (() => {
            for (arr of sortedArrOfRect.slice(1)) {
                // if(arr[0] <= currentX) {
                //     currentRects.push(arr);
                // }
                if (arr[0] > currentX && arr[0] < currentRects[0][2]) {
                    return arr[0];
                } else if (arr[0] > currentX) {
                    //sortedArrOfRect.shift();
                    return currentRects[0][2];
                } else if(arr[2] > currentX && arr[2] < sortedArrOfRect[0][2]) {
                    return arr[2];
                }
            }
            return currentRects[0][2];
        })();

        for (arr of sortedArrOfRect.slice(1)) {
            if(arr[0] >= nextX) {
                break;
            }
            currentRects.push(arr);
        }
        

        currentRects.sort(currentRectsYSort);

        var currentY = currentRects[0][1];

        while(currentRects.length) {
            if(currentY < currentRects[0][1]){
                currentY = currentRects[0][1];
            }

            var nextY = (() => {
                for(arr of currentRects.slice(1)) {
                    if (arr[1] > currentY && arr[1] < currentRects[0][3]) {
                        return arr[1];
                    } else if (arr[1] > currentY) {
                        var nextY = currentRects[0][3];
                        currentRects.shift();
                        return nextY;
                    } else if (arr[3] > currentY && arr[1] !== currentY) {
                        var index = currentRects.map(arr => arr.toString()).indexOf(arr.toString());
                        currentRects.splice(index, 1)
                        return arr[3];
                    }
                }
                var nextY = currentRects[0][3]
                currentRects.shift();
                return nextY;
            })();

            resultingSquare += (nextX - currentX) * (nextY - currentY);

            currentY = nextY;
        }
        
        currentX = nextX;

        var i = 0;
        
        for(arr of sortedArrOfRect) {
            if(arr[2] > currentX){
                break;
            }
            if(arr[2] <= currentX){
                sortedArrOfRect.splice(i, 1);
            }
            i++;
        }
        //sortedArrOfRect = sortedArrOfRect.slice(i);
    }
    
    return resultingSquare;
}


console.log(calculate([[ 1, 3, 4, 5 ],
  [ 2, 1, 4, 7 ],
  [ 3, 4, 5, 6 ],
  [ 6, 6, 8, 7 ],
  [ 5, 3, 8, 4 ],
  [ 6, 0, 7, 3 ]]));