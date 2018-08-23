import { DataStore } from "./DataStore";

export class Sprite {
  constructor(image = null,srcX,srcY,srcW,srcH,cX,cY,cWidth,cHeight) {
    this.dataStore = DataStore.getInstance()
    this.ctx = this.dataStore.ctx
    this.image = image

    this.srcX = srcW
    this.srcY = srcY
    this.srcW = srcW
    this.srcH = srcH

    this.cX = cX
    this.cY = cY
    this.cWidth = cWidth
    this.cHeight = cHeight
  }
  static getImage(key) {
    return DataStore.getInstance().resource.get(key)
  }

  draw() {
    this.ctx.drawImage(this.image,this.srcX,this.srcY, this.srcW, this.srcH,this.cX, this.cY,this.cWidth,this.cHeight)
  }
}