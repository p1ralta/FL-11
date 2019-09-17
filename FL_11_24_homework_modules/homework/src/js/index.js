import computerChoice from "./computer.js";
import "../scss/main.scss";

const output = document.querySelector(".output p");
const reset = document.querySelector(".reset");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let computerCount = 0;
let userCount = 0;
let roundCount = 0;

function start() {
  rockBtn.addEventListener("click", () => {
    game("Rock");
  });
  paperBtn.addEventListener("click", () => {
    game("Paper");
  });
  scissorsBtn.addEventListener("click", () => {
    game("Scissors");
  });
  reset.addEventListener("click", resetPage);
}
start();

function game(userChoice) {
  let computer = computerChoice();
  if (roundCount < 3) {
    roundCount++;
    switch (userChoice + computer) {
      case "RockScissors":
      case "PaperRock":
      case "ScissorsPaper":
        userCount++;
        output.innerHTML = `Round: ${roundCount}, ${userChoice} vs ${computer}. You’ve WON!`;
        break;
      case "RockPaper":
      case "PaperScissors":
      case "ScissorsRock":
        computerCount++;
        output.innerHTML = `Round: ${roundCount}, ${userChoice} vs ${computer}. You’ve LOST!`;
        break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorsScissors":
        output.innerHTML = `Round: ${roundCount}, ${userChoice} vs ${computer}. DRAW!`;
        break;
    }
  } else {
    if (userCount > computerCount) {
      output.innerHTML = "You winner";
    } else if (userCount < computerCount) {
      output.innerHTML = "Computer winner";
    } else {
      output.innerHTML = "Draw";
    }
  }
}

function resetPage() {
  computerCount = 0;
  userCount = 0;
  roundCount = 0;
  output.innerHTML = "Lets Start";
}
