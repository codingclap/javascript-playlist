const user = {
    username: "Anuj kumar",
    loginCount: 28,
    signedIn: false,
    getUserDetails: function () {
        console.log(`Username: ${this.username}`);        // Get the username of current object
        //console.log(this);                               // get the function current Context
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());


//------------------------------ Constructor Function ------------------------------------------------------

/*
The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically.

Example-1

Output:  userOne and userTwo result will be the same. because they are calling same function with same instance.

Solution: If we want diffrent output each time  then we must use (New) Keyword to create a separate instance.
*/
function UserName(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this
}


//Wrong way
// const userOne = UserName("Hidamba", 123, true);
// const userTwo = UserName("Anuj kumar", 112, true);


//Correct way
const userOne = new UserName("Hidamba", 123, true);
const userTwo = new UserName("Anuj kumar", 112, true);

console.log(userOne instanceof UserName);               // Check whather userOne is a instance of UserName Function
// Expected output: true

console.log(userOne);
console.log(userTwo);                                    
