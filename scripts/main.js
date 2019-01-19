var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cabins-winter.jpg') {
      myImage.setAttribute ('src','images/cabin-beach-winter.jpg');
    } else {
      myImage.setAttribute ('src','images/cabins-winter.jpg');
    }
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
var myName = prompt('Please enter your name.');
localStorage.setItem('name', myName);
myHeading.textContent = 'Welcome!, ' + myName;
}
if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Welcome Back! ' + storedName;
}
myButton.onclick = function() {
setUserName();
}
