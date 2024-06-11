// Finish the function to filter out all odd numbers and all even numbers from an array of numbers.


// Example
// filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10]) should return [2,4,6,8,10]

// Hint


// Pseudo Code
  //takes in am array of numbers
  //separate odd from even nums in arr
  //return the even nums from array
  //return the odd nums from array
// use filter? or map? array

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.



function filterOddsAndEvens(arr){

 let yin = arr.filter(energy => energy % 2 == 0)
// console.log(yin)
console.log(yin)
let yang = arr.filter(energy => energy % 2 !== 0)
//  console.log(yang)
console.log(yang)
 return [yin, yang];
}


console.log(filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10])); // [2,4,6,8,10]


