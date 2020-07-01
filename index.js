//Detecting Button Press

// This event listener waits for a click from a button and then it calls the function
var drumBtns = document.querySelectorAll(".drum");

for (var i=0; i< drumBtns.length;i++){
  drumBtns[i].addEventListener("click", function() {//this is an anonymous function

    //"this" is the object that triggered by the eventListener
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting Keyboard Press

//This eventListener waits for a button on the keyboard to be pressed
document.addEventListener("keydown", function(event){
  //"event" has a property named "key"
  makeSound(event.key);//if a key was pressed it uses the value of the key to see if it plays a sound of not
  buttonAnimation(event.key);
});



function makeSound(value){//this function determines the sound it makes according to the value
  switch (value) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
