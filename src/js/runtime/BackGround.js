import { Sprite } from "../base/Sprite.js";

export class BackGround extends Sprite{
  constructor() {
    const image = Sprite.getImage('background')
    super(image,0,0,image.width,image.height,0,0,window.innerWidth,window.innerHeight)
    this.backgroundY = 0
    this.speedMove = 1
  }

  border() {
    return {
      left: 0,
      right : window.innerWidth,
      top: 0,
      bottom: window.innerHeight
    }
  }

  draw() {
    this.backgroundY += this.speedMove
    if(this.backgroundY >= this.cHeight){
      this.backgroundY = 0
    }
    super.draw(this.image,this.srcX,this.srcY, this.srcW, this.srcH,this.cX, this.backgroundY - this.cHeight,this.cWidth,this.cHeight)
    super.draw(this.image,this.srcX,this.srcY, this.srcW, this.srcH,this.cX, this.backgroundY,this.cWidth,this.cHeight)
  }
}