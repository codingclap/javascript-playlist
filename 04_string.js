let name = "Anuj kumar";
const age = 23

//console.log(`Hi everyone my name is ${name} and my age is about ${age}`);         // [ Backticks allow us to put any variable 
                                                                                  // inside of any string using ${}  ]         



const gamename = new String("  Anuj kumar   ");

//console.log(`Game Name = ${gamename}`);

//console.log(gamename.length);                     // To find the length of string
//console.log(gamename.toUpperCase());              // Canvert to the uppercase
//console.log(gamename.charAt(2));                  // return character from 2nd position 
//console.log(gamename.indexOf('r'));               // return index of [r] character 
 
//console.log(`Remove space := ${secondString.trim()} `);         // Remove space from string

let url = "https://www.github%20com";
console.log(`Url: ${url}`)

console.log(url.replace('%20','-'))                       // Replace the string from the URL

//console.log(url.includes('github'));                      // Check if the string include on a URL

console.log(url.slice('.'));