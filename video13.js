//Date
let my_date = new Date()
console.log(my_date.toString())
console.log(my_date.toDateString());
console.log(my_date.toLocaleString());
console.log(my_date.toLocaleDateString());
console.log(my_date.toTimeString());
console.log(my_date.toJSON());

console.log(typeof Date) //function

console.log(typeof my_date) //object of Date function

let birthday =new Date(2023,11,4,11,25) //months start from 0

console.log(birthday.toLocaleString())

let normAL_DAY =new Date("2023-01-23") //in string format month start from 1
console.log(normAL_DAY.toDateString())

let jan =new Date("01-01-2024")
console.log(jan.toDateString())

//TimeStamps

let schooltime =Date.now()
console.log(schooltime); //milliseconds spend from  1  jan 1970 till now

//Interview questions
//it is needed to be convert milliseconds into seconds
console.log(Math.floor(Date.now()/1000));

//to get months days date seccond hour etc.

console.log(birthday.getFullYear())
console.log(birthday.getMonth()+1)  // as month indexing starts from 0
console.log(birthday.getDate())
console.log(birthday.getTime()) //milliseconds
console.log(birthday.getDay())
console.log(birthday.getHours())
console.log(birthday.getTimezoneOffset())

console.log(birthday.toLocaleString('deafault',{weekday:"long"}))