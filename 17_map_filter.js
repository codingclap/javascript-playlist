/*
                                  Higher-Order___Array Method

map(): Transforms each element in an array, returning a new array.
filter(): Filters elements based on a condition, returning a new array.
reduce(): Reduces the array to a single value by applying a cumulative function.                 */





/********************************************************************************************************
                                             Maps
********************************************************************************************************/
//Creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.
//map() Remove the duplicate values from object

/* Syntax:
array.map(function(currentValue, index, array) {
    // return the new value to be added to the new array
})*/




//Example - 1

const puppy = new Map();               // It's a Object
//console.log(typeof puppy);           // It's a Object

//----------------
//(1) Set a Value

puppy.set('DogName', 'newDog')
puppy.set('DogName', 'montiDog')
puppy.set('DogAge', 23)
puppy.set('DogColor', 'red')

//console.log(puppy);      // Output: { 'DogName' => 'montiDog','DogAge' => '23', 'DogColor' => 'red' }


//Example - 2
//(2) Create/ Modify New Array with the help of ( Map )

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map((num) => { return num + 10 })
//console.log(newNums);                      //Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]    



/*************************************************************************************************************
                                            Filter
*************************************************************************************************************/
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.
//The Filter() has return type

/*Syntax
array.filter(function(currentValue, index, array) {
    // return true to keep the element, false to exclude it
})*/




//Example - 1
const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981,
        editions: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
        editions: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999,
        editions: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
        editions: 2010
    },
    {
        title: 'Book Five', genre: 'Science', publish: 2009,
        editions: 2014
    },
    {
        title: 'Book Six', genre: 'Fiction', publish: 1987,
        editions: 2010
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1986,
        editions: 1996
    },
    {
        title: 'Book Eight', genre: 'Science', publish: 2011,
        editions: 2016
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
        editions: 1989
    }
];


const finalBooks = books.filter((items) => {
    return items.genre == 'Fiction'
})

//console.log(finalBooks)


//Example - 2

let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let finalMarkes = marks
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num) => num >= 50)

//console.log(finalMarkes);

/***********************************************************************************************************
                                            Reduce
************************************************************************************************************/
/*reduce() applies a function to each element of the array (from left to right) to reduce it to a single value.*/

/* Syntax
array.reduce(function(accumulator, currentValue, index, array) {
    // return the new accumulator value
}, initialValue)*/


//Example - 1
const numbers = [1, 2, 3, 4, 5];

const finalRes = numbers.reduce(function (accumulator, currentVal, index) {
    // console.log(`acc: ${accumulator} and currval: ${currentVal} and array_index: ${index}`);
    return accumulator + currentVal
}, 0)

//console.log(finalRes)


//Example - 2
const binary = [11, 22, 33, 44, 55];

const finalOut = binary.reduce((acc, currval, index) => {
    console.log(`accum: ${acc} and currval: ${currval} and array_index: ${index}`);
    return acc + currval
}, 0)

console.log(finalOut)


//Example - 3

const shoppingCart = [
    {
        itemName: 'Fruity',
        price: 230
    },
    {
        itemName: 'Rock Salt',
        price: 102
    },
    {
        itemName: 'Meggy',
        price: 120
    }
]


let priceToPay = shoppingCart.reduce( (accu, item) => accu + item.price, 0)

console.log(`Total Price to Pay : ${priceToPay}` );