const squares = document.querySelectorAll('.boxes')
const guy = document.getElementsByClassName('.guy')
const score = document.querySelector('.score')
const time_left = document.querySelector('.time-left')

let Result = 0
let hitPosition
let currentTime = 60

const randomSquare = () => {
    squares.forEach((square) => {
        square.classList.remove(guy)
    })

    let RandomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add(guy)

    hitPosition = RandomSquare.id
}

squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            Result++
            score.textContent = Result
            hitPosition = null
        }
    })
})

const moveGuy = () => {
    let TimerId = null
    TimerId = setInterval(randomSquare, 1000)
}

moveGuy()

const countDown = () => {
    currentTime--
    time_left.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        alert(`Game Over Your Score is ${Result}`)
    }
}

let countDownTimerId = setInterval(countDown, 1000)
