// import handleEvents from './virtualEvents';
import {
  formatWord,
  addBodyPartToHangMan,
  createKeyBoard,
  generateRandomWord,
} from "./utils";

const words = ["cat", "dog", "parrot"];
let currentWord = localStorage.getItem("currentWord")
  ? localStorage.getItem("currentWord")
  : generateRandomWord(words);

const wordObject = formatWord(currentWord);

let mistakes =
  localStorage.getItem("mistakes") != null
    ? localStorage.getItem("mistakes")
    : 0;

let correctAnswers =
  localStorage.getItem("correctAnswers") != null
    ? parseInt(localStorage.getItem("correctAnswers"))
    : 0;

let storedWordArray = localStorage.getItem("storedWordArray")
  ? JSON.parse(localStorage.getItem("storedWordArray"))
  : wordObject;

let maxWrong = 6;

const guessedLetters = [];

function createElements() {
  const main = document.createElement("main");
  const container = document.createElement("div");
  container.classList.add("container");

  const divFlexContainer = document.createElement("div");
  divFlexContainer.classList.add("row");
  divFlexContainer.classList.add("justify-space-between");

  const divFirstHalf = document.createElement("div");
  divFirstHalf.classList.add("flex-40");
  const divSecondHalf = document.createElement("div");
  divSecondHalf.classList.add("flex-60");
  divSecondHalf.classList.add("guesses-container");

  const lines = document.createElement("div");
  lines.classList.add("lines");

  const topLine = document.createElement("div");
  topLine.classList.add("top-line");
  topLine.classList.add("line");
  const horizontalLine = document.createElement("div");
  horizontalLine.classList.add("horizontal-line");
  horizontalLine.classList.add("line");
  // const diagnolLine = document.createElement("div");
  // diagnolLine.classList.add("diagnol-line");
  // diagnolLine.classList.add("line");
  const smallLine = document.createElement("div");
  smallLine.classList.add("small-line");
  smallLine.classList.add("line");
  const bottomLine = document.createElement("div");
  bottomLine.classList.add("bottom-line");

  divFirstHalf.appendChild(lines);

  lines.appendChild(topLine);
  lines.appendChild(horizontalLine);
  lines.appendChild(bottomLine);
  // lines.appendChild(diagnolLine);
  lines.appendChild(smallLine);

  const gameTitle = document.createElement("div");
  gameTitle.classList.add("game-title");
  gameTitle.innerHTML = "Hangman Game";

  divFirstHalf.appendChild(gameTitle);
  divSecondHalf.appendChild(createGuessTopPart(storedWordArray));
  divSecondHalf.appendChild(createKeyBoard());

  main.appendChild(container);
  container.appendChild(divFlexContainer);
  divFlexContainer.appendChild(divFirstHalf);
  divFlexContainer.appendChild(divSecondHalf);
  document.body.appendChild(main);

  handleEvents();
}

function createGuessTopPart() {
  const guesses = document.createElement("div");
  guesses.classList.add("guesses");

  const hashes = document.createElement("div");
  hashes.classList.add("hashes");

  // console.log(currentWord, storedWordArray, mistakes);

  storedWordArray.forEach((item) => {
    let hash = document.createElement("div");
    let hashDiv = document.createElement("div");
    hashDiv.classList.add("hash__item-underline");

    hash.classList.add("hash__item");
    if (item.hidden === true) {
      hash.classList.add("hide");
    }
    hash.dataset.letter = `${item.letter}`;
    hash.innerHTML = item.letter;
    hashDiv.appendChild(hash);
    hashes.appendChild(hashDiv);
    // 
  });

  const hint = document.createElement("div");
  hint.classList.add("hint");

  const hintDiv = document.createElement("div");
  hintDiv.innerHTML = `Hint:<b> Pets </b>`;
  hintDiv.classList.add("hint__text");

  const incorrectGuesses = document.createElement("div");
  incorrectGuesses.classList.add("mistakes");

  const text = document.createElement("h3");
  text.innerHTML = "Incorrect answers:";

  const guessesLeft = document.createElement("span");
  guessesLeft.classList.add("mistakes__left");
  guessesLeft.innerHTML = parseInt(mistakes);

  const guessesTotal = document.createElement("span");
  guessesTotal.classList.add("mistakes__total");
  guessesTotal.innerHTML = maxWrong;

  hint.appendChild(hintDiv);

  incorrectGuesses.appendChild(text);
  incorrectGuesses.appendChild(guessesLeft);
  incorrectGuesses.appendChild(guessesTotal);

  guesses.appendChild(hashes);
  guesses.appendChild(hint);
  guesses.appendChild(incorrectGuesses);

  return guesses;
}

document.addEventListener("DOMContentLoaded", createElements);

function handleEvents() {
  const buttons = document.querySelector(".buttons");
  const hashes = document.querySelectorAll(".hash__item");
  const incorrectCountSpan = document.querySelector(".mistakes__left");

  // console.log(mistakes);
  buttons.addEventListener("click", function (event) {
    const letter = event.target.dataset.key;

    if (!guessedLetters.includes(letter)){
      guessedLetters.push(letter);
    }

    if (correctAnswers <= currentWord.length) {
      if (currentWord.split("").includes(letter)) {
        hashes.forEach((item) => {
          if (item.dataset.letter === letter && item.classList.contains("hide")) {
            // currentWord[word.word.indexOf(letter)].hidden = false;
            console.log(storedWordArray);
            item.innerHTML = letter;
            item.classList.remove("hide");
         
            localStorage.setItem("correctAnswers", correctAnswers + 1);
          }
        });
      } else {
        let currentCount = parseInt(mistakes);
        if (currentCount < maxWrong) {
          incorrectCountSpan.innerHTML = currentCount + 1;
          localStorage.setItem("mistakes", currentCount + 1);
          addBodyPartToHangMan();
        } else {
          alert("Game is lost");
          localStorage.removeItem("mistakes");
          localStorage.removeItem("correctAnswers");
          localStorage.removeItem("storedWordArray");
          localStorage.setItem("currentWord", generateRandomWord(words));
        }
      }
    } else {
      alert("You're the winner");
      localStorage.removeItem("mistakes");
      localStorage.removeItem("correctAnswers");
      localStorage.removeItem("storedWordArray");
      localStorage.setItem("currentWord", generateRandomWord(words));
    }
  });
}

// localStorage.clear();
