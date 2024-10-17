
/*
    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
      (!) A Promise is in one of these states:
            • Pending: initial state, neither fulfilled nor rejected.
            • Fulfilled: meaning that the operation was completed su */

//--------------------------- Example - 1 ----------------------------

let promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 1');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log('Promise 1 Resolved')
})

//--------------------------- Example - 2 ----------------------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2')
        resolve()
    }, 1000)
}).then(function () {
    console.log('Promise 2 Resolved')
})

//--------------------------- Example - 3 (Data Passing) ----------------------------

const promiseThree = new Promise(function (resolve, reject) {

    resolve({ username: 'Anuj kumar', age: 23 })

})

promiseThree.then(function (rec) {
    console.log(rec);
})

//--------------------------- Example - 4 (Reject) ----------------------------

const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(function () {
        if (!error) {
            resolve({ username: 'Deepak kumar', age: 30, status: true })
        } else {
            reject('ERROR: Somthing went wrong!')
        }
    }, 1000)

})

promiseFour.then((record) => {
    return record.username
}).then((username) => {                         // Callback hell
    console.log(username)
}).catch((err) => {
    console.log(err)
})


//--------------------------- Example - 5 (async/ await) ----------------------------

promiseFive = new Promise(function (resolve, reject) {
    let error = false;
    setTimeout(function () {
        if (!error) {
            resolve({ username: 'Manoj kumar', age: 35, status: true })
        } else {
            reject('ERROR: Promise Five error!')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (errs) {
        console.log(errs)
    }

}

consumePromiseFive()

//--------------------------- Example - 6 ( Data Fetch) ----------------------------

//(Option 1)
async function fetchUser() {

    try {
        const users = await fetch('https://api.github.com/users/anujadhana');
        const data = await users.json();                                              // Convert into JSON Format and waiting for the records
        //console.log(data)
    } catch (error) {
        console.log('ERROR: Records Not Found')
    }
}

fetchUser();


//(Option 2)

/*
A fetch() promise only rejects when a network error is encountered
(which is usually when there's a permissions issue or similar). A fetch()
promise does not reject on HTTP errors (404, etc.). Instead, a then ()
handler must check the Response.ok and/or Response.status properties.
*/

fetch('https://api.github.com/users/anujadhana')
.then((respon)=> {
     return respon.json();
}).then((anujRecord)=>{
    console.log(anujRecord);
})
.catch(()=>{
   console.log('ERROR: Anuj Records not found!') 
})