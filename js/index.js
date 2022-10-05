// Funzione handleClick
function handleClick(event) {
  //  this === event.target
  console.log(this);
  console.log(event.target); // event.target // ottiene l'elemento che ha attivato un evento specifico
  makeSound(event.target.innerText);
  buttonAnimation(event.target.innerText);
}

// Aggiungo un evento ad ogni pulsante usando il ciclo for of
let eventArray = document.querySelectorAll("button");
for (const event of eventArray) {
  event.addEventListener("click", handleClick);
}

// Aggiungo addEventListener che si attiva quando si clicca la lettera sulla tastiera
document.addEventListener("keypress", handleKeyboardEvent);

function handleKeyboardEvent(event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
}

// Funzione makeSound
function makeSound(key) {
  switch (key) {
    case "w": {
      let tom1 = new Audio("sounds/tom-1.mp3"); // crea vaiabile e specifica nome file audio
      tom1.play();
      break;     // uscire dall'istruzione e continuare il codice
    }
    case "a": {
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    }
    case "s": {
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    }
    case "d": {
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    }
    case "j": {
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    }
    case "k": {
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    }
    case "l": {
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    }
    case "z": {
      let kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;
    }
    case "x": {
      let kick = new Audio("sounds/tom-3.mp3");
      kick.play();
      break;
    }
    case "c": {
      let kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;
    }
    default: {
      break;
    }
  }
}

function buttonAnimation(key) {  // animazione dei bottoni, ogni volta che si pressa il bottone(la lettera) poi setTimeOut()
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  document.body.classList.add("modify-body");
  setTimeout(() => {                            // chiama il bottone dopo 200 millisecondi
    activeButton.classList.remove("pressed");
    document.body.classList.remove("modify-body");
  }, 200);
}
