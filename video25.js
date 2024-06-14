//*******************JAVASCRIPT EXECUTION CONTEST************

//Global Execution Contest (this)
//Functional Executional Contest
//Eval Execution Contest

//phases
//    1.Memory Creation Phase
//    2.Execution Phase


//*************Example Code to Understand Phases***************

// let val1 =10;
// let val2 =20;
// function addNum(num1,num2){
//         let total =num1+num2;
//         return total  
//               }
// let res1 =addNum(val1,val2);
// let res2 =addNum(2,3);

//*****************Global Execution*********************
    //this

// ********************Memory Phase*********************************

//   val1 =undefined
//   val2 =undefined
//   addNum =undefined
//   res1 =undefined
//   res2 =undefined

//********************Execution Phase*******************************

//   val1 =10
//   val2 =20
//     res1 =   New Variable Environment + Execution Thread
//              Memory Phase
//                     val1 =undefined
//                     val2 =undefined
//                     total =undefined        
//             Execution Phase
//                    num1 =10
//                   num2 =20
//                   total =30
//             return to Global Executional Contest
//          DELETE NEW VARIABLE ENVIRONMENT OF res1
//
// res2 = same process of new environment creation as res1
