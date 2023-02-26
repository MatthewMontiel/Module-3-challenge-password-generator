// Assignment code here

const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numCase = ["1","2","3","4","5","6","7","8","9","0"]
const specialCase = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","|","?","/",">","<","."];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Prompt user for password Length
  let passwordLength = (prompt("How many long would you like your password? Enter a number between 8-128"));
  // If password is outside of selection the prompt will return with a error prompt
  if (passwordLength <= 8 && passwordLength >= 128) {
    prompt("number is outside of character range");
    return null
  }
  if (isNaN(passwordLength)) {
    prompt("please enter a number");
  return null
  }
  //window prompts using confirms to add selections to blank password array
  let uppercaseConfirm = confirm("Would you like to use UPPER CASE letters?");
  let lowercaseConfirm = confirm("Would you like to use lower case letters?");
  let numcaseConfirm = confirm("Would you like to use Numb3rs?");
  let specialConfirm = confirm("Would you like to use Speci@l Ch@racters?")
  
  // empty array that adds criteria as things get added. 
  var passwordCriteria = []
  if (uppercaseConfirm) {
    passwordCriteria = passwordCriteria.concat(upperCase)
  }
  if (lowercaseConfirm) {
    passwordCriteria = passwordCriteria.concat(lowerCase)
  }
  if (numcaseConfirm) {
    passwordCriteria = passwordCriteria.concat(numCase)
  }
  if (specialConfirm) {
    passwordCriteria = passwordCriteria.concat(specialCase)
  }
  console.log(passwordCriteria)
  
  
  let magicPass = ""
  for (var i = 0; i < passwordLength; i++) {
    magicPass = magicPass + passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    console.log(magicPass)
  }
  return magicPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
