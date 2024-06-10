//type conversion

let score ="33"

console.log(typeof(score))

//convert this to Number
let convertToNumber =Number(score)

console.log(typeof(convertToNumber))
console.log(convertToNumber)

let Mixx = "30abc"
 let convert = Number(Mixx)
 console.log(typeof(Mixx))
 console.log(typeof(convert))
 console.log(convert) //NaN

 let value =null;
console.log(typeof(value))
 let change =Number(value)
 console.log(typeof(change))
 console.log(change) // 0 null in number is 0

 let one ='1';
 let two = 2;
 let three =0;

 let ek = Boolean(one);
 let dod = Boolean(two)
 let teen =Boolean(three)

 console.log(ek)
 console.log(dod)
console.log(teen)
 
// "1" => true "0" => false
//  " "=> false
// "hello" =>true

let a =10
let b = -a // to create negative of the number
console.log(b)

//console.log(2+3)
//console.log(2-3)
//console.log(2*3)
//console.log(2/3)
//console.log(2%3)
//console.log(2**3)

let x ="hello"
let y =" varsha"
let z =x +y
console.log(z)
//both should be string for concatenation

console.log(1+2)
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log(1+2+"4")
console.log("1"+2+4)

console.log(+true)
console.log(+" ")

//increment operator study from mdn

let count =100
let count1 =++count
console.log(count1)
