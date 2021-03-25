let secretNumber = 5

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
