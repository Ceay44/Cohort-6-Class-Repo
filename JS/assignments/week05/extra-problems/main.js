function isEvenlyDivisible(num, divisor) {
  // Check if num is evenly divisible by divisor
  return num % divisor === 0;
}

function halfSquare(num) {
  // Calculate the square of the given number
  const square = num * num;
  // Return half of the square
  return square / 2;
}

function isLong() {
}

function exclaim() {
}

function countWords(str) {
  return str.length
}

function containsDigit(number) {
  // Convert the number to a string
  const numberString = Math.abs(number).toString();

  // Use a regular expression to check if it contains any digits
  const regex = /\d/;
  return regex.test(numberString);
}

function containsLowerCase(str) {
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
      // Check if the character is a lowercase letter
      if (/[a-z]/.test(str[i])) {
          return true; // Return true if a lowercase letter is found
      }
  }
  return false; // Return false if no lowercase letter is found
}
function containsUpperCase() {
}

function containsNonAlphanumeric(str) {
  if (!str) return false; // Return false for empty strings
  for (let char of str) {
      if (!/[a-zA-Z0-9]/.test(char)) {
          return true; // If a non-alphanumeric character is found, return true
      }
  }
  return false; // If no non-alphanumeric character is found, return false
}

// Test cases
it('can determine that a string with only non-alphanumeric characters contains at least one non-alphanumeric character', function() {
  expect(containsNonAlphanumeric('!@#$%^&*()')).toBe(true);
});

it('can determine that a string with only letters does not contain any non-alphanumeric characters', function() {
  expect(containsNonAlphanumeric('abcdef')).toBe(false);
});

it('can determine that a string with only non-zero digits does not contain any non-alphanumeric characters', function() {
  expect(containsNonAlphanumeric('123456')).toBe(false);
});

it('can determine that a string with only zeros does not contain any non-alphanumeric characters', function() {
  expect(containsNonAlphanumeric('0000')).toBe(false);
});

it('can determine that a string that contains some alphanumeric characters and some non-alphanumeric characters does contain a non-alphanumeric character', function() {
  expect(containsNonAlphanumeric('abc123$')).toBe(true);
});

it('can determine that an empty string does not contain a non-alphanumeric character', function() {
  expect(containsNonAlphanumeric('')).toBe(false);
});

function containsSpace() {
}

function digits(num) {
  const numStr = Math.abs(num).toString();
  const digitsArray = numStr.replace('.', '').split('').map(digit => parseInt(digit));
  return digitsArray;
}
it('can turn a floating point number into an array of its digits, ignoring the decimal point', function() {
  expect(digits(7.89)).toEqual([7, 8, 9]);
});

function truncate(title) {
    if (title.length >= 15) {
        return title.slice(0, 8) + '...';
    } else {
        return title;
    }
}

// Test cases
it('shortens a title of at least 15 characters to one with 8 and 3 dots', function() {
    const longTitle = 'This is a long title';
    const result = truncate(longTitle);
    expect(result).toEqual('This is ...');
});

it('shortens a string of exactly 15 characters', function() {
    const exactTitle = 'Exactly 15 chars!';
    const result = truncate(exactTitle);
    expect(result).toEqual('Exactly ...');
});

it('does not shorten a sub-15-character string', function() {
    const shortTitle = 'Short title';
    const result = truncate(shortTitle);
    expect(result).toEqual('Short title');
});

function isValidPassword(password) {
  // Check for at least one uppercase letter
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
      return false;
  }

  // Check for at least one lowercase letter
  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) {
      return false;
  }

  // Check for at least one digit
  const digitRegex = /\d/;
  if (!digitRegex.test(password)) {
      return false;
  }

  // Check for at least one non-alphanumeric character
  const nonAlphanumericRegex = /[^a-zA-Z0-9]/;
  if (!nonAlphanumericRegex.test(password)) {
      return false;
  }

  // Check for any spaces
  if (password.includes(' ')) {
      return false;
  }

  // If all checks pass, return true
  return true;
}

function onlyPunchy(titles) {
  return titles.map(title => {
      // Add an exclamation point to titles without one
      if (!title.endsWith('!')) {
          title += '!';
      }
      // Remove excess exclamation points
      title = title.replace(/!+/g, '!');
      return title;
  }).filter(title => title.length < 15);
}

// Test cases
it('returns only those titles that are shorter than 15 characters', function() {
  const titles = ['Short!', 'This is a long title!', 'Another short title!'];
  const result = onlyPunchy(titles);
  expect(result).toEqual(['Short!', 'Another short title!']);
});

it('adds an exclamation point to any titles without exclamation points', function() {
  const titles = ['Short', 'This is a long title', 'Another short title'];
  const result = onlyPunchy(titles);
  expect(result).toEqual(['Short!', 'This is a long title!', 'Another short title!']);
});

it('removes any excess exclamation points from any titles with multiple exclamation points', function() {
  const titles = ['Short!!!', 'This is a long title!!', 'Another short title!!'];
  const result = onlyPunchy(titles);
  expect(result).toEqual(['Short!', 'This is a long title!', 'Another short title!']);
});

it('does not factor in excess exclamation points when deciding if the title is shorter than 15 characters', function() {
  const titles = ['Short!!!', 'This is a long title!!', 'Another short title!!'];
  const result = onlyPunchy(titles);
  expect(result).toEqual(['Short!', 'This is a long title!', 'Another short title!']);
});













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
