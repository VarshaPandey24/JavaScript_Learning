//for each do not return any value
//fiter returns value
const mynums =[1,2,3,4,5,6,7,8,9,10];

const filterResult =mynums.filter((num)=> num>=5)

console.log(filterResult);
        
//filtering using for each

const newnums =[];
mynums.forEach((num) =>{
    if(num>=4){
          newnums.push(num)
    }
})
console.log(newnums)

//data is stored in the form of array containig objects

const book =[
    {name:"good",
        genre:"science",
        price:500
    },
    {name:"bad",
        genre:"history",
        price:200
    },
    {name:"tree",
        genre:"science",
        price:1500
    },
    {name:"apple",
        genre:"history",
        price:600
    },
    
]

const res =book.filter((bk)=>{
   return bk.price>500;
})

console.log(res);

const res1 =book.filter((bk)=>{
    return bk.genre ==="history"
})
console.log(res1);

//filter is for putting conditions


const arr =[1,2,4,5,6]

const res3 =arr.map((a)=> a>3)
console.log(res3);

// [false,false,true,true,true]
//it cannot filter it return all values
//map iterates each and every value

//chaining of maps and filters
const chain = arr.map((num)=> num*10)
                 .map((num)=>num+1)
                 .filter((num)=> num>30);
 console.log(chain);     
 
 //REDUCE METHOD
 const res6 =arr.reduce((acc,curval)=> acc+curval,0)
 console.log(res6);
