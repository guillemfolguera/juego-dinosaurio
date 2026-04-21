class Dino {

    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.ground = 0

        this.h = 90
        this.w = 180

        this.vy = 0
        this.ay = 0

        this.isJumping = false
        this.isCrouching = false

        this.drawCount = 0

        this.sprite = new Image()
        this.sprite.src = "assets/images/sprite-dino.png"
        this.sprite.vFrames = 3
        this.sprite.hFrames = 3
        this.sprite.vFramesIndex = 0
        this.sprite.hFramesIndex = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameW = Math.floor (this.sprite.width / this.sprite.hFrames)
            this.sprite.frameH = Math.floor (this.sprite.height / this.sprite.vFrames)
        }
    }

    groundTo(groundY) {
        this.y = groundY - this.h
        this.ground = groundY
    }

    onKeyEvent(event){
        switch(event.keyCode) {
            case ARROW_UP:
                if (event.type === "keydown" && !this.isJumping){
                    this.isJumping = true
                    this.vy = -DINO_VY
                    this.ay = DINO_AY
                }
            break
            
            case ARROW_DOWN:
                if (event.type === "keydown") {
                    this.isCrouching = true
                }
                
                if (event.type === "keyup") {
                    this.isCrouching = false
                }
            break
        }
    }

    move(){
        this.vy += this.ay
        this.y += this.vy
        if(this.y + this.h >= this.ground){
            this.y = this.ground-this.h
            this.vy = 0
            this.ay = 0
            this.isJumping = false
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

    animate() {
    this.drawCount++

    if (this.isJumping) {
        this.sprite.vFramesIndex = 2
        this.sprite.hFramesIndex = 1
        return
    }


    if (this.isCrouching) {
        this.sprite.vFramesIndex = 1

        if (this.drawCount % 5 ===0){
            this.sprite.hFramesIndex++
        
            if (this.sprite.hFramesIndex >= 3) {
                this.sprite.hFramesIndex = 0

            }
        }
        return
    }


    this.sprite.vFramesIndex = 0

    if (this.drawCount % 5 === 0) {
        this.sprite.hFramesIndex++

        if (this.sprite.hFramesIndex >= 3) {
            this.sprite.hFramesIndex = 0
        }
    }
}
    collidesWith(enemy) {
    return (
        this.x + 50 < enemy.x + enemy.w && // left
        this.x + this.w - 80 > enemy.x && // right
        this.y < enemy.y + enemy.h && // top
        this.y + this.h -25 > enemy.y // bottom
  )
    }

    



}
