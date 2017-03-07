function sum(a) {

  var sum = a

  function f(b) {
    sum += b
    return f
  }

  f.toString = function() { return sum }

  return f
}

function add(num) {
    var sum = num;

    function f(b) {
        sum += b;
        return f;
    }

    f.toString = function() { return sum }
    
    return f;
}

alert(add(2)(5));