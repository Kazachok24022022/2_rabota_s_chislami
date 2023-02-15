"use strict";
let n = -3;
let m = -11;
 
let min = Math.min(n, m);
let max = Math.max(n, m);
 
let x = Math.floor(min + Math.random() * (max - min))
let res = x + ((x % 2) + 1 );
 
console.log(res);