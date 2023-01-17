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
// Array of character type names 
let charsTypes = ["lowercase", "uppercase", "numeric", "special"];

// Function to prompt user for password options
function getPasswordOptions() {
  // Ask the user what their password length should be
  let pwdLen = prompt("Choose the length of your password: enter a number from 10 to 64");
  // Test whether the user has added letters to the input and ask them to enter a valid number
  if  (/[a-zA-Z]/.test(pwdLen)) {
    alert("Sorry, that is not a valid number");
    pwdLen = prompt("Please enter a valid number from 10 to 64");
  }
  // Convert the string input into a number
  let pwdLenNum = parseInt(pwdLen);
  // 
  if ((pwdLenNum < 10) || (pwdLenNum > 64)) {
    alert("The number you chose is out of range");
    pwdLen = prompt("Please enter a valid number from 10 to 64");
  }

  let userChoices = { passwordLength: pwdLenNum};
  for (const characterType in charsTypes) {
    userChoices[charsTypes[characterType]] = confirm(`Do you want your password to include ${charsTypes[characterType]} characters?`);
    // console.log(userChoices);  
  }
  // console.log(userChoices); 
  return userChoices;
  }
  
// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length)
}

// Function to generate password with user input
function generatePassword() {
  let userSelection = getPasswordOptions(); // Saved the object with user choices

  let userSelArray = [] // Created an array to store the types of characters that the user wants to add to her password
  let pwd = ''

  // Add all the elements of the arrays containing the type of characters the user wanted to the user selection array
  if (userSelection["lowercase"]) {
    userSelArray.push(...lowerCasedCharacters);
  } 
  
  if (userSelection["uppercase"]) {
    userSelArray.push(...upperCasedCharacters);
  } 
  
  if (userSelection["numeric"]) {
    userSelArray.push(...numericCharacters);
  } 
  if (userSelection["special"]) {
    userSelArray.push(...specialCharacters);
  }
  // Generate random numbers based on the user selection array length and use that number as an index to choose a character to add to the password
  for (i = 0; i < userSelection.passwordLength; i++) {
    randIndex = getRandom(userSelArray);
    pwd += userSelArray[randIndex];
  } 
  // console.log(pwd);
  // console.log(pwd.length);
  return pwd;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);