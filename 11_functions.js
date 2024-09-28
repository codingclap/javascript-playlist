//-------------------------- Function Types ----------------------------------------------

//1) Function Declaration  || 2) Function Expression  ||  3) Constructor



//------------------ 1) Function Declaration --------------------------------

function addTwoNumber(num_1, num_2){
      return num_1 + num_2;
}

let sumof = addTwoNumber(2,4);                // Calling a function
//console.log(sumof);

//------------------ 2) Function Expression --------------------------------

const getRatius = function(width, height){
 return `Radius is = ${width * height}`;
} 
console.log(getRatius(200, 100))

//------------------ 3) Function Constructor --------------------------------

 
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// Expected output: 8




//----------------------------- Passing and check Parameter -----------------------------------------


function userLoginCheck(userInput){

    if(!userInput){                             // Check whether the para not passing
        return 'Please enter your name';  
    }
    return `${userInput} is LoggedIn Successfully`

}

//console.log(userLoginCheck())                   // undefined is LoggedIn Successfully

//console.log(userLoginCheck('Anuj kumar'))        // Anuj kumar is LoggedIn Successfully


//-----------------------(Rest Operator) Passing Multiple Parameter ---------------------------------

function calulateCartPrice(...rec){              // Handle multiple parameter using(...rec) Rest Operator

    return rec
}
console.log(calulateCartPrice(100, 200, 300))


//----------------------- Passing Object ---------------------------------

function receiveObject(objPara){
    console.log(`${objPara.name} is my name and ${objPara.age} is my age`)
}

const userData = {
    name:"anuj kumar",
    age: 34
}
receiveObject(userData);


//----------------------- Passing Array ---------------------------------

function receiveArray(objPara){
    console.log(`${objPara.name} is my name and ${objPara.age} is my age`)
}

const userRecd = {
    name:"Kuldeep kumar",
    age: 34
}
receiveArray(userRecd);


