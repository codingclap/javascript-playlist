let myArray = [1, 2, 3, 4, 5, 6]

myArray.push(7, 8)              //  Adding 7, 8 record from last index of array
myArray.pop()                    // Remove 8 record from last index of array
 
//console.log(myArray);   


let hero = ['manoj','deepak','anuj','akanasha']

hero.shift()                              // Remove First first index
hero.unshift('deepankar')                 // Adding a new records in first index

//console.log(hero);


let studentId = [11, 22, 33, 44, 55]

//console.log(studentId.includes(111))            // Return either True/ False
//console.log(studentId.indexOf(112))             // Return index value if found but return -1 if not found

//console.log(studentId);
let prince = studentId.join(' and ');             // Join() return an array of string 
                                                // Join() don't change the original copy of array
                                                 
//console.log(prince);                          // Output: 11 and 22 and 33 and 44 and 55
 

let myArr = [1, 2, 3, 4, 5, 6]

let upArr =  myArr.slice(1, 3)

console.log(`Original Array = ${myArr}`)          // Original Array = 1,2,3,4,5,6
console.log('B', upArr)                          // B [ 2, 3 ]

let upArr2 =  myArr.splice(1, 3)                 

console.log(`Original Array = ${myArr}`)          // Splice modify the Original Array = 1,5,6
console.log('C', upArr2)                          // C [ 2, 3, 4 ]


 