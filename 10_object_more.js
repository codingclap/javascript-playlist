/*******************************************************************************************************************
                                                       Objects
*******************************************************************************************************************/

//let tinderUser = new Object()

let tinderUser = {}

tinderUser.name = "anuj kumar"
tinderUser.age = 23,
tinderUser.isLoggedIn = true

//console.log(tinderUser)              //Output: { name: 'anuj kumar', age: 23, isLoggedIn: true }




/*******************************************************************************************************************
                                                    Nested Object
*******************************************************************************************************************/
 
let registerUser = {
    isLoggedIn: true,
    fullName:{
        headName:"",
        firstName:"anuj kumar",
        lastName:'adhana'
    },
    age: 23
}

// Optional Chaining
//console.log(registerUser.fullName.headName ? registerUser.fullName.firstName : registerUser.fullName.lastName);




/*******************************************************************************************************************
                                                    Combine multiple Object
*******************************************************************************************************************/
 
let obj1 = {1: "A", 2: "B", 3: "C"}
let obj2 = {4: "D", 5: "E", 6: "F"}
let obj3 = {7: "G", 8: "H", 9: "I"}


let finalObj = {...obj1, ...obj2, ...obj3}   // Spread Operator
//onsole.log(finalObj)                         // {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I"}





/*******************************************************************************************************************
                                                    Array of Object
*******************************************************************************************************************/

let arrObj = [
    {
        name: "anuj kumar",
        age: 23,
        isLoggedIn: true
    },
    {
        name: "sandeep Kaushik",
        age: 43,
        isLoggedIn: true
    },
    {
        name: "Mandeep Sharma",
        age: 29,
        isLoggedIn: false
    }
]
 
//console.log(arrObj[0].name);
//console.log(Object.keys(arrObj));              // Return Keys only
// console.log(arrObj.values(arrObj));           // Return Values with iterable loop

//console.log(arrObj[0].hasOwnProperty('isLoggedIn'))   // true if found
 


/*******************************************************************************************************************
                                                    Object de-structure
*******************************************************************************************************************/
 
let studentRecord = {
    student_name :'anil mmannu',
    student_age : 22,
    student_class : '2nd grade'
}

// Longer method to access
//console.log(studentRecord.student_age);            // Access object property


  
//(De- Structure) unpack values from arrays, and objects, into distinct variables. 

let {student_name, student_age, student_class} = studentRecord;                      

console.log(`My name is a ${student_name} and i am a ${student_age} and study in a ${student_class}`);   

// (De- Structure) Sort method to access ( Sort a student_name with stu_nam )
let {student_name:stu_nam, student_age:stu_age, student_class:stu_class} = studentRecord;                      
console.log(`My name is a ${stu_nam} and i am a ${stu_age} and study in a ${stu_class}`);   


