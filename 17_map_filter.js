/*******************************************************************************************************************
                                                          Maps
*******************************************************************************************************************/
//Creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.
//map() Remove the duplicate values from object

const puppy = new Map();               // It's a Object
//console.log(typeof puppy);           // It's a Object

//----------------
//(1) Set a Value

puppy.set('DogName', 'newDog')
puppy.set('DogName', 'montiDog')
puppy.set('DogAge', 23)
puppy.set('DogColor', 'red')

console.log(puppy);      // Output: { 'DogName' => 'montiDog','DogAge' => '23', 'DogColor' => 'red' }



//----------------
//(2) Create/ Modify New Array with the help of ( Map )

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);                                           //Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]    
                                                                            


/*******************************************************************************************************************
                                                          Filter
*******************************************************************************************************************/
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.
//The Filter() has return type


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


const finalBooks = books.filter( (items)=> {
    return items.genre == 'Fiction'
})

console.log(finalBooks)