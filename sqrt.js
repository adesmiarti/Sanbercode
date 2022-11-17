var prompt = require('prompt-sync')();
var a = prompt ('input bilangan  ');
var b = Math.sqrt(Number(a))

if(Number(a) < 0 ){
    console.log("Tidak bisa input bilangan negatif");
} 
else if(Number(a)%2 ==! 0){
    console.log("Tidak bisa input bilangan ganjil");
} 
else {
    console.log(b)
}