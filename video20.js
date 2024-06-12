//function continued...........
//variable number of arguments
function cartCount(...item){
      console.log(item) //will return array
}

cartCount(1,2,3,4,5,6,7) //we can pass as much element we want

function countRest(val1,val2,...num){
        console.log(val1,val2,num)
}

countRest(1,2,30,40,20,10)

//object in function

const user ={
    name:"varsha",
    place:"india"
}
function readobj(anyobj){
    console.log(`the user is ${anyobj.name} and her place is ${anyobj.place}`);
}

readobj(user)

//we can directly pass any object inside the function call

readobj({
    name:"modi",
    place:"India"
})