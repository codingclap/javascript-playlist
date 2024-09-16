let hero_one = ['spiderman','batman','superman']
let hero_two = ['mangoman','antman','madamweb']

// +++++++++++++  Push and concat Method ++++++++++

//hero_one.push(hero_two);                       // Push add a second array into first one
let all_hero2 = hero_one.concat(hero_two);     // Concat combine two array and return a new array

//console.log(hero_one)     
//console.log(all_hero2)   


// +++++++++++++  Spread operator ++++++++++

let all_hero3 = [...hero_one, ...hero_two];     // spread return new array with values of two array 
console.log(all_hero3) 




//Four way to convert number into a string

//toString(num)
//new String(num)
//`${num}`
//JSON.stringift(num)