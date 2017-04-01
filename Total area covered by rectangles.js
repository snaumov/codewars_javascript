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
    return arr1[1] - arr2[1] || arr1[3] - arr2[3];
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
                if (arr[0] > currentX && arr[0] < currentRects[0][2]) {
                    return arr[0];
                } else if (arr[0] > currentX) {
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
                        return nextY;
                    } else if (arr[3] < currentRects[0][3]) {
                        return arr[3];
                    }
                }
                var nextY = currentRects[0][3]
                return nextY;
            })();

            resultingSquare += (nextX - currentX) * (nextY - currentY);

            var tempCurrentRects = [];
            var i = 0;
            for (arr of currentRects) {
                if(arr[1] > nextY) {
                    break;
                }
                if(arr[3] > nextY) {
                    tempCurrentRects.push(arr);
                }
                i++
            }
            currentRects = tempCurrentRects.concat(currentRects.slice(i));
            
            currentY = nextY;
        }
        

        var tempSortedArrOfRect = [];
        var i = 0;
        for (arr of sortedArrOfRect) {
            if(arr[0] > nextX) {
                break;
            }
            if(arr[2] > nextX) {
                tempSortedArrOfRect.push(arr);
            }
            i++;
        }
        sortedArrOfRect = tempSortedArrOfRect.concat(sortedArrOfRect.slice(i));

        currentX = nextX;
    }
    
    return resultingSquare;
}


console.log(calculate([
[3,3,8,5], [6,3,8,9],[11,6,14,12]
]));
