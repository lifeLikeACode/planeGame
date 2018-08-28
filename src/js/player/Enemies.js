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
        this.speedMove = this.speedScale
        this.moveY = 0
        this.isVisible = true
        this.index = 0
        this.interval = 1000
        this.time = Symbol(new Date())
    }

    border() {
        return {
            left: this.cX,
            right: this.cX + this.cWidth,
            top: this.cY,
            bottom: this.cY + this.cHeight
        }
    }

    boom(cb) {
        if (this.isVisible) {
            this.image = Sprite.getImage('boom')
            const currentImage = this.image.width * this.index
            const self = this
            this.time = setInterval(() => {
                if (self.index < 6) {
                    self.index += 1
                    super.draw(this.image, currentImage, 0, this.image.width / 6, this.image.height, this.cX, this.cY, this.cWidth, this.cHeight)
                } else {
                    clearInterval(this.time)
                    cb && cb()
                }
            }, this.interval)

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
        }

    }

    //飞机向下移动
    move() {

    }
}