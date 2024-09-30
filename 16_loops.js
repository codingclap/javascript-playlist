/*******************************************************************************************************************
                                                   Loops
*******************************************************************************************************************/

/*(1)  For Loop
-------------------*/

let hero = ['flash', 'anuj', 'batman', 'superman'];

for (let i = 0; i <= hero.length; i++) {

    if (hero[i] == 'anuj') {
        //console.log(`${hero[i]} is not a hero. He is a superhero`)
    }
    //console.log(i)
}

 
/*(2)  While Loop
----------------------*/

let bee = ['honey', 'singh', 'mangoli', 'pushpa']

let p = 0
while (p <= 3) {
    // console.log(`The Bee name is ${bee[p]}`);
    p = p + 1;
}



/*(3)  Do-While Loop
------------------------*/
 

let dogBread = ['bull dog', 'pushta', 'Juely', 'german Shepherd']

let d = 4
do {
    //console.log(`The Dog Bread no ${d} ${dogBread[d]}`);
    d++;
} while (d <= 3);



//++++++++++++++++++++++ USe of ( Break and Continue ) +++++++++++++++++++++++++

//-------- Break
for (let i = 0; i <= 10; i++) {

    if (i == 5) {
        //console.log(`No ${i} is found! Now you can exit`)
        break;
    }
    //console.log(`Value =  ${i}`)
}


//-------- Continue
for (let j = 0; j <= 10; j++) {

    if (j == 5) {
        //console.log(`No ${j} is found! Now you can continue`)
        continue;
    }

    //console.log(`Value =  ${j}`)
}



/*******************************************************************************************************************
                                                   For (of) - loop 
*******************************************************************************************************************/

/*(1) For [of] Loop  - Return the Values
-------------------------------------------*/

let greeting = [2, 4, 8, 12, 16, 18, 20]
for (const greet of greeting) {
    //console.log(greet);                     //output: 2,4,8,12,16,18,20
}


let userName = "Anuj Kumar"
for (const user of userName) {
    if (user == " ") {
        continue                           // Continue Remove the empty space ( skip the current iteration)
    }
    //console.log(user);                     //output: a n u j k u m a r
}


// For [of] Loop not works on objects

// let fruitName = {                      
//     'fruit' : "mango",
//     'color' : 'orange',
//     'price' : '90/Kg'
// }

// for(const fruit of fruitName){
//     console.log(fruit);
// }

let pizza = new Map();
pizza.set('name', "mango")
pizza.set('Cream', "orange")
pizza.set('Sosage', "spicy")
 console.log(pizza)
for (const [index, val] of pizza) {                  // De-Structuring the object
    console.log(`${index}:- ${val}`)
}


/*******************************************************************************************************************
                                                   For (in) - loop 
*******************************************************************************************************************/

/*(2)   For [in] Loop  - Return the index
-------------------------------------------*/
 
let fruitName = {
    'fruit': "mango",
    'color': 'orange',
    'price': '90/Kg'
}

for (const [fruit_ind] in fruitName) {
    //console.log(`Fruit value is ${fruitName[fruit_ind]} and located on index ${fruit_ind}`);
}

//--------

let childName = "Divisha Adhana and Aaradhya Adhana"
for (const child in childName) {
    if (childName[child] == " ") {
        continue
    }
    //console.log(childName[child])
}

//--------

let pocorn = ['name', 'anuj', 'age', 'position', 'inspector']
for (const value in pocorn) {
    // console.log(`${pocorn[value]}`);
}
//--------


/*******************************************************************************************************************
                                                   ForEach - loop (Can't Return the Values)
*******************************************************************************************************************/
// forEach Never Return any values


const breads = ['lime', 'Super', 'kuldtyes', 'nobos']

/*(1) forEach Loop - Throught [Simple Function]
--------------------------------------------------------*/

breads.forEach(function (record) {
    //console.log(`Throught simple Function:- ${record}`)
})


/*(2) forEach Loop  - Throught [Arrow Function]
--------------------------------------------------------*/
 
breads.forEach((data) => {
    //console.log(`Throught Array Function:- ${data}`)
})


/*(3) forEach Loop  - Throught [Function Passing]
--------------------------------------------------------*/

breads.forEach(breadFind)

function breadFind(item, index, array) {
    //console.log(`Value of index-${index} is (${item}) and Original Array = ${array}`)
}


/*(4) forEach Loop  - Throught Array-of-Object
------------------------------------------------*/
 
const myRecords = [
    {
        EmplloyeeName: 'Anuj kumar',
        EmployeeId: 11233,
        EmployeeTitle: 'Sr. Developer'
    },
    {
        EmplloyeeName: 'Mannu kumar',
        EmployeeId: 44432,
        EmployeeTitle: 'Sr. Software Tester'
    },
]

myRecords.forEach((empVal) => {
    //console.log(`Employee of id no. ${empVal.EmployeeId} and which Name is ${empVal.EmplloyeeName}`)
})
 
//------


/*******************************************************************************************************************
                                           ForEach and Filter Mathod - Return Type
*******************************************************************************************************************/
 
/*    Foreach Can't Return
------------------------------*/

//Collect the Numbers from Cold-Drinks Array
let coldDrinks = ['coco-cola', 'pepsi', 202, 'limca', 889, 'Mirinda', 909]

let nums = []
let finalCold = coldDrinks.forEach((item) => {
    if (isNaN(item)) {
        //console.log(`Our Final Cold-Drinks are = ${item}`);      //  Works
    } else {

        //return item                                           // We Can't Return throught forEach Loop Explicitly or Implicitly

        nums.push(item);                                        // We use a array for capuring Number value from array
    }
})

//console.log(finalCold)                                  //  Output: Undefined



/*    Filter Can Return
------------------------------*/

//Collect the Numbers from Cold-Coffee Array
let coldCoffee = ['coco-cola', 'pepsi', 202, 'limca', 889, 'Mirinda', 909]

let finalCoffee = coldCoffee.filter((items) => {
    if (isNaN(items)) {
        console.log(`Our Final Cold-Coffee are = ${items}`);      //  Works
    } else {
        return items                                           // We Can't Return throught forEach Loop Explicitly or Implicitly 
    }

})

console.log(finalCoffee)                                // Output: [ 202, 889, 909 ]         