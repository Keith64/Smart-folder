//generate random password
function generate() {
//set password length/complexity
let complexity = document.getElementById("slider").value;
//Possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
let password ="";
//Create for loop to choose password characters
for(var i = 0; i <= complexity; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}
//Add password to textbox/display area
document.getElementById("display").value = password;
//Add password to previously generated password section
document.getElementById("lastNums").innerHTML += password + "<br />" ;
}
//Set default length display of 25
document.getElementById("length").innerHTML = "length: 25";
//Function to set length base on slider position
document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
  }
  else  {
    document.getElementById("length").innerHTML = "length: 1";
  }
}
//Function to copy password to clipboard
function copyPassword() {
  document.getElementById("display").querySelector();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
