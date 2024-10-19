
/*******************************************************************************************************************
                                                   Function Types

                             1) Function Declaration  || 2) Function Expression  ||  3) Constructor         
*******************************************************************************************************************/




//------------------ 1) Function Declaration --------------------------------

function addTwoNumber(num_1, num_2) {
    return num_1 + num_2;
}

let sumof = addTwoNumber(2, 4);                // Calling a function
//console.log(sumof);

//------------------ 2) Function Expression --------------------------------

const getRatius = function (width, height) {
    return `Radius is = ${width * height}`;
}
console.log(getRatius(200, 100))

//------------------ 3) Function Constructor --------------------------------


const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// Expected output: 8




//----------------------------- Passing and check Parameter -----------------------------------------


function userLoginCheck(userInput) {

    if (!userInput) {                             // Check whether the para not passing
        return 'Please enter your name';
    }
    return `${userInput} is LoggedIn Successfully`

}

//console.log(userLoginCheck())                   // undefined is LoggedIn Successfully

//console.log(userLoginCheck('Anuj kumar'))        // Anuj kumar is LoggedIn Successfully


//-----------------------(Rest Operator) Passing Multiple Parameter ---------------------------------

function calulateCartPrice(...rec) {              // Handle multiple parameter using(...rec) Rest Operator

    return rec
}
console.log(calulateCartPrice(100, 200, 300))


//----------------------- Passing Object ---------------------------------

function receiveObject(objPara) {
    console.log(`${objPara.name} is my name and ${objPara.age} is my age`)
}

const userData = {
    name: "anuj kumar",
    age: 34
}
receiveObject(userData);


//----------------------- Passing Array ---------------------------------

function receiveArray(objPara) {
    console.log(`${objPara.name} is my name and ${objPara.age} is my age`)
}

const userRecd = {
    name: "Kuldeep kumar",
    age: 34
}
receiveArray(userRecd);


//----------------------- Callback Function ---------------------------------
/*
=> A callback is a function passed as an argument to another function.

(1) A callback is a function passed as an argument to another function
(2) This technique allows a function to call another function
(3) A callback function can run after another function has finished
*/


function myDisplayer(some) {
    console.log(`Callback Output : ${some}`)
}

// Using Function Expression
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result1 = myCalculator(5, 5);
myDisplayer(result1);



// Using Arrow Function 
let allCalculate = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}

let result2 = allCalculate(20, 20);
myDisplayer(result2);

//----------------------- Without Callback ---------------------
//

function myDisplay(out) {
    console.log(`Without Callback Output : ${out}`)
}

function firstFun() {
    myDisplay("Hello");
}

function secondFun() {
    myDisplay("Goodbye");
}
secondFun();
firstFun();



