//++++++++++++++++++ Loop  ++++++++++++++++++++++++

//(1) For Loop
let hero = ['flash', 'anuj', 'batman', 'superman'];

for (let i = 0; i <= hero.length; i++) {

    if (hero[i] == 'anuj') {
        //console.log(`${hero[i]} is not a hero. He is a superhero`)
    }
    //console.log(i)
}

//++++++++++++++++++++++ Break and Continue +++++++++++++++++++++++++

//(1) Break
for (let i = 0; i <= 10; i++) {

    if (i == 5) {
        //console.log(`No ${i} is found! Now you can exit`)
        break;
    }
    //console.log(`Value =  ${i}`)
}


//(2) Continue
for (let j = 0; j <= 10; j++) {

    if (j == 5) {
        //console.log(`No ${j} is found! Now you can continue`)
        continue;
    }

    //console.log(`Value =  ${j}`)
}

//++++++++++++++++++++++ While and Do-While +++++++++++++++++++++++++

//(1) While

let bee = ['honey', 'singh', 'mangoli', 'pushpa']

let p = 0
while (p <= 3) {
    // console.log(`The Bee name is ${bee[p]}`);
    p = p + 1;
}



//(2) Do-While

let dogBread = ['bull dog', 'pushta', 'Juely', 'german Shepherd']

let d = 4
do {
    //console.log(`The Dog Bread no ${d} ${dogBread[d]}`);
    d++;
} while (d <= 3);




//++++++++++++++++++++++++   For (of) - loop ++++++++++++++++

//(1) For [of] Loop  - Return the Values

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


//++++++++++++++++++++++++   For (in) - loop +++++++++++++++++++++

//(2) For [in] Loop  - Return the index

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


//++++++++++++++++++++++++   ForEach - loop  +++++++++++++++++++++

const breads = ['lime','Super', 'kuldtyes', 'nobos']

//(1)  -  Throught [Simple Function]
breads.forEach( function(record){
    //console.log(`Throught simple Function:- ${record}`)
})


//(2)  -  Throught [Array Function]

breads.forEach( (data) =>{
    //console.log(`Throught Array Function:- ${data}`)
})


//(3)  -  Throught [Function Passing]

breads.forEach(breadFind)

function breadFind(item,index,array){
    console.log(`Value of index-${index} is (${item}) and Original Array = ${array}`)
}