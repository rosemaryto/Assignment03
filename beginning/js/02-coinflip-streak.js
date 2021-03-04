let coinFlip;

do {
    let randomNum = Math.round(Math.random());
    coinFlip = randomNum;
    if(randomNum === 0) {
        coinFlip = "Heads";
        window.console.log(coinFlip);
    } else if (randomNum === 1) {
        coinFlip = "Tails";
        window.console.log(coinFlip);
    }
} while (coinFlip === "Heads");




