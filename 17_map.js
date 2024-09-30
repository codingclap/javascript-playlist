/*******************************************************************************************************************
                                                          Maps
*******************************************************************************************************************/
 

const puppy = new Map();               // It's a Object
//console.log(typeof puppy);           // It's a Object


puppy.set('DogName', 'newDog')
puppy.set('DogName', 'montiDog')
puppy.set('DogAge', 23)
puppy.set('DogColor', 'red')

console.log(puppy);      // Return a object after checking/Removing duplicate values { 'DogName' => 'montiDog','DogAge' => '23', 'DogColor' => 'red' }

//------

for(const [index, value] of puppy){                  // De-Structuring the object
    console.log(`${index} :- ${value}`)
}

//------


//XXXX----   Map Object is not iteratable thought (For - In) Loop.  ----XXXX
 
// for(const [index, value] in puppy){ }