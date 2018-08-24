import { DataStore } from "./base/DataStore";
import { Bullets } from "./player/Bullets";

//控制游戏逻辑的函数
export class Camera {
  constructor() {
    this.instance = null
    this.isGameOver = false
    this.rafId = null
    this.dataStore  = DataStore.getInstance()
    this.wallBorder = {
      left: 0,
      right : window.innerWidth,
      top: 0,
      bottom: window.innerHeight
    }
    this.frame = 0
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new Camera()
    }
    return this.instance
  }

  collision () {
    const hero = this.dataStore.get('hero')
    
    hero.heroBorder = {
      left: hero.cX,
      right: hero.cX + hero.cWidth / 2,
      top: hero.cY,
      bottom:hero.cY + hero.cHeight,
    }
    if(hero.heroBorder.left + hero.cWidth / 2 <= this.wallBorder.left ){
      hero.cX = this.wallBorder.left - hero.cWidth / 2
    }
    if(hero.heroBorder.right >= this.wallBorder.right ){
      hero.cX = this.wallBorder.right - hero.cWidth / 2
    }
    if(hero.heroBorder.top <= this.wallBorder.top ){
      hero.cY = this.wallBorder.top 
    }
    if(hero.heroBorder.bottom >= this.wallBorder.bottom ){
      hero.cY = this.wallBorder.bottom - hero.cHeight
    }
  }
  //检测Hero是否触碰墙壁 或者飞机
  check() {
    
  }
  createBullet() {
    this.dataStore.get('bullets').push(new Bullets())
  }

  run() {
    this.frame ++
    this.dataStore.get('background').draw()
    this.dataStore.get('hero').draw()
    const bullets = this.dataStore.get('bullets')
    // if(!bullets.length){
    //   this.createBullet()
    // }else {
    if(this.frame % 20 === 0){

      this.createBullet()
      // }
    }
    bullets.forEach((bullet) => {
      bullet.draw()
    })
    
    for(let i = 0; i < bullets.length ;i++) {
      const bullet = bullets[i]
      const bulletBorder = {
        left: bullet.cX,
        right: bullet.cX + bullet.cWidth,
        top: bullet.bulletFireY,
        bottom: bullet.cY + bullet.cHeight
      }
      if(bulletBorder.top < this.wallBorder.top) {
        bullets.shift()
      }
    }


    this.check()
    this.rafId = requestAnimationFrame(() => {this.run()})
  }
}