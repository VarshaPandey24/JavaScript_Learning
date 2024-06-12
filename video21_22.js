//SCOPE
let a =10;
const b =20
var c =30

{
    var c =9000
    console.log("inner",c)
}
console.log(a)
console.log(b)
console.log(c)
//var fails here as the value of local scope is effecting the alue of global cope

let num =345

{
    let num =1234
    console.log(`inner num ${num}`)
}

console.log(`outer num ${num}`)

//global scope is diffrent when you run code through 
// node in your local environment
//and diffrent when you inspect code on th console 

//...............nested.......scope

function one(){
    let name ="varsha"

    function two(){
        let value ="inner"
        console.log(name) //accessing gobal scope variable
    }
   // console.log(value) //accessing local scope variable
    two()
}
one()

//++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++

//function declration types

//you can access addtwo function anywhere in the program
 function addTwo(num){
    return num+2
 }

 //you cannnot access function addThree before its declaration as variabl
 //we can access addThree function only after it declaration
addThree =function (num){
      return num+3
}

console.log(addTwo(3))
console.log(addThree(3))