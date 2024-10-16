
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
    if (!error) {
        resolve({ username: 'Deepak kumar', age: 30, status: true })
    }else{
        reject('ERROR: Somthing went wrong!')
    }

})

promiseFour.then((record) => {
    return record.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
})