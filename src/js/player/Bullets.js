import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class Bullets extends Sprite {
    constructor() {
        const image = Sprite.getImage('bullet')
        const hero = DataStore.getInstance().get('hero')
        const scale = 4
        const bulletX = hero.cX + hero.cWidth / 2 - image.width / scale / 2
        const bulletY = hero.cY - image.height / scale

        super(image,
            0, 0,
            image.width, image.height,
            bulletX, bulletY,
            image.width / scale, image.height / scale
        )
        this.speedMove = 10

        //this.bulletFireY = bulletY
    }

    border() {
        return {
            left: this.cX,
            right: this.cX + this.cWidth,
            top: this.cY,
            bottom: this.cY + this.cHeight,
        }
    }

    draw() {
        this.cY -= this.speedMove


        super.draw(this.image, this.srcX, this.srcY, this.srcW, this.srcH, this.cX, this.cY, this.cWidth, this.cHeight)


    }
}