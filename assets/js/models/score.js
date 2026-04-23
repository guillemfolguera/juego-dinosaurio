//crear método render, en vez de draw
//no se necesita ctx
class Score{
    constructor(){
        this.score = 0
        this.scoreElement = document.getElementById("scoring")
        this.count = 0
    }

    render(){
        this.count++
        if (this.count % 4 ===0){
            this.score ++
        }
        this.scoreElement.innerText = `Scoring: ${this.score}`
    return
    }
    
}


