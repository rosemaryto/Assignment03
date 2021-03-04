let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
for (let i = 0; i < 10; i++) {
    if(randomNum === 0) {
        coinFlip = "Heads";
    } else if (randomNum === 1) {
        coinFlip = "Tails";
    }
}
window.console.log(coinFlip);