const startButton = document.getElementById("start-button")
const startOverButton = document.getElementById("start-over-button")

const startScreen = document.getElementById("start-screen")
const containerGame = document.getElementById("container-game")
const gameOverScreen = document.getElementById("game-over-screen")


startButton.onclick = function startButtonClick(){
    startScreen.classList.toggle("hidden")
    containerGame.classList.toggle("hidden")
    const game = new Game("canvas")
    game.start()
}

startOverButton.onclick = function startOverButtonClick(){
    gameOverScreen.classList.toggle("hidden")
    containerGame.classList.toggle("hidden")
    const game = new Game("canvas")
    game.start()
}

