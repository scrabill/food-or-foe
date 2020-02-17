console.log("dkjshfkjsdhfkjsd")
const app = new App()

const emojis = ["🍇","🍉","🍊","🍋","🚀","🦄","🤖"]
const other = ["🚀","🦄","🤖"]
const h2 = document.querySelector("#emoji");

// const startButton = document.querySelector("#start")
const foodButton = document.querySelector("#food")
const foeButton = document.querySelector("#foe")
// const counter = document.getElementById("counter");

// let currentEmoji = ""
// let score = 0
// let currentCount = 3
// let timer = ""

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // startButton.addEventListener('click', (e) => {
    //   startGame(e);
    // });
});

// Prompt user to start the game
// Start the timer
// Keep displaying emoji while the timer runs
// And keep keep score while the timer is running
// When the clock stops, display the score
// Prompt to enter score into the leaderboard
// Or to start a new game

function startGame(e) {

  // // Start the timer
  // startTimer()
  //
  // // End the timer
  // setTimeout(endTimer, 3000)

  foodButton.removeAttribute("disabled")
  foeButton.removeAttribute("disabled")
  //
  turn();
  // makeAGuess();

}

// function startTimer() {
//   timer = window.setInterval(printTime, 1000);
// }
//
// function endTimer() {
//   clearInterval(timer)
// }
//
function displayScore() {
  console.log(score)
}
//
// // Loop this while the game is active
function turn() {
  if (currentCount == 0) {
    foodButton.setAttribute("disabled", true)
    foeButton.setAttribute("disabled", true)

    displayScore()

  } else {
    displayAnEmoji()
  }
}

//
//
// function printTime(timer) {
//   if (currentCount != 0) {
//     currentCount --;
//     document.getElementById("counter").innerHTML = currentCount;
//   } else if (currentCount == 0 ) {
//     console.log(currentCount)
//     clearInterval(timer)
//     console.log(currentCount)
//
//     displayScore()
//     clearInterval(timer)
//     // console.log("Times up!")
//   }
//
// }

function displayAnEmoji() {
    currentEmoji = emojis[Math.floor(Math.random() * emojis.length)]
    h2.innerText = currentEmoji
    makeAGuess()

    return currentEmoji
}
//
// // Is comparing the current value of x, to the known, food/not food array
// // OR referencing a property in the array (isfood?)?
//
function isFood(x) {
  if (other.includes(x)) {
    return false
  } else {
    return true
  }
}



function makeAGuess(e) {

  foodButton.addEventListener('click', (e) => {

    if (isFood(currentEmoji) === true) {
      // console.log("Correct!")
      score += 1
    } else {
      // console.log("Incorrect :(")
      score -= 1
    }

    turn()
    // console.log(`Current Score: ${score}`)

  });

  foeButton.addEventListener('click', (e) => {

    if (isFood(currentEmoji) === false) {
      // console.log("Correct!")
      score += 1
    } else {
      // console.log("Incorrect :(")
      score -= 1
    }

    turn()
    // console.log(`Current Score: ${score}`)

  });
}
