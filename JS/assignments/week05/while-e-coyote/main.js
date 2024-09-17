function numberDoubler(num) {
    do {
        // Double the number
        num *= 2;
        // Print the current number
        console.log(num);
      } while (num < 100);
    
      return num;
}



function stringRepeater(str) {
    let repeatedString = str; // Initialize the repeatedString with the input string

    // Use a do while loop to repeat the string until its length is >= 10
    do {
        repeatedString += str; // Concatenate the input string to the repeatedString
    } while (repeatedString.length < 10);

    return repeatedString; // Return the final repeated string
}

function makeDivisible(x, y) {
    // Use a do while loop to add 1 to x until it is divisible by y
    do {
        x += 1; // Increment x by 1
    } while (x % y !== 0); // Continue as long as x is not divisible by y

    return x; // Return the updated value of x
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};