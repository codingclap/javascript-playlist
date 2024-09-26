//++++++++++++++++++++++  This Keyword +++++++++++++++++++++
// This keyword return the current context of the current environment  
//-> If this keyword are used in a browser environment then its will return window object
//-> If this keyword are used in a node environment then its will return empty object{} 
//-> This keyword is only work on a object not function

const myObj = {
    name: "anndita sharma",
    live: 'anand-vihar',

    project: function(){
        console.log(`${this.name} is my new student`);

        //console.log(this)           // This will return the current context and can access current records
    }                                                  
}                                                    

console.log(this)            // This will return {} empty due to current Node environment.

myObj.project()
myObj.name = "manoj tripathi"
myObj.project()


//+++++++++++++++++++++++++  Access (This) inside Functions +++++++++++++++++++
//-> This keyword can only works/access object property not function

//Ex: 1
function demo1(){
    let dayName = "This is a function declaration"
    console.log(`${this.dayName}`)    // Can't work on this situation 
}

//demo1()
//Output: undefined

//Ex: 2
let demo2 = function(){
    let funName2 = "This is a function Expression"
    console.log(`${this.funName2}`)    // Can't work on this situation 
}

//demo2()
//Output: undefined


//+++++++++++++++++++++++  Arrow Function ( Explicit and Implicit Return )
 
let arrowFunOne = (width, height) => {
      return width * height                   // Explicit Return
}
console.log(arrowFunOne(2, 3))
//Output: 6


let arrowFunTwo = (width, height) => width * height    // Implicit Return

console.log(arrowFunTwo(3, 3))
//Output: 9


let arrowFunThree = (width, height) => (
    width * height
)    

console.log(arrowFunThree(3, 4))
//Output: 12