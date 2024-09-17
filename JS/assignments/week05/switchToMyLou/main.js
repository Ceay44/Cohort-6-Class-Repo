/******************************/
//Your Code Here 
function dayOfWeek(dayNumber) {
  switch (dayNumber) {
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      case 7: return "Sunday";
      default: return "Invalid day. Please enter a number between 1 and 7.";
  }
}

function identifySeason(monthNumber) {
  switch (monthNumber) {
      case 1:
      case 2:
      case 12:
          return "Winter";
      case 3:
      case 4:
      case 5:
          return "Spring";
      case 6:
      case 7:
      case 8:
          return "Summer";
      case 9:
      case 10:
      case 11:
          return "Autumn";
      default:
          return "Invalid month. Please enter a number between 1 and 12.";
  }
}

function menuSelection(selection) {
  switch (selection) {
      case 1: return "Welcome!";
      case 2: return "Goodbye!";
      case 3: return "Thank you!";
      default: return "Invalid selection. Please choose a valid option.";
  }
}

/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  