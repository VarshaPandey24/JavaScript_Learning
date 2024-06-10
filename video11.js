//STRING
let name ="varsha"
let roll_no= 57

//traditional way
console.log("hello my name is " +name +" and my roll_no is "+ roll_no)

//modern way
console.log(`hello my name is ${name} and my roll no is ${roll_no}`);

//another way to declare

let name2 = String("cutiepie")
console.log(name2);

console.log(name2[3]);
console.log(name2.__proto__); //prototype access

console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.charAt(3));
console.log(name2.indexOf('t'));

//printing substring and slices

// we cannot use negative index with sustring
let newString =name2.substring(0,5)
console.log(newString)

//we can use negative index in slice method
let anotherString =name2.slice(-5,7)
console.log(anotherString)

let tree ="    mango    "
console.log(tree)
console.log(tree.trim());

//read MDN

let book = "hellosirji"
console.log(book.replace("sir","madam"))
console.log(book.includes("ji"));

//using split
 let sentence ="hi everyone good you are"
console.log(sentence.split(" "))
 //output is of the form array 