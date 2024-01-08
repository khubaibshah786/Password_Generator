// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
// Prompt for password length
var passwordLength = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));

// Validate password length
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert('Invalid password length. Please enter a number between 8 and 128.');
  return null;
}
// Validate that at least one character type is selected
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert('At least one character type must be selected.');
  return null;
}
// Object to store user choices
var passwordOptions = {
  length: passwordLength,
  includeLowercase: includeLowercase,
  includeUppercase: includeUppercase,
  includeNumeric: includeNumeric,
  includeSpecial: includeSpecial
};

return passwordOptions;

}

// Function to get a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return ''; // Return an empty string if user input is invalid
  }

  var allChars = [];
  var result = [];

  // Include lowercase characters if chosen by the user
  if (options.includeLowercase) {
    allChars = allChars.concat(lowerCasedCharacters);
    result.push(getRandom(lowerCasedCharacters));
  }

  // Include uppercase characters if chosen by the user
  if (options.includeUppercase) {
    allChars = allChars.concat(upperCasedCharacters);
    result.push(getRandom(upperCasedCharacters));
  }

  // Include numeric characters if chosen by the user
  if (options.includeNumeric) {
    allChars = allChars.concat(numericCharacters);
    result.push(getRandom(numericCharacters));
  }

  // Include special characters if chosen by the user
  if (options.includeSpecial) {
    allChars = allChars.concat(specialCharacters);
    result.push(getRandom(specialCharacters));
  }

  // Fill the rest of the password with random characters
  for (var i = result.length; i < options.length; i++) {
    result.push(getRandom(allChars));
  }

  // Shuffle the result array to randomize the order of characters
  result = result.sort(function () {
    return 0.5 - Math.random();
  });

  // Convert the result array to a string and return
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  prompt('testing')
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);