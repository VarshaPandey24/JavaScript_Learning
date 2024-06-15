//for of

for (const i of [1,2,3,4]) {
    console.log(i);   
}

for (const i of "abcd") {
    console.log(i);
}

//MAP 
//similar to objects but diffrence is that
//only unique values 
//ordered values 
//for of can iterate on maps but not on object

let map =new Map()
 map.set("IN","india")
 map.set("FR","france")

 for (const i of map) {
    console.log(i);
 }

 for (const [key,value] of map) {
    console.log(key)
    console.log(value);
 }

 //object
 const myObj ={
    js :"javascript",
    cpp:"c++",
    py:"python"
 }
 for (const key in myObj) {
    console.log(`${key} has value ${myObj[key]}`);
 }

 let lang =[1,2,3,4]

 //for in indexes are returned
 for (const key in lang) {
   console.log(lang[key]);
   }

   //for Each
    
   let coding =["java","C++","ruby"]
   coding.forEach(function (i){
        console.log(i)
      }
   )
 
    //do not put name of function
   let arr =["java","C++","ruby"]
   coding.forEach((i)=>{
        console.log(i)
      }
   )

   //refrence of function

   function abc(item){
      console.log(item);
   }

   coding.forEach(abc)

   coding.forEach((item,index,array)=>{
      console.log(item,index,array)
   })

   //data from database come in form of array with objects as element

   const student =[
        {
         name:"varsha",
         roll_no:1
        },
        {
         name:"chinti",
         roll_no:2
        },
        {
         name:"swift",
         roll_no:3
        }
   ]

   student.forEach((item)=>{
                console.log(item.name,item.roll_no)
   })
  
 