function askGuess() {

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let secretNumber = 5
    rl.question("Enter a guess:", (answer) => {
        //: Log's answer in the database

        let correct = checkGuess(Number(answer));
            if(correct === true) {
                rl.close();
            } else {
                askGuess();
            }
    });
}


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

console.log(askGuess(1));