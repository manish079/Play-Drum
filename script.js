/* const drum = document.getElementsByClassName("drum");

const sounds = [
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
  "./sounds/snare.mp3",
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/desidhol.mp3",
];

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", () => {
    console.log("Drum play");
    new Audio(sounds[i]).play();
  });
} */

// 2nd way

/* const drumList = document.querySelectorAll("img");

for (let i = 0; i < drumList.length; i++) {
  drumList[i].addEventListener("click", () => {
    new Audio(sounds[i]).play();
  });
} */

//when we call function as a parameter of other function is called higher order function.

// 3rd

//get reference of clicked button
//play perticuler button matching audio

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // console.log("Play sound");

    //This work on all buttons and play same sound
    // let audio = new Audio("./sounds/snare.mp3");
    // audio.play();

    let getKey = buttons[i].innerHTML;
    // console.log(getKey);

    playDrum(getKey);
    addAnimOnDrum(getKey);
  });
}

/* document.addEventListener("keypress", function () {
//   console.log("Key pressed!!");
}); */

//play sound using keyboard keys
//we can print also which key I have type
document.addEventListener("keypress", function (event) {
  //   console.log(event);
  playDrum(event.key);
  addAnimOnDrum(event.key);
});

function playDrum(key) {
  switch (key) {
    case "m":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "n":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "i":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    case "s":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "h":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "k":
      new Audio("./sounds/dogoy.mp3").play();
      break;
    default:
      new Audio("./sounds/default.mp3").play();
  }
}

//add some cool things
//add opacity to perticular drum

function addAnimOnDrum(key) {
  let activeBtn = document.querySelector(`.${key}`);

  activeBtn.classList.add("play");

  //Now give some delay

  setTimeout(function () {
    activeBtn.classList.remove("play");
  }, 100); //0.1 second
}
