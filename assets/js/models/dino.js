class Dino {

    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.ground = 0

        this.h = 30
        this.w = 30

        this.vy = 0
        this.ay = 0

        this.isJumping = false
    }

    groundTo(groundY) {
        this.y = groundY - this.h
        this.ground = groundY
    }

    onKeyEvent(event){
        const isPressed = event.type === "keydown"
        switch(event.keyCode) {
            case KEY_UP:
                if (!this.isJumping){
                    this.isJumping = true
                    this.vy = -DINO_VY
                    this.ay = DINO_AY
                }
            break
        }
    }

    move(){
        this.vy += this.ay
        this.y += this.vy
        if(this.y > this.ground){
            this.y = this.ground
            this.vy = 0
            this.ay = 0
            this.isJumping = false
        }
    }
    
    draw(){
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    



}
