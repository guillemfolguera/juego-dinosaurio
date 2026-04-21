class Skull{
    constructor(ctx, x, y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 140
        this.h = 70
        this.vx = BACKGROUND_SPEED

        this.img = new Image()
        this.img.src = "assets/images/skull.png"
    }
    
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    move(){
        this.x += this.vx
    }
}