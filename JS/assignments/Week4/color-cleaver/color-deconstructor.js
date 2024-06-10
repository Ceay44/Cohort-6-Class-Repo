/******************
 * YOUR CODE HERE *
 ******************/

function colorDeconstructor(secondaryColor) {
  if (secondaryColor === "orange") {
      return "red and yellow";
  } else if (secondaryColor === "purple") {
      return "red and blue";
  } else if (secondaryColor === "green") {
      return "blue and yellow";
  } else {
      return "Sorry, the color you entered is not a secondary color!";
  }
}

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
