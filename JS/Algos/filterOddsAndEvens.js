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




function filterOddsAndEvens(arr){

 let even = arr.filter(num => num % 2 == 0)
return even
}


console.log(filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10])); // [2,4,6,8,10]


