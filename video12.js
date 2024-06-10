// numbers and maths
let score = 100
//to strictly define it of th number type
 let balance = new Number(300)
 console.log(balance);
 console.log(score);

 //methods 
 //to covert number to string
  console.log(balance.toString().length);

  console.log(balance.toFixed(2))
  //to give precise value upto n decimal places
let newnum =24.5676
console.log(newnum.toPrecision(3))
// toprecision prints number giving priority first to digits before decimal
//and prints round off value

let hundreds =10000000000
console.log(hundreds.toLocaleString('en-IN'))
//it helps to show 00 in comma seperated manner
//you can convert this setting to US or Indian system

 //**********************MATHS******************

 //bydefault library
console.log(Math); //object{}
console.log(Math.abs(-5));
console.log(Math.round(6.7));
console.log(Math.ceil(5.6)) //6
console.log(Math.floor(5.6)) //5
console.log(Math.pow(5,2))
console.log(Math.min(5,4,5,67,8))
console.log(Math.max(5,4,5,67,8))
console.log(Math.random()) //gives number b/w 0 and 1

console.log((Math.random()*10)+1) // to get values greter than 1
console.log(Math.floor((Math.random()*10)+1))// to print without decimals

//to print netween speicific range
let min =10
let max =20

console.log(Math.floor(Math.random()*(max-min+1))+min)
