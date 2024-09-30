/*******************************************************************************************************************
                                      IFFE( Immediately Invoked Function Expression )
*******************************************************************************************************************/
// Immediately Invoked Function Expression


// Named IFFE
(function daily(h, w){   

  console.log(`Function Declaration Output = ${h * w}`)
})(2, 5);



// Un-Named IFFE

( (h, w)=>{
  console.log(`Arrow Function Output = ${h * w}`)
} )(6, 7)

