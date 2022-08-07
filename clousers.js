var add = (function () {
    var counter = 0;
    return function () {counter++; return counter}
  })();
console.log(add())
console.log(add())
console.log(add())