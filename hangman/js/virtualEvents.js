// export default function handleEvents(word, inCorrectCount) {
//   const buttons = document.querySelector(".buttons");
//   const hashes = document.querySelectorAll(".hash__item");
//   const incorrectCountSpan = document.querySelector(".incorrect-guesses__left");

//   buttons.addEventListener("click", function (event) {
//     const letter = event.target.dataset.key;
//     // let letterIndex = false;
//     // console.log(event.target.dataset.key);

//     // if (word.includes(letter)) {
//     //     letterIndex = word.indexOf(letter);
//     // }

//     hashes.forEach((item) => {
//       if (item.dataset.letter === letter) {
//         item.classList.remove("hide");
//       } else {
//         inCorrectCount += 1;
    
//         incorrectCountSpan.innerHTML = inCorrectCount;
//         addBodyPartToHangMan(inCorrectCount);
//       }
//     });
//   });
// }

// function addBodyPartToHangMan(inCorrectCount){

// }