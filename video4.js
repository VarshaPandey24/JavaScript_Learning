 // const is type of data which can never be changed further
const YourName ='abc'

//var is used to create variable names but prefer not to use this as 
// with var there are some issues with functional and block scope

var study ='asdff';

//let is also used for variable, prefer to use let instead of var

let email ='abc@gmail.com';

//printing the values 
console.log(email);
console.log(YourName);

//if you want to print all variables together in the form of table
//always remember to pass elements as an array with square brackets in table
console.table([YourName,email,study]);