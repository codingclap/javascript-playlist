 
/*******************************************************************************************************************
                                                    Singleton - Objects
*******************************************************************************************************************/

 const singlObj = new Object();
 console.log(`Singleton object = ${singlObj}`) 


 
/*******************************************************************************************************************
                                                    Object Literals
*******************************************************************************************************************/

const mySymb = Symbol('new post');
const userRecord = {
    name: "anuj kumar",
    age: 23,
    email: 'anuj@gsap.com',
    [mySymb]:'Best for you',
    isLoggedIn: true,
    'password':function(){
        return "ZvgE#23!Hty&8iJn58@";
    }
}

// Accessing the object
// console.log(userRecord.email);
// console.log(userRecord['password']());
// console.log(userRecord['name']);


// modify the name
userRecord['name'] = 'anuj adhana'
//Object.freeze(userRecord);
userRecord['name'] = 'sandeep kumar'

//console.log(userRecord)


// Declaration of function expression and it's not Hoisted
 
userRecord.welcomeUser = function(){
    console.log(`Hello this is ${this.name}`);
}

console.log(userRecord.welcomeUser());      // Hello this is sandeep kumar