let rockBtn = document.getElementById('rock')
let paperBtn = document.getElementById('paper')
let scissorsBtn = document.getElementById('scissors')
let clearBtn = document.getElementById('clear')
// let resultDiv = document.getElementById('result')
let checkDiv = document.getElementById('check')


rockBtn.onclick = () => {
    if (Math.floor(Math.random() * 3) == 0) {
        checkDiv.innerHTML = `Paper - You lost!`
    }
    else if (Math.floor(Math.random() * 3) == 1) {
        checkDiv.innerHTML = `Scissors - You Won!`
    }
    else if (Math.floor(Math.random() * 3) == 2) {
        checkDiv.innerHTML = `Rock - It's a draw!`
    }
}
paperBtn.onclick = () => {
    if (Math.floor(Math.random() * 3) == 0) {
        checkDiv.innerHTML = `Scissors - You lost!`
    }
    else if (Math.floor(Math.random() * 3) == 1) {
        checkDiv.innerHTML = `Rock - You Won!`
    }
    else if (Math.floor(Math.random() * 3) == 2) {
        checkDiv.innerHTML = `Paper - It's a draw!`
    }
}
scissorsBtn.onclick = () => {
    if (Math.floor(Math.random() * 3) == 0) {
        checkDiv.innerHTML = `Rock - You lost!`
    }
    else if (Math.floor(Math.random() * 3) == 1) {
        checkDiv.innerHTML = `Paper - You Won!`
    }
    else if (Math.floor(Math.random() * 3) == 2) {
        checkDiv.innerHTML = `Scissors - It's a draw!`
    }
}

clearBtn.onclick = () => {
    checkDiv.innerHTML = ' '
}