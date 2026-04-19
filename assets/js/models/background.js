class Background {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = ctx.canvas.width
        this.h = ctx.canvas.height
        this.vx = BACKGROUND_SPEED

        this.img = new Image()
        this.img.src = "assets/images/background_dino.png"
    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h)
    }
    move(){
        this.x += this.vx
        if (this.x <= -this.w){
            this.x = 0
        }
    }
}