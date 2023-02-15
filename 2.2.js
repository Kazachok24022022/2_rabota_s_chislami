"use strict";
const a = 13.123456789;
const b = 2.123;
const n = 5;

let n1 = Math.floor((a % 1) * 10 ** n);
let n2 = Math.floor((b % 1) * 10 ** n);
console.log("Первое число: ", n1);
console.log("Второе число: ", n2)
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 === n2);
console.log(n1 != n2);
