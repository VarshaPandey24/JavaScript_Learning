//Immediately Invoked Functions Expressions(IIFE)

//when you want to execute function during declaration 
//to save your function from global pollution

//normal way
//function chai(){
//    console.log("It is connected")
//}
//chai()
 //iife way

 (function chai(){
    //names IIFE
    console.log("connected");
 })(); //always remember to terminate the iife function (put semicolon)
 

 (() =>{
   console.log("it is an IIFE using arrow function")
 })();

 ((name) =>{
    console.log(`my name is ${name}`);
 })("varsha");
