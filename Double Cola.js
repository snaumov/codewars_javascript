var queue = [0, 1, 2, 3, 4]

var peopleMap = {
    0: 'Sheldon',
    1: 'Leonard',
    2: 'Penny',
    3: 'Rajesh',
    4: 'Howard'
}

function whoIsNext(n) {
    var i = 0;
    while(i < n - 1) {
        queue.push(queue[0]);
        queue.push(queue[0]);
        queue.shift();
        queue.shift();
        i++;
    }

    return peopleMap[queue[0]];
} 

console.log(whoIsNext(2));