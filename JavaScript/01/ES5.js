
var sqrt = require('./mathES5');
console.log(sqrt(25));

// === Task 1 - 178 a ===

function nat(n) {
  var arr = [];
  var array = [];
  for (var i = 0; i < n; i++) {
    arr.push(i);
    if (i % 2 !== 0) array.push(i)
  }
  return array.length;
}

// console.log('Array length: ', nat(10));

// === Task 2 - 178 b ===

function natur(n) {
  var arr1 = [];
  var arr2 = [];
  for (var i = 0; i < n; i++) {
    if (i % 3 == 0) arr1.push(i);
    if (i % 5 != 0) arr2.push(i);
  }
  return [arr1, arr2];
}

// console.log('Arrays of 3s and n5: ', natur(50));

// === Task 3 - 178 v ===

function square(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(i * i);
    }
  }
  return { length: arr.length, array: arr };
}
// console.log(square(10))

// === Task 4 - 554 Pythagorean triple ===

function tris(n) {
  var tri = [];
  for (var i = 1; i < n; i++) {
    var current = i * i;
    var next = (i + 1) * (i + 1);
    var sub = next - current;
    if (sqrt(sub) % 1 === 0) {
      tri.push([sqrt(sub), sqrt(current), sqrt(next)]);
    }
  }
  return tri;
}
console.log('Pythagorean triples: \n', tris(100));


// About Pythagorean triple:
// http://www.athens.kiev.ua/pifagorovi-trijki/
