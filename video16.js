//OBJECTS

//singleton
//Object.create();
//constructor creates singleton and literal do not creates singleton

//OBJECT LITERAL 
const jsUser ={
       "name":"varsha",
   "full name":"varsha Pandey",
    " roll_no":57,
       'email':"varsha@gmail.com",
      "isWorking":false
}

//ways to access elements of the object
console.log(jsUser.name); //don't need to specify type

console.log(jsUser['name']) 
console.log(jsUser["full name"]) //we can not use dot method as their is space in full name

//overriding values
jsUser.name ="cutiepie"
console.log(jsUser["name"]);

//freezing object to block any changes in object

//Object.freeze(jsUser)

jsUser.name ="bunny"  //will remain cutiepie
console.log(jsUser["name"]);

jsUser.greetings = function(){
    console.log("good morning");
}

jsUser.greeting2 =function(){
    console.log(`hello jsuser ${this.name} with full name ${this["full name"]}`);
}

console.log(jsUser.greetings()) //function(anonymous)
console.log(jsUser.greeting2())
//now it will not show any changes to the object




//concept of symbol 

const mysmb =Symbol("key1")
console.log(typeof mysmb);

let newobj ={
   [ mysmb]:"abc"
}

console.log(typeof newobj.mysmb);
console.log(newobj[mysmb]);
//here it is giving it as string
//but we want to use it as symbol
//so put the symbol in [] brackets everywhere
//[]brackets gives real identtity of symbol 

