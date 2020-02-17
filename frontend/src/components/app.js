class App {
  constructor() {
    console.log("The app has loaded!")
    this.emoijis = new Emojis()
    this.users = new Users()
    this.games = new Games()

    // this.currentEmoji = ""
    // this.score = 0
    // this.currentCount = 3
    // this.timer = ""

    this.initBindingsAndEventListeners()

    // this.startTimer()
    // this.printTime()

  }

  initBindingsAndEventListeners() {
    this.counterContainer = document.querySelector("#counter")

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      console.log("THE GAME HAS BEGUN")
      // Enable game buttons
      foodButton.removeAttribute("disabled")
      foeButton.removeAttribute("disabled")

      // Start the timer
      this.startTimer()

      // End the timer
      // setTimeout(endTimer, 3000)
    });
  }

  // TODO: Update counter in UI

  startTimer() {
    console.log("⏰")

    // let counter = 3
    //
    // while (counter > 0) {
    //   window.setInterval(this.printTime, 1000);
    //   counter = - 1
    // }

    // let timer = window.setInterval(this.printTime, 1000);
    console.log(this.counterContainer)

    let counter = this.counterContainer.textContent;

    let printTime = setInterval(function() {
        counter--;
        console.log(counter)
        // console.log(this)
        // this.counterContainer.innerText = counter;
        if (counter <= 0) clearInterval(printTime);
    }, 1000);



  }

  // printTime() {
  //   console.log("hii")
  //   console.log(counter)
  //   // console.log(this.currentCount)
  //
  //   // if (this.currentCount != 0) {
  //   //   this.currentCount --;
  //   //   document.getElementById("counter").innerHTML = this.currentCount;
  //   // } else if (this.currentCount == 0 ) {
  //   //   console.log(this.currentCount)
  //   //   clearInterval(timer)
  //   //   console.log(this.currentCount)
  //   //
  //   //   // displayScore()
  //   //   // clearInterval(timer)
  //   //   console.log("Times up!")
  //   // }
  //
  // }


}
