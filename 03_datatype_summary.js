//----------------------  Primitive  -  Stack Memory --------------------------------------------
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

let name = "amit kumar"
let age = 223
let isMale = true
let wetherTemp = null

const password = Symbol('123');
const newPassword = Symbol('123');
const bigInt = 18876567852333n;

// console.log(typeof(password));                    // Return Symbol
// console.log(typeof(wetherTemp));                    // Return object
// console.log(typeof(bigInt));                          // Return Big Int DataType
// console.log(password === newPassword);                   // Return Diffrent DataType
// console.table([wetherTemp, password, newPassword]);      // Return in a Tabular Formate


//---------------------- Reference (Non-Primitive) Heap Memory -----------------------------------------

// Array, Object, Function

let newArray = ['amit', 232, 'sandeep@gmail.com']

let myObj = {
    name:'amit',
    age:23,
    gender:'male'
}

let myFunction = function(){
    console.log('My function');
}

// console.log(myObj[0])                    // Access 0 index record
// console.log(myObj.name)                  // Access Name key of object                      
// console.log(typeof myFunction);         // Return Function Object DataType
// console.log(typeof newArray);         // Return Object DataType
// console.log(typeof myObj);            // Return Object DataType

// console.log(newArray === myObj);          // Return false 
// console.log(newArray === myFunction);          // Return false 



//---------------------------  Memory Type ---------------------------------

// Stack Memory (Primitive)

let myRecord = "This is my record!"

let newRecord = myRecord;
newRecord = "This is a latest record!";


//console.log(myRecord)              // Return original records [ Because stack provide duplicated copy 
//console.log(newRecord)             // Return updated records   So that the original value not changed ]


//  Heap (Non-primitive)

let myNewObj = {
    name : 'anuj kumar',
    age : 34,
    Designation: 'Project Manager, Lead web-developer'
}


let myNewObj2 = myNewObj

myNewObj2.name = "Mr. ANuj Kumar";
myNewObj2.age = 35;

console.log(myNewObj);                     // [ In that case the Heap Memory send the original 
console.log(myNewObj2);                   //  Records to the Second Object.    
                                         //   So the original records are changed ]
 





