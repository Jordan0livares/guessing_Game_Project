const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber = randomInRange(1, 50)

let checkGuess = number => {
    if (number > secretNumber) {
        console.log("Too High")
        return false
    }
    if (number < secretNumber) {
        console.log("Too Low")
        return false
    }
    if (number === secretNumber) {
        console.log("Correct!")
        return true
    }
}

function askGuess() {

    rl.question("Enter a guess:", (answer) => {
        //: Log's answer in the database
        let correct = checkGuess(Number(answer));
        if (correct === true) {
            rl.close();
        } else {
            askGuess();
        }
    });
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


//askGuess()
function askRange(minNum, maxNum) {
    rl.question("Enter a minimum number:", (minimum) => {
        rl.question("Enter a maximum number:", (maximum) => {
            let number = randomInRange(minimum, maximum);
            secretNumber = number;

            console.log(`I'm thinking of a number between ${minimum} and ${maximum}`)
            askGuess()
        })
    })
}

askRange()
