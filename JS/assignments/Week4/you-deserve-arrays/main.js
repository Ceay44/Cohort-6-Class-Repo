/******************
 * YOUR CODE HERE *
 ******************/

function getIndex3(array) {
  // Check if the array has at least four elements
  if (array.length >= 4) {
      return array[3]; // Return the item at index 3
  } else {
      // If there are not four items, return the value at the last index
      return array[array.length - 1];
  }
}




function getFirstItemFrom(array) {
  // Check if the array is not empty
  if (array.length > 0) {
      return array[0];
  } else {
      return undefined; // Return undefined if the array is empty
  }
}

function getLastItemFrom(array) {
  // Check if the array is not empty
  if (array.length > 0) {
      return array[array.length - 1]; // Return the last item
  } else {
      return undefined; // Return undefined if the array is empty
  }
}

// Function to check if the array's length is at least 10
function isLongList(array) {
  return array.length >= 10;
}

function firstItemIsNumber(MyArr) {
 
  if (MyArr.length > 0) {
      return typeof MyArr[0] === 'number'; 
  } else {
      return false; 
  }
}
// Check if the array has at least three elements and if the third item is a string
// Check if the third string has at least two
 // Check if the third string has at least two characters
 // Return the second character of the third string 
 //third string doesn't have at least two characters
 // Return undefined if the
 // Return undefined if the array doesn't meet the condition


function secondCharOfThirdString(arr) {
  
  if (arr.length >= 3 && typeof arr[2] === 'string') {
     
      if (arr[2].length >= 2) {
          return arr[2][1]; 
      } else {
          return undefined;  
      }
  } else {
      return undefined; s
  }
}


// Remove non-alphanumeric characters and convert to lowercase
  // Check if the cleaned string is equal to its reverse
function isPalindrome(str) {
  
let trickyStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  

  return trickyStr === trickyStr.split('').reverse().join('');
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output will be true
console.log(isPalindrome("racecar")); // Output will be true
console.log(isPalindrome("hello")); // Output will be false
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
