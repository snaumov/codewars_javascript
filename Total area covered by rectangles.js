function calculate(arrayOfRect) {
    var outterMostLeft = Infinity;
    var outterMostBottom = Infinity;
    var outterMostRight = 0;
    var outterMostTop = 0;

    var resultingArea = 0;

    var occupiedSquares = new Set();

    for (array of arrayOfRect) {
        for(var y = array[1]; y < array[3] - 1; y++){
            if (y > outterMostTop) {
                outterMostTop = y;
            }
            if (y < outterMostBottom) {
                outterMostBottom = y;
            }
            
            for(var x = array[0]; x < array[2] - 1; x++) {
                if (x > outterMostRight) {
                    outterMostRight = x;
                }
                if (x < outterMostLeft) {
                    outterMostLeft = x;
                }

                occupiedSquares.add([x, y, x + 1, y + 1].toString())
            }
        }
    }

    for (var y = outterMostBottom; y < outterMostTop; y++){
        for (var x = outterMostLeft; x < outterMostRight; x++) {
            if (!occupiedSquares.has([x, y, x + 1, y + 1].toString())){
                resultingArea += 1;
            }
        }
    }

    return resultingArea;
}