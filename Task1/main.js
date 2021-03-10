var summ = require("./summ");
var minn = require("./min");
var abss = require("./abs");

var s = summ.sum(1, 2);

var arr = [2, 5, 1, 2, 5, 2, 4];
var m = minn.min(arr);

var a = abss.abs(-5);

console.log(`sum(1, 2) = ${m}`);
console.log(`min([2, 5, 1, 2, 5, 2, 4]) = ${s}`);
console.log(`abs(-1) = ${a}`);