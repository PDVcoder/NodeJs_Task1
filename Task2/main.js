const index = require('./node_modules/math/index')

var s = index.sum(1, 2);

var arr = [2, 5, 1, 2, 5, 2, 4];
var m = index.min(arr);

var a = index.abs(-5);

console.log(`sum(1, 2) = ${m}`);
console.log(`min([2, 5, 1, 2, 5, 2, 4]) = ${s}`);
console.log(`abs(-1) = ${a}`);