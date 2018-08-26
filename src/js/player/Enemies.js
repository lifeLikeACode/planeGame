import { Sprite } from "../base/Sprite";

export class Enemies extends Sprite {
    constructor() {
        const image = Sprite.getImage('enemies')
        const left = 0 + image.width / 2
        const right = window.innerWidth
        const enemyX = Math.random() * (right - left)
        const clippingLeft = 40
        const clippingRight = 40
        const clippingTop = 42
        const clippingBottom = 40

        const scale = 2
        super(image,
            clippingLeft, clippingTop,
            image.width - clippingLeft - clippingRight, image.height - clippingTop - clippingBottom,
            enemyX, 0,
            (image.width - clippingLeft - clippingRight) / scale, -(image.height - clippingTop - clippingBottom) / scale
        )
        this.speedScale = Math.random() * (8 - 3) + 3
        this.speedMove = this.speedScale
        this.moveY = 0

    }

    border() {
        return {
            left: this.cX,
            right: this.cX + this.cWidth,
            top: this.moveY,
            bottom: this.moveY + this.cHeight
        }
    }



    draw() {
        this.moveY += this.speedMove
        super.draw(this.image,
            this.srcX, this.srcY,
            this.srcW, this.srcH,
            this.cX, this.moveY,
            this.cWidth, this.cHeight
        )
    }

    //飞机向下移动
    move() {

    }
}