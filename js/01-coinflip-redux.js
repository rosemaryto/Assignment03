let coinFlip
let times = parseFloat(prompt('Enter number of times you want to play.'))
for (let i = 0; i < times; i++) {
    randomNum = Math.round(Math.random()) 
    if (randomNum < 1) {
        console.log(`Heads`)
    } else {
        console.log(`Tails`)
    }
}