class Game {

    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H
        this.ctx = this.canvas.getContext("2d")

        this.score = new Score
        this.dino = new Dino (this.ctx, 50, 150)
        this.dino.groundTo(this.canvas.height-75)

        this.background = new Background (this.ctx)

        this.enemies = []
        this.enemySpawnCounter = 0
        this.minSpawnFrames = 60
        this.maxSpawnFrames = 150
        this.nextSpawnIn = this.getRandomSpawnTime()

        this.fps = FPS
        this.drawIntervalId = undefined

        this.gameOver = false
    }

    start() {
        
        if (!this.drawIntervalId){
            this.setupListeners();
            this.drawIntervalId = setInterval(() => {
                this.clear()
                this.move()
                this.draw()
                this.addEnemy()
                this.checkCollision()
                this.render()
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
        this.enemies.forEach (enemy => enemy.move())
        this.enemies = this.enemies.filter(enemy => enemy.x + enemy.w > 0)
    }

    draw() {
        this.background.draw()
        this.dino.draw()
        this.enemies.forEach (enemy => enemy.draw())
    }

    addEnemy(){
        this.enemySpawnCounter++
        if (this.enemySpawnCounter >= this.nextSpawnIn){
            const enemyOptions = [
                new Stone(this.ctx, 1900, 360),
                new Skull(this.ctx, 1900, 360),
                new Bird(this.ctx, 1900, 290),
            ]
            const randomIndex = Math.floor(Math.random()*enemyOptions.length)
            const randomEnemy = enemyOptions[randomIndex]

            this.enemies.push(randomEnemy)
            this.enemySpawnCounter = 0
            this.nextSpawnIn = this.getRandomSpawnTime()
        }
    }
    getRandomSpawnTime() {
        return Math.floor(
            Math.random()* (this.maxSpawnFrames - this.minSpawnFrames + 1)
        ) + this.minSpawnFrames
    }
    checkCollision(){
        this.enemies.forEach(enemy => {
            if (this.dino.collidesWith(enemy)){
                this.stop()
            }
        })
    }
    render(){
        this.score.render()
    }
    stop(){
        clearInterval(this.drawIntervalId)
        this.gameOver = true
    }

}
