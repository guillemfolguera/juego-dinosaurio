class Game {

    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H
        this.ctx = this.canvas.getContext("2d")

        this.dino = new Dino (this.ctx, 50, 150)
        this.dino.groundTo(this.canvas.height-75)

        this.background = new Background (this.ctx)

        this.fps = FPS
        this.drawIntervalId = undefined
    }

    start() {
        if (!this.drawIntervalId){
            this.setupListeners();
            this.drawIntervalId = setInterval(() => {
                this.clear()
                this.move()
                this.draw()
            }, this.fps)
        }
    }

    setupListeners() {
        document.addEventListener("keydown", event => this.dino.onKeyEvent(event))
        document.addEventListener("keyup", event => this.dino.onKeyEvent(event))
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    move() {
        this.dino.move()
        this.background.move()
    }

    draw() {
        this.background.draw()
        this.dino.draw()
    }

    stop() {
        clearInterval(this.drawIntervalId)
        this.drawIntervalId = undefined
    }

}
