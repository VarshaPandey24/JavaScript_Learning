// data types are of two types 
// this division on the basis of 
// storage and access of data

// PRIMITIVE  (call by value)
//  7: String, Number, Boolean, Null, Undefined, Symbol, BigInt
const id = Symbol(12)
const newid =Symbol(12)

console.log(id==newid)
console.log(id===newid)

let num =1234567890n

//NON-PRIMITIVE (refrence)

//Array,OBJECTS,FUNCTIONS

// they all of type of objects


//ARRAY
let arr =[1,9,8,7,6]

//OBJECTS
let myobj = {
    name:"varsha",
    age:10,
    email:"wert"
 }

//FUNCTION 
 let func =function(){
    console.log("this is a function body")
 }

console.log(typeof arr) //object
console.log(typeof myobj) //object
console.log(typeof func)  //function







