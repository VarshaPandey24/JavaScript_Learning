// object de-structure

const course ={
    name:"javascript",
    price:999,
    courseUser:"123"
}

console.log(course.courseUser)
//writing long code several time can be hectic
// so extract that particular element of the object and 
//directly use the name of the element inspite of the name of the object

const {courseUser} =course
const {name:a} =course //you can create Aliases

console.log(a)
//in braces put which value to extract and right side the source object

//now directly access the courseuser
console.log(courseUser);



//JSON
//all data from backend is now written in format of JSON
//it is an object without name

//  {
//  " a":"1",
//  "b":"2",
//  "c":'3"
//  }

[
    {},
    {},
    {}
]

//APIs
//randomUserMe
//JSON FORMATTOR