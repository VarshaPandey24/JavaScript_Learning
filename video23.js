//ARROW AND THIS FUNCTION

//THIS FUNCTION
//when you have to refer current contest means current locall scope or braces

let user ={
    name:"varsha",
    id:123,
    welcome: function(){
        console.log(`${this.name}, welcome here`)
        console.log(this)//showing resulting environemnt
    }
}

user.welcome()
user.name ="ravi"
user.welcome()




//*******************INTERVIEW**********
console.log(this) //node environemnt or it shows the environemnt 

//in Browsers *********Global object is Window Object

function chai(){
    name:"varsha"
    console.log(this.name)//undefined
}
chai()
//THIS works in OBJECT only 
//not in function

//Arrow function
const abc =(num) => {
    console.log("this is arrow")
    console.log("and th num is",num);
}


//IMPLICIT ARROW FUNCTION

const addTwo = (num1,num2) => num1+num2

//with parentheses put return without this in one line dput nothing
console.log(addTwo(2,3))

const obj =() => ({name:"hello"})

console.log(obj())

const home = () =>{
    console.log("this is an arrow function")
}

home()

