var prompt = require('prompt-sync')();
//
// get input from the user.
//
var a = prompt('input first number ');
var b = prompt('input second number ');
console.log(typeof a);
var c = Number(a) + Number(b);
console.log( 'hasil penjumlahan  ' + c)