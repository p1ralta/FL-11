let again, bool, prize, round, prize1, prize2, prize3, range, total, random, guess;

const def = 100;
const start = 0;
const startRange = 8;
const decline = 2;
const limit = 4;
const increaseRang = 4;
const increasePrize = 1.5;
const step1 = 1;
const step2 = 2;
const step3 = 3;

let startGame = confirm('Do you want to play a game?');

if (startGame) {
  again = true;

  while(again) {
    bool = true;
    prize = def;
    round = start;
    prize2 = prize/decline;
    prize3 = prize2/decline;
    range = startRange;
    total = start;

    while(bool === true) {
      prize1 = prize;
      random = Math.floor(Math.random()*range+1);

      for(let i = step1; i < limit; i++){

          if (i === step2) {
            prize = prize2;
          }else if(i === step3) {
            prize = prize3;
          }

        guess = +prompt('Choose a roulette pocket number from 0 to ' + range + '\nAttempts left: ' + i +
                 '\nTotal prize: ' + total + '$' + '\nPossible prize on current attempt: ' + prize + '$');     

                if (guess === random){
                    total += prize;
                    range += increaseRang;
                    i = step3;
                     bool = confirm('Congratulation, you won!   Your prize is: ' + total + 
                                    '$. Do you want to continue?');
                     prize = prize1;
                     break;
                }

                if (guess !== random && i === step3) {
                    bool = false;
                }
      }

      prize *= increasePrize;
      prize2 *= increasePrize;
      prize3 *= increasePrize;
    }

    alert('Thank you for your participation. Your prize is: ' + total + ' $ ');
    again = confirm('Do you want to play again?');
  }

}else{
  alert('You did not become a billionaire, but can.');
}