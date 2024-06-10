const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

// Step 1: Get user input
const userInput1 = getInput();
const userInput2 = getInput();

// Step 2: Check if both inputs are undefined
if (userInput1 === undefined && userInput2 === undefined) {
    console.log("You didn't provide any color.");
} else {
    // Step 3: If there is ONE color
    if (userInput2 === undefined) {
        if (isValidPrimaryColor(userInput1)) {
            const deconstructedColors = colorDeconstructor(userInput1);
            console.log(`The primary colors for ${userInput1} are ${deconstructedColors[0]} and ${deconstructedColors[1]}.`);
        } else {
            console.log(`${userInput1} is not a valid primary color.`);
        }
    } else {
        // Step 4: If there were TWO colors
        if (isValidSecondaryColor(userInput1) && isValidSecondaryColor(userInput2)) {
            const combinedColor = colorCombinator(userInput1, userInput2);
            console.log(`The result of combining ${userInput1} and ${userInput2} is ${combinedColor}.`);
        } else {
            console.log("Both colors must be valid secondary colors.");
        }
    }
}