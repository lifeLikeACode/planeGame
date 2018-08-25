import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";

export class Hero extends Sprite{
  constructor() {
    const image = Sprite.getImage('hero')
    //飞机在屏幕中的缩放比例
    const scale = 3

    super(image,
          0,0,
          image.width, image.height,
          ( window.innerWidth - image.width / scale ) / 2, window.innerHeight - image.height / scale,
          image.width / scale,image.height / scale
        )

    this.isTouchHero = false

    // this.heroBorder = {
    //   left: this.cX,
    //   right: this.cX + this.cWidth,
    //   top: this.cY,
    //   bottom:this.cY + this.cHeight,
    // }
    console.log(this.cY)
  }
  border() {
    return {
      left: this.cX,
      right: this.cX + this.cWidth,
      top: this.cY,
      bottom:this.cY + this.cHeight,
    }
  }
  //手指是否接触在飞机上
  isTouchingIn(x,y) {
    const hero = DataStore.getInstance().get('hero')
    if(x > hero.cX && 
      x < (hero.cX + hero.cWidth) &&
      y > hero.cY &&
      y<hero.cY + hero.cHeight
    ){
      this.isTouchHero = true
    } else {
      this.isTouchHero = false
    }
    console.log(this.isTouchHero)
  }

  
  //飞机驶入游戏界面
  flying() {

  }

  //射击
  _fire() {

  }

  // draw() {
  //   this._fire()

  //   super.draw()
  // }
}