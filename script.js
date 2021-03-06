//Add event listener to listen for user clicking on the "generate password" button
document.getElementById("genPW").addEventListener ("click", function() {

    //Confirms to hear whether the user wants special characters, capital letters, lowercase letters, and/or numbers in their pw
    var charsOn = confirm("Special characters");
    var capsOn = confirm("Capital letters");
    var capsOff = confirm("Lowercase letters");
    var numOn = confirm("Number");

    if (charsOn === false && capsOn === false && capsOff === false && numOn === false) {
      alert("No characters selected");
      document.getElementById("PWplacement").textContent = "N1c3Tr^L0s3r";
    } else {

    //Prompts user to input a value for how long they want their password to be
    var inputLength = prompt("How long is your password (min. 8)");
    if (inputLength < 8) {
      alert("Minimum 8 characters");
      document.getElementById("PWplacement").textContent = "N1c3Tr^L0s3r";
    } else {

    //Here's the password array to be returned to the user
    var pw = [];

    //This do/while loop gets the individual elements of the password and pushes them to the pw variable
    do {

        //Turns inputLength from a string into an integer
        parseInt(inputLength);
      
        //Here's the randomizer to figure out which type of password character will be produced in each iteration
        var pwType = Math.floor(Math.random() * 4);
      
        //First up is special characters
        if (pwType === 0) {
      
          //If the user selected "Special Characters"
          if (charsOn === true) {
      
            //get special character;
            var specChar = "!@#$%^&*()_+"
            specEl = specChar[Math.floor(Math.random() * specChar.length)]
            //Push the special character to the main password array
            pw.push(specEl);
      
          //Otherwise, if the user didn't choose special characters, we have to check the next pwType
          } else {
            pwType = 1;
          }
      
        //Next up is capital letters
        } else if (pwType === 1) {
      
          //If the user selected capital letters
          if (capsOn === true) {
      
            //get capital letter
            var capEl = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

            //Push the special character to the main password array
            pw.push(capEl);
      
          //Otherwise, if the user didn't choose capital letters, we have to check the next pwType
          } else {
            pwType = 2; 
          }
      
        //Third up is lowercase letters
        } else if (pwType === 2) {
      
          //If the user selected lowercase letters
          if (capsOff === true) {
      
            //Get lowercase letter
            var lowerEl = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

            //Push the lowercase letter to the main password array 
            pw.push(lowerEl);
      
          //Otherwise, if the user didn't choose lowercase letters, we have to check the next pwType
          } else {
            pwType = 3;
          }
      
        //Fourth up is numbered elements
        } else if (pwType === 3) {
      
          //If the user selected numbers
          if (numOn === true) {
      
            //get number
            var numEl = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

            //Push the number to the main password array
            pw.push(numEl);
      
          //Otherwise, if hte user didn't choose lowercase letters, we have to check the next pwType
          } else {
            pwType = 0;
          }
      
        //If none of the other numbers worked, the loop goes back to the beginning
        } else {
          pwType = 0;
        }
    
    //As long as the pw array is shorter than the input length the user put in and longer than 8 characters, the loop continues
    } while (pw.length < inputLength);

    //To send the generated password to the user
    alert(pw.join(""));

    //To post the password to the page and replace it when a new one is generated
    document.getElementById("PWplacement").textContent = pw.join("");
  }
}
}
);




//My original pseudocode
//         Do {
// 	Pw = [];
// 	Var pwType = Math.floor(Math.random() * 4);
// 	If (pwType = 0) {
// 		If (charsOn= true) {
// 			Get specialCharacter;
// 		} else {
// 			pwType = 1;
// 		}
// 	}
// 	Else If (pwType = 1) {
// 		If (capsOn = true) {
// 			Get capitalLetter;
// 		} else {
// 			pwType = 2;
// 		}
// 	}
// 	Else if (pwType = 2) {
// 		If (capsOff = true) {
// 			Get lowercaseLetter;
// 		} else {
// 			pwType = 3;
// 		}
// 	}
// 	Else if (pwType = 3) {
// 		If (numOn = true) {
// 			Get numberElement;
// 		} else {
// 			pwType = 0;
// 		}
// 	}
// 	Else {
// 		pwType = 0;
// 	}
// Pw.push(newElement);
// } while (pw.length <= inputLength);



