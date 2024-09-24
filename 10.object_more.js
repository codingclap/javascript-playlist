//let tinderUser = new Object()

let tinderUser = {}

tinderUser.name = "anuj kumar"
tinderUser.age = 23,
tinderUser.isLoggedIn = true

//console.log(tinderUser)              //Output: { name: 'anuj kumar', age: 23, isLoggedIn: true }

// +++++++++++++++ Nested Object +++++++++++++++++

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


// +++++++++++++++ Combine multiple Object +++++++++++++++++

let obj1 = {1: "A", 2: "B", 3: "C"}
let obj2 = {4: "D", 5: "E", 6: "F"}
let obj3 = {7: "G", 8: "H", 9: "I"}


let finalObj = {...obj1, ...obj2, ...obj3}   // Spread Operator
//onsole.log(finalObj)                         // {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I"}



// ++++++++++++++++++  Array of Object +++++++++++++++

let arrObj = [
    {
        name: "anuj kumar",
        age: 23,
        isLoggedIn: true
    },
    {
        name: "sandeep Kaushik",
        age: 43,
        isLoggedIn: false
    },
    {
        name: "Mandeep Sharma",
        age: 29,
        isLoggedIn: false
    }
]
 
console.log(Object.keys(arrObj));
console.log(Object.values(arrObj));
 