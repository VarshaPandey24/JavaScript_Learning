//Arrays

//one copying arrays it creaes SHALLOW copy
//shallow copy are the copies with use same refrence points 
// any chnage in the value will reflect in the original data
//Heap memory concept 

// array declaration
const arr1 =[2,4,5,7,9,1,0]
const arr2 =[1,"varsha",true,null]
const arr3 = new Array(1,2,3,4,5) //here is small brackets

console.log(arr3.length)
console.log(arr3);
console.log(arr2[3]);

// inserting value at end of the array

arr1.push(45)
console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.unshift(134)
console.log(arr1);

arr1.shift()
console.log(arr1);

console.log(arr1.includes(7));
console.log(arr1.indexOf(9))

let arrString =arr1.join() //converted array to string 
console.log(arrString)
console.log( typeof arrString) //string

//SLICE and SPLICE
let arr4 =[0,1,2,3,4,5,6,7]
console.log(arr4)
console.log(arr4.slice(0,4));
console.log(arr4)

console.log(arr4.splice(1,4))
console.log(arr4)

//diffrence
//Slice last range is not included and main array is not affected

//Splice last range is included and main array is affected
