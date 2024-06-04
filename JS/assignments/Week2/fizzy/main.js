/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
// function
// take in anumber
// need a condition
// if a num is /3 return fizz
// if a num is /5 return buzz
// of a num is /3 & /5 return FizzBuzz    

function fizzy (n) { 
    
  if ( n % 3 === 0 && n % 5 === 0 ){

    return "FizzBuzz"

  } else if ( n % 3 === 0 ){

    return "Fizz"
  } else if ( n % 5 === 0 ){

    return "Buzz"

  } else {
    return n
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
