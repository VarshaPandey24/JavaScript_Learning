//heap and stack memory

//Memory Type 

// stack gives copy of values 
//HEAP gives refrence to the original data

 // PRIMITIVE(STACK)  NON-PRIMITIVE(HEAP)

 //stack for primitive
 let school ="childrenschool"
 let college =school

 //now changing value of the college 
// and checking wheteher it will effect school or not
college ="mjp"
 console.log(school)
 console.log(college)
 //it does not effect valueof the school

 //as we know in stack memory copy of the value provided 
 // their is not any change in original value

 // HEAP
 userone ={
    name:"varsha",
    roll_no:10
 }

 usertwo =userone

 //now changing values in usertwo 
 // tocheck whether it will effect the value of the userone
 usertwo.roll_no =34
 console.log(userone.roll_no) //34
 console.log(usertwo.roll_no) //34

 //as in heap bothof them ae refering to the same value that is why 
 // there is change in  both of them