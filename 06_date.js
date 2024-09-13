//let myDate1 = new Date();

//console.log(typeof myDate1);                     // It is a Object

// console.log(myDate1.toString());
// console.log(myDate1.toLocaleString());
// console.log(myDate1.toDateString())



// let myDate2 = new Date(2024, 1, 23);

//console.log(myDate2.toString());                     //Fri Feb 23 2024 00:00:00 GMT+0530 (India Standard Time)
//console.log(myDate2.toDateString());                 // Fri Feb 23 2024
//console.log(myDate2.toLocaleString());               // 2/23/2024, 12:00:00 AM
//console.log(myDate2.toLocaleDateString());            // 2/23/2024



//let myDate3 = new Date(2024, 1, 23, 5, 4); 
//console.log(myDate3.toLocaleString());                  // 2/23/2024, 5:04:00 AM

//let myDate4 = new Date("01-14-2024"); 
//console.log(myDate3.toLocaleString());                  // 1/14/2024, 12:00:00 AM



let currentTime = new Date();
//console.log(currentTime.getMonth() + 1)                  // Return Current Month (9)
//console.log(currentTime.getDate())                        // Return Current Date (13)
//console.log(currentTime.getSeconds())                        // Return Current Seconds 

console.log(currentTime.toLocaleString('default',{
    weekday:"long"
    
}))

