function isEvenlyDivisible(num, divisor) {
  // see if num is evenly divisible by divisor
  return num % divisor === 0;
}

function halfSquare(num) {
  // square of the given number
  const square = num * num;
  // return half  the square
  return square / 2;
}

function isLong(str) {
  //str logic: greater than or less than 15
  if(str.length >= 15){
    return true
  } else {
    (str.length < 15)
return false
  }
}

function exclaim(str) {
  // see if the last char is an !
  if (str[str.length - 1] === "!") {
    // create var for the index to start slicing from
    let myArr= str.length - 1;

    //I looped backwards to find the first item that is not an exclamation mark
    for (let i = str.length - 2; i >= 0; i--) {
      if (str[i] !== "!") {
        myArr = i + 1;
        break;
      }
    }

    // return str with extra "!" removed
    return str.slice(0, myArr + 1);
  } else {
    // If no "!" add one
    return str + "!";
  }
}



// counting words
function countWords(str) {
  if (!str) return 0; // If the string is empty or false, return 0

  let wordCount = 0; // Start with 0 words

  // loop thru the whole str
  for (let i = 0; i < str.length; i++) {
    // if the current item is not a space and the previous item is a space or it's the first item, plus word count
    if (str[i] !== ' ' && (i === 0 || str[i - 1] === ' ')) {
      wordCount++;
    }
  }

  // if there is 1 word
  if (wordCount === 0 && str.length > 0) {
    wordCount = 1;
  }

  return wordCount;
}

function containsDigit(number) {
  
}

function containsLowerCase(str) {
  
}

function containsUpperCase() {
}

function containsNonAlphanumeric(str) {
  
}



function containsSpace() {
}

function digits(num) {
  
    }




function isValidPassword(password) {
  
  }

 


function onlyPunchy(titles) {
 
}















module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
