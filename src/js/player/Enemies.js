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
        this.timer = null
        this.isPlayAnimation = false
        this.boomImage = Sprite.getImage('boom')
        this.startTime = null
        this.currentTime = null
        this.deltaTime = null
        this.imageX = [0,80,80+91,80+91+90,80+91+90 + 81,80+91+90+81+79,80+91+90+81+79+70]
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
            
            
           
            // if (this.index < 6) {
            //     console.log(this.index)
            //     let currentImage = this.boomImage.width * this.index
            //     this.cY += this.speedMove
            //     //this.index += .1
            //     super.draw(this.boomImage, this.imageX[this.index], 0, this.boomImage.width / 6, this.boomImage.height, this.cX, this.cY, this.cWidth, this.cHeight)
            // } else {

            //     this.isPlayAnimation = false
            //     clearInterval(this.timer)
                
            //     console.log('clear')
            //     cb && cb()
            // }
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
        }else{
            //let currentImage = this.boomImage.width * this.index
            if(this.isPlayAnimation){
                
                this.currentTime = new Date().getTime()
                this.deltaTime += (this.currentTime - this.startTime)
                if(this.deltaTime >= 300) {
                    // console.log('执行index++操作',this.deltaTime,this.index,this.boomImage.width  / 6 * this.index)
                    this.deltaTime = 0
                    if (this.index < 6) {
                        this.index += 1
                        //this.cY += this.speedMove
                    } else {
                        this.isPlayAnimation = false
                    }
                    this.startTime = this.currentTime
                }
            }
            this.cY += this.speedMove
            super.draw(this.boomImage, this.imageX[this.index], 0, this.boomImage.width / 6, this.boomImage.height, this.cX, this.cY, this.boomImage.width / 6 / 2, this.boomImage.height / 2)
            
        }

    }

    //飞机向下移动
    move() {

    }
}