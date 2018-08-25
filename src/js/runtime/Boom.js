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
        this.index = -1
    }
    draw(srcX, cX, cY) {
        this.srcX = srcX
        this.cX = cX
        this.cY = cY
        this.index += 1

        if (this.index < 6) {
            console.log('bofangdonghua')
            super.draw(this.image, this.srcX, this.srcY, this.srcW, this.srcH, this.cX, this.cY, this.cWidth, this.cHeight)
        }

    }
}