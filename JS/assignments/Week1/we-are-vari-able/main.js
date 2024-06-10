/******************
 * YOUR CODE BELOW *
 ******************/
// Variables
let myFirstName = "Robert";
let myLastName = "Downy Jr";
let myFavoriteCeleb = "Jennifer Lawrence";
let myLuckyNum = 7;
let myAge = 30;
let myHeight = 70; // Height in inches
let myFavoriteYear = 2015;

// Sentence combining variables
let mySentence = `${myFirstName} ${myLastName} admires ${myFavoriteCeleb}.`;

// Mathematical operations
let mySum = 5 + 2317 + 36;
let myProduct = (232 * 43 / 2) + 4;
let myHeightAndAge = myAge + myHeight;

// Output
console.log("mySum:", mySum);
console.log("myProduct:", myProduct);
console.log("myHeightAndAge:", myHeightAndAge);

/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof myFirstName === "undefined") {
  myFirstName = undefined;
}

if (typeof myLastName === "undefined") {
  myLastName = undefined;
}

if (typeof myFavoriteCeleb === "undefined") {
  myFavoriteCeleb = undefined;
}

if (typeof mySentence === "undefined") {
  mySentence = undefined;
}

if (typeof myLuckyNum === "undefined") {
  myLuckyNum = undefined;
}

if (typeof myAge === "undefined") {
  myMentalAge = undefined;
}

if (typeof myHeight === "undefined") {
  myHeight = undefined;
}

if (typeof myFavoriteYear === "undefined") {
  myFavoriteYear = undefined;
}

if (typeof mySum === "undefined") {
  mySum = undefined;
}

if (typeof myProduct === "undefined") {
  myProduct = undefined;
}

if (typeof myHeightAndAge === "undefined") {
  myHeightAndAge = undefined;
}

module.exports = {
  myFirstName,
  myLastName,
  myFavoriteCeleb,
  mySentence,
  myLuckyNum,
  myAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
};
