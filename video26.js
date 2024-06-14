//CONTROL_FLOW

const age =18;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you can't vote");
}

const balance =100
//implicit scope
if(balance===100) console.log("rupee nundred");

//nested

//logical
let userloggedin =true;
let debitcard =true;

if(userloggedin && debitcard){
    console.log("user logged in as well as have debit card");
}
 
let googlelogin =true;
let emaillogin =false;

if(googlelogin || emaillogin){
    console.log("user logged in ");
}

//**************SWITCH STATEMENT*************************

let month  =3;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;    

    default:
        console.log("any other month");
        break;
}

// if any string has any value thenit is true as per boolean format
// and an empty string is false

let email ="asdfghj";

if(email){
    console.log("email is provided");
}else{
    console.log("not provided");
}

let username =""

if(username){
    console.log("name is provided");
}
else{
    console.log("name is empty");
}

//************* FALSY VALUES*************

// false,0,-0,null, undefined, BigInt 0n, "",NaN

//*************TRUTHY VALUES **************************
// "0",'false'," ",' ',[],{}, function(){}

//to check empty array
 let arr =[]

 if(arr.length ===0){
    console.log("empty array");
 }

 let obj ={}

 if(Object.keys(obj).length===0){
    console.log("empty object");
 }

// Nullish Coaleasing operator (??)

let val1;
//val1 =5 ?? 10;
//val1 =null ?? 20;
//val1= undefined ?? 40;

console.log(val1)