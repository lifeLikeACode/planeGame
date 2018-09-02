import { DataStore } from "../base/DataStore";

export class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx
        this.cWidth = 50
        this.cHeight = 50
        this.number = 0
        this.flag = true
    }

    draw() {
        this.ctx.font = '25px Arial'
        this.ctx.fillStyle = '#ffcbeb'
        this.ctx.fillText(`得分${this.number}`, this.cWidth, this.cHeight, 1000)
    }
}