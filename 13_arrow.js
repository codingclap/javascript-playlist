//++++++++++++++++++++++  This Keyword +++++++++++++++++++++

const myObj = {
    name: "anndita sharma",
    live: 'anand-vihar',

    project: function(){
        console.log(`${this.name} is my new student`);

        console.log(this)           // This will return the current context
    }                                                  
}                                                    

console.log(this)            // This will return {} empty due to current Node environment.

myObj.project()
myObj.name = "manoj tripathi"
myObj.project()


//++++++++++++++++++++++  Function   +++++++++++++++++++++
