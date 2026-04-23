class Bird{
    constructor(ctx, x, y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 140
        this.h = 70
        this.vx = BACKGROUND_SPEED-0.7

        this.drawCount = 0
        
        this.sprite = new Image()
        this.sprite.src = "assets/images/sprite-bird.png"
        this.sprite.vFrames = 1
        this.sprite.hFrames = 3
        this.sprite.vFramesIndex = 0
        this.sprite.hFramesIndex = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameW = Math.floor (this.sprite.width / this.sprite.hFrames)
            this.sprite.frameH = Math.floor (this.sprite.height / this.sprite.vFrames)
        }
    }

    draw(){
        if (this.sprite.isReady) {
            this.ctx.drawImage(
                this.sprite,
                this.sprite.hFramesIndex * this.sprite.frameW,
                this.sprite.vFramesIndex * this.sprite.frameH,
                this.sprite.frameW,
                this.sprite.frameH,
                this.x,
                this.y,
                this.w,
                this.h

            )
            this.animate()
        }
    }

    animate(){
        this.drawCount++

        this.sprite.vFramesIndex = 0
        if (this.drawCount % 5 === 0){
            this.sprite.hFramesIndex++

            if (this.sprite.hFramesIndex >= 3) {
                this.sprite.hFramesIndex = 0
            }
        }
        return
    }

    move(){
        this.x += this.vx
    }
}