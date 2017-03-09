// var sequence = {0: 1, 1:3, 2: 4};

// function dbl_linear(n) {
//     if(sequence[n] !== undefined){
//         return sequence[n];
//     } else {

//     }
//     var tempSequence = [];
//     function buildSequence(child) {
//         if(sequence[child] !== undefined){
//             return sequence[child];
//         }
//     }
// }

function insert(array, element) {
    if(array.indexOf(element) === -1){
        array.push(element);
        array.sort(function(a, b) {
            return a - b;
        });
        return array;
    } else {
        return array;
    }

}

function dbl_linear(n) {
    var sequence = [1];

    for(var i = 0; i < sequence.length; i++) {
        if(sequence.length >= n + 1) {
            console.log(sequence);
            return (sequence, sequence[n]);
        } else {
            var firstValToAdd = sequence[i] * 2 + 1;
            var secondValToAdd = sequence[i] * 3 + 1;
            insert(sequence, firstValToAdd);
            insert(sequence, secondValToAdd);
        }
    }
}

console.log(dbl_linear(30));