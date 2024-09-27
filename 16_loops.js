// For Loop
for(let i=0; i<= 10; i++){
   
    if(i == 5){
        //console.log(`No ${i} is my favourite no.`)
    }
    //console.log(i)
}

//++++++++++++++++++++++ Break and Continue +++++++++++++++++++++++++
//Break

for(let i=0; i<= 10; i++){
   
    if(i == 5){
     //console.log(`No ${i} is found! Now you can exit`)
     break;
    } 
    //console.log(`Value =  ${i}`)
}


//Continue

for(let j=0; j<= 10; j++){
    
    if(j == 5){
     console.log(`No ${j} is found! Now you can continue`)
     continue;
    }

    console.log(`Value =  ${j}`)
}