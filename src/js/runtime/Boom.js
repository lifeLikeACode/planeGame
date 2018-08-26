import { Sprite } from "../base/Sprite";

export class Boom extends Sprite {
    constructor() {
        const image = Sprite.getImage('boom')
        const len = 6
        super(image,
            0, 0,
            image.width / len, image.height,
            0, 0,
            image.width / len, image.height
        )
        this.index = 0
        this.interval = 1000
        this.time = null
    }
    draw(cX, cY) {

        const currentImage = this.image.width * this.index
        this.cX = cX
        this.cY = cY
        const self = this
        this.time = setInterval(() => {
            if (self.index < 6) {
                self.index += 1
                console.log(self.index, currentImage)
                super.draw(this.image, currentImage, this.srcY, this.srcW, this.srcH, this.cX, this.cY, this.cWidth, this.cHeight)
            } else {
                clearInterval(this.time)
            }
        }, this.interval)


    }
}