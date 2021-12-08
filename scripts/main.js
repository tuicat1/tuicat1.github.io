let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    console.log("mySrc", mySrc);
    if(mySrc === 'images/white-reed-frog.jpg') {
      myImage.setAttribute('src',"images/Mother_and_baby_sloth_crossing_the_road.jpg");
    } else {
      myImage.setAttribute('src','images/white-reed-frog.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my website ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my website ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }