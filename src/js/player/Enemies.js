import { Sprite } from "../base/Sprite";

export class Enemies extends Sprite {
    constructor() {
        const image = Sprite.getImage('enemies')
        const scale = 2
        const left = 0 + image.width / 2
        const right = window.innerWidth
        const cX = Math.random() * (right - left)
        const clippingLeft = 40
        const clippingRight = 40
        const clippingTop = 42
        const clippingBottom = 40
        const cY = -(image.height - clippingTop - clippingBottom) / scale

        super(image,
            clippingLeft, clippingTop,
            image.width - clippingLeft - clippingRight, image.height - clippingTop - clippingBottom,
            cX, cY,
            (image.width - clippingLeft - clippingRight) / scale, (image.height - clippingTop - clippingBottom) / scale
        )
        this.speedScale = Math.random() * (8 - 3) + 3
        this.blood = 3
        this.speedMove = this.speedScale
        this.moveY = 0
        this.isVisible = true
        this.index = 0
        this.isPlayAnimation = false
        this.boomImage = Sprite.getImage('boom')
        this.startTime = null
        this.currentTime = null
        this.deltaTime = null
        this.imageX = [0, 80, 170, 260, 339, 415]
    }

    border() {
        return {
            left: this.cX,
            right: this.cX + this.cWidth,
            top: this.cY,
            bottom: this.cY + this.cHeight
        }
    }
    draw() {
        if (this.isVisible) {
            this.cY += this.speedMove
            super.draw(this.image,
                this.srcX, this.srcY,
                this.srcW, this.srcH,
                this.cX, this.cY,
                this.cWidth, this.cHeight
            )
        } else {
            if (this.isPlayAnimation) {

                this.currentTime = new Date().getTime()
                this.deltaTime += (this.currentTime - this.startTime)
                if (this.deltaTime >= 300) {
                    this.deltaTime = 0
                    if (this.index < 6) {
                        this.index += 1
                    } else {
                        this.isPlayAnimation = false
                    }
                    this.startTime = this.currentTime
                }
            }
            let cWidth = 0
            if (this.index === 0) {
                cWidth = this.imageX[this.index] / 2
            } else {
                cWidth = (this.imageX[this.index] - this.imageX[this.index - 1]) / 2
            }

            this.cY += this.speedMove
            super.draw(this.boomImage, this.imageX[this.index], 0, this.boomImage.width / 6, this.boomImage.height, this.cX, this.cY, cWidth, this.boomImage.height / 2)

        }

    }

    //飞机向下移动
    move() {

    }
}