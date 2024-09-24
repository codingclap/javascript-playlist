function addTwoNumber(num_1, num_2){
      return num_1 + num_2;
}

let sumof = addTwoNumber(2,4);                // Calling a function
//console.log(sumof);



//--------------------------------------------------------------------------------


function userLoginCheck(userInput){

    if(!userInput){                             // Check whether the para not passing
        return 'Please enter your name';  
    }
    return `${userInput} is LoggedIn Successfully`

}


//console.log(userLoginCheck())                   // undefined is LoggedIn Successfully

//console.log(userLoginCheck('Anuj kumar'))        // Anuj kumar is LoggedIn Successfully


//----------------------- Passing Multiple Parameter ---------------------------------

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