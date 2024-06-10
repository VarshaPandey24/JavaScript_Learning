//merging two arrays

let num =[1,2,3,4,5,6]
let alpha =['a','b','c']

let bigarr =num.concat(alpha)
console.log(bigarr)

//spread opeartor
let bigarr1 =[...alpha,...num]
console.log(bigarr1)

let long_array =[1,[2,3,4,5],8,[2,[6,3]]]
//creating a single array out of this array

let another_long_array =long_array.flat(Infinity)
console.log(another_long_array)

//to check whether it is array
console.log(Array.isArray(long_array))
console.log(Array.from("varsha"))

//INTERESTING ARRAY
//to print array from object

console.log(Array.from({"name": "varsha"}))
console.log(Array.of(1,2,3))

