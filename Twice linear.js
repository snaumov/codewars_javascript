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

// function insert(array, element) {
//     if(array.indexOf(element) === -1){
//         array.push(element);
//         array.sort(function(a, b) {
//             return a - b;
//         });
//         return array;
//     } else {
//         return array;
//     }

// }

function insert(element, array) {
  array.splice(locationOf(element, array) + 1, 0, element);
  return array;
}

function locationOf(element, array, start, end) {
  start = start || 0;
  end = end || array.length;
  var pivot = parseInt(start + (end - start) / 2, 10);
  if (end-start <= 1 || array[pivot] === element) return pivot;
  if (array[pivot] < element) {
    return locationOf(element, array, pivot, end);
  } else {
    return locationOf(element, array, start, pivot);
  }
}


function binaryInsert(value, array, startVal, endVal){

	var length = array.length;
	var start = typeof(startVal) != 'undefined' ? startVal : 0;
	var end = typeof(endVal) != 'undefined' ? endVal : length - 1;//!! endVal could be 0 don't use || syntax
	var m = start + Math.floor((end - start)/2);
	
	if(length == 0){
		array.push(value);
		return;
	}

	if(value > array[end]){
		array.splice(end + 1, 0, value);
		return;
	}

	if(value < array[start]){//!!
		array.splice(start, 0, value);
		return;
	}

	if(start >= end){
		return;
	}

	if(value < array[m]){
		binaryInsert(value, array, start, m - 1);
		return;
	}

	if(value > array[m]){
		binaryInsert(value, array, m + 1, end);
		return;
	}

	//we don't insert duplicates
}

function dbl_linear(n) {
    var sequence = [1];

    for(var i = 0; i < sequence.length; i++) {
        if(sequence.length >= n * 1.5) {
            return sequence[n];
        } else {
            var firstValToAdd = sequence[i] * 2 + 1;
            var secondValToAdd = sequence[i] * 3 + 1;
            binaryInsert(firstValToAdd, sequence);
            binaryInsert(secondValToAdd, sequence);
        }
    }
}

console.log(dbl_linear(100000));