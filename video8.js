//operator
console.log("2">1) //prefer not to use diffrent types for comparison

//null comparison
console.log(null==0)
console.log(null>0)
console.log(null>=0)

// compariosn and equality operators works diffrent
//comparison operators convert null to number form of 0
//equality do not convert null to number hence false at first line 

//AVOID SUCH CODES 
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

// === (triple equal is the strict checking method)
// it checks dataTypes as well as value 
// double handle conversion and itself convert datatypes to number 
//give result accordingly

console.log(2 === 2)
console.log("2"=== 2)
console.log("2" == 2)