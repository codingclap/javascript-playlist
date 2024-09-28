// For Loop
let hero = ['flash','anuj','batman','superman'];

for(let i=0; i<= hero.length; i++){
   
    if(hero[i] == 'anuj'){
        //console.log(`${hero[i]} is not a hero. He is a superhero`)
    }
    //console.log(i)
}

//++++++++++++++++++++++ Break and Continue +++++++++++++++++++++++++

//Break
for(let i=0; i<= 10; i++){
   
    if(i == 5){
     //console.log(`No ${i} is found! Now you can exit`)
     break;
    } 
    //console.log(`Value =  ${i}`)
}


//Continue
for(let j=0; j<= 10; j++){
    
    if(j == 5){
     //console.log(`No ${j} is found! Now you can continue`)
     continue;
    }

    //console.log(`Value =  ${j}`)
}

//++++++++++++++++++++++ While and Do-While +++++++++++++++++++++++++

//While

let bee = ['honey', 'singh', 'mangoli', 'pushpa']

let p = 0
while(p <= 3){
   // console.log(`The Bee name is ${bee[p]}`);
    p = p + 1;
}



//Do-While

let dogBread = ['bull dog', 'pushta', 'Juely', 'german Shepherd']

let d = 4
do{
    //console.log(`The Dog Bread no ${d} ${dogBread[d]}`);
    d++;
}while(d <= 3);




//++++++++++++++++++++++++   For - of, in loop ++++++++++++++++

//(1) For [of] Loop  - Return the Values

let greeting = [2, 4, 8, 12, 16, 18, 20]
for(const greet of greeting){
    //console.log(greet);                     //output: 2,4,8,12,16,18,20
}


let userName = "Anuj Kumar"
for(const user of userName){
    if(user == " "){
        continue                           // Continue Remove the empty space ( skip the current iteration)
    }
    //console.log(user);                     //output: a n u j k u m a r
}


// let fruitName = {                      // For [of] Loop not works on objects
//     'fruit' : "mango",
//     'color' : 'orange',
//     'price' : '90/Kg'
// }

// for(const fruit of fruitName){
//     console.log(fruit);
// }



//(2) For [in] Loop  - Return the index

let fruitName = {
    'fruit' : "mango",
    'color' : 'orange',
    'price' : '90/Kg'
}

for(const fruit_ind in fruitName){
    console.log(`Fruit value is ${fruitName[fruit_ind]} and located on index ${fruit_ind}`);
}


// Map Object

let animal =  new Map()

console.log(typeof animal);