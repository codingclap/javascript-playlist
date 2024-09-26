 if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

//console.log(a);              // output : 10  ||  Its has global and function scope
// console.log(b);           // error: b is not defined  ||  Its has Block scope  
// console.log(c);           // error: c is not defined  ||  Its has Block scope 

//+++++++++++++++++++++++++++++   Nested Fuction Scope ++++++++++++++++++++++++++


function primary(){

    const fruit = "Apple"

    function secondary(){
        const vegitable = "Lockey" 
        console.log(fruit);            //  works... 
    }

    //console.log(vegitable);          // Error: vegitable is not defined  ( vegitable has function scope inside secondary )
    console.log(fruit);                //  works... 

    secondary()
}

primary()



//++++++++++++++++++++++++++++++   Hoisting   ++++++++++++++++++

// Function Declaration

firstPerson()                                        // Output: You called a Second Person

function firstPerson(){
  console.log('You called a First Person')
}

// firstPerson()                                      // Output: You called a Second Person



// Function Expression

//secondPerson()                                     //Cannot access 'secondPerson' before initialization

const secondPerson = function(){
    console.log('You called a Second Person')
}

secondPerson()                                         // Output: You called a Second Person