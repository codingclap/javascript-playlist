let popcorn = 22;

switch(popcorn){
    case 1:
        console.log(`Popcorn 1 is working`)
        break;
    case 22:
        console.log(`Popcorn 22 is working`)
        break;
    case 33:
        console.log(`Popcorn 33 is working`)
        break;
    case 44:
        console.log(`Popcorn 44 is working`)
        break;
    default:
        console.log(`The given input is'n Match`)
        break;    
}



let month = 'january';

switch(month){
    case 'january':
        console.log(`january Month`)
        break;
    case 'February':
        console.log(`February Month`)
        break;
    case 'march':
        console.log(`march Month`)
        break;
    case 'April':
        console.log(`April Month`)
        break;
    default:
        console.log(`Default Month`)
        break;    
}



//+++++++++++++++++++++++++++  Ternary and Nullish coalescing operator ++++++++++++++++++++++++

//(1) Ternary Operator

let output = 4 >= 3 ? 'Value is grater' : 'value is lesser';
console.log(output)                                                     //output: Value is grater


//(2) Nullish coalescing operator

// Its Check the first truth value if not it will pick the next one

let final = undefined ?? 44                                        
console.log(final)                                                     //output: 44
