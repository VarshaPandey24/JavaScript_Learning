//OBJECT PART 2

//DECLARATION USING CONSTRUCTOR

const LiUser =new Object()  //Singleton object is created
console.log(LiUser); //empty object

const fbUser ={}   //Non-Singleton
console.log(fbUser)

LiUser.id ="123"
LiUser.name ="varsha"
LiUser.isLoggedIn = true

console.log(LiUser); 

const newUser ={
    name:{
        fullname:{
            firstname:"varsha",
            lastname:"pandey"
        }
    }
}

console.log(newUser.name.fullname.firstname)

//mergiing of the objects

const obj1 ={1:"hello",2:"hi"}
const obj2 ={3:"namaste",4:"pranam"}

//const obj3 ={obj1,obj2} this will cause nesting of the objects

const obj4 ={...obj1,...obj2} //merging
console.log(obj4) 

const obj5 =Object.assign({},obj1,obj2) 
//this additional parentheses gives guarnteed result
//additional empty parameter -TARGET EMPTY OBJECT 
//other objects- ARE SOURCE FOR TARGET
console.log(obj5);

//array containing objects as elements

const objarray =[
    {
        id:"1",
        name:"varsha"
    },
    {
        id:"2",
        name:"chinti"
    },
    {
        id:"3",
        name:"cutiepie"
    },
    {
        id:"4",
        name:"kiki"
    },

]

console.log(objarray[2].name)
console.log(Object.keys(LiUser))//array containing keys
console.log(Object.values(LiUser))//array containig values
console.log(Object.entries(LiUser)) //nested array containg key value pairs
//we can further apply loops or other operations on these arrays 

//to check wheteher any key exists or not
console.log(LiUser.hasOwnProperty("name"))

