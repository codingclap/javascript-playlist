let hero_one = ['spiderman','batman','superman']
let hero_two = ['mangoman','antman','madamweb']

// +++++++++++++  Push and concat Method ++++++++++

//hero_one.push(hero_two);                       // Push add a second array into first one
let all_hero2 = hero_one.concat(hero_two);     // Concat combine two array and return a new array

//console.log(hero_one)     
//console.log(all_hero2)   


// +++++++++++++  Spread operator ++++++++++

let all_hero3 = [...hero_one, ...hero_two];     // spread operator return new array with values of two diffrent array 
//console.log(all_hero3) 



// ++++++++++++ Flat +++++++++++++++

let india = ['people','summery',[12,33,55,],['manoj', 'sandeep', [1991, 2024, 1023]]]

let newIndaia = india.flat(2)         // Return a new array with all the nested array

//console.log(newIndaia);


//  +++++++++++++++++ isArray, from and of ++++++++++++++++++


let newPop = "anuj kumar";

//console.log(Array.isArray('newPop'));           // Check and return false if array not found
//console.log(Array.isArray(['newPop']));          // Check and return True if array found

let popString = "sandeep, deepak";       
let popArray = [1, 2, 3];
//console.log(Array.from(popString))  //Its convert string into the new array with iterable(loop)
//console.log(Array.from(popArray))  //Its convert array into the new array with iterable(loop)



let ponyTail = "sandeep, pankaj, mannu";

let newPony = Array.of(ponyTail);  // Convert string, numbers into the array
console.log(newPony[1])
 