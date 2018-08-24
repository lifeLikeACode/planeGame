import { DataStore } from "./DataStore";

export class Sprite {
  constructor(image = null,srcX = 0,srcY = 0,srcW = 0,srcH = 0, cX = 0,cY = 0,cWidth = 0, cHeight = 0) {
    this.dataStore = DataStore.getInstance()
    this.ctx = this.dataStore.ctx
    this.image = image

    this.srcX = srcX
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

  draw(img = this.image, srcX = this.srcX, srcY = this.srcY, srcW = this.srcW, srcH = this.srcH, cX = this.cX, cY = this.cY,cWidth = this.cWidth, cHeight = this.cHeight) {
    this.ctx.drawImage(
        img,
        srcX,
        srcY,
        srcW,
        srcH,
        cX,
        cY,
        cWidth,
        cHeight
    );
}
}