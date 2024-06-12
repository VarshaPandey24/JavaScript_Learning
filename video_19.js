//function

//syntax

function Myname(){
    console.log("my name is Varsha.")
}

Myname //only name of the function gives refrence 
Myname()//putting small brackets means execution of the function

function AddTwoNumbers(num1,num2){
    console.log(num1+num2);
}

function substractTwoNum(num1,num2){
    //const result =num1-num2
    //return result
    return num1-num2
    //no line is executed after return statement
}
AddTwoNumbers(2,4)
AddTwoNumbers("2","4")
console.log(substractTwoNum(5,3))

function loginmessage(username){
    if(!username){    //(username===undefined)
        console.log('please enter username')
        return
    }

    return `${username} logged in`
}

//loginmessage(username) this will not give you output
//you need to print this function call

console.log(loginmessage()) //undefined

//when we do not pass any parameter it prints undefined

function hello(message ="hello"){
    console.log(` you said ${message}`)
}

hello()
hello("namaste")