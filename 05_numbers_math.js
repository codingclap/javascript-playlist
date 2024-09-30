let score = 375;   

console.log(typeof String)                              // String is a Function [Function: String]
console.log(typeof Number);                            // Number is a Function [Function: Number]     
            
let newScore = new Number("500");                    // return value with Number Datatype and 

console.log(typeof newScore);                         // It's return a object

//console.log(newScore.toString().length);      // converted into string and can get the length of string
//console.log(newScore.toFixed('2'));            // To fixed the digit count after decemal ( Ex: 200.00)


let rent = 199.555; 
//console.log(rent.toPrecision(3))                // It round of the number after decemal (199.555  To  200)   


let price = 200000
//console.log(price.toLocaleString('en-IN'))          // It Return value according to the indan standard (2,00,000)

 
/*******************************************************************************************************************
                                                   Math - Object
*******************************************************************************************************************/
 

console.log(Math);                               // Math is a Object [Math]

// console.log(Math.abs(-22))                        // Return Positive value
// console.log(Math.round(4.5))                     // It's round the value from 4.5 To 5
// console.log(Math.ceil(4.2))                      // Return 5   
// console.log(Math.floor(4.8))                     // Return 4

//console.log(Math.min(2,4,6,9,1))                    // return Min value
//console.log(Math.max(2,4,6,9,1))                    // return Max value

//console.log(Math.random())                             // return the random value from 0 to 1 ( 0.3864647, 1.6453663)

//console.log(Math.round(Math.random()))                // Its Return exact value (0, 1) 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));        // return random number from in between 10 to 20