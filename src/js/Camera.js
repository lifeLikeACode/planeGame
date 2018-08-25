import { DataStore } from "./base/DataStore";
import { Bullets } from "./player/Bullets";
import { Enemies } from "./player/Enemies";

//控制游戏逻辑的函数
export class Camera {
  constructor() {
    this.instance = null
    this.isGameOver = false
    this.rafId = null
    this.dataStore  = DataStore.getInstance()
    this.frame = 0
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new Camera()
    }
    return this.instance
  }

  bulletCollisionWall() {
    const background = this.dataStore.get('background')
    const wallBorder = background.border()
    const bullets = this.dataStore.get('bullets')
    for(let i = 0; i < bullets.length ;i++) {
      const bullet = bullets[i]
      const bulletBorder = bullet.border()
      if(bulletBorder.top < wallBorder.top) {
        bullets.shift()
      }
    }
  }
  heroCollisionWall () {
    const hero = this.dataStore.get('hero')
    const background = this.dataStore.get('background')
    const heroBorder = hero.border()
    const wallBorder = background.border()
    if(heroBorder.left + hero.cWidth / 2 <= wallBorder.left ){
      hero.cX = wallBorder.left - hero.cWidth / 2
    }
    if(heroBorder.right - hero.cWidth / 2  >= wallBorder.right ){
      hero.cX = wallBorder.right - hero.cWidth / 2
    }
    if(heroBorder.top <= wallBorder.top ){
      hero.cY = wallBorder.top 
    }
    if(heroBorder.bottom >= wallBorder.bottom ){
      hero.cY = wallBorder.bottom - hero.cHeight
    }
  }

  enemiesCollisionWall() {
    const enemies = this.dataStore.get('enemies')
    const background = this.dataStore.get('background')
    const wallBorder = background.border()
    for(let i = 0; i<enemies.length;i++) {
      const enemy = enemies[i]
      const enemyBorder = enemy.border()
      if(enemyBorder.bottom > wallBorder.bottom){
        enemies.splice(i,1)
        console.log(enemies.length)
      }
    }
  }
  enemiesCollisionHero(){
    const hero = this.dataStore.get('hero')
    
    const heroBorder = hero.border()

    const enemies = this.dataStore.get('enemies')

    for(let j = 0; j<enemies.length;j++) {
      const enemy = enemies[j]
      const enemyBorder = enemy.border()
      if(enemyBorder.right >= heroBorder.left &&
        enemyBorder.left <= heroBorder.right &&
        enemyBorder.top <= heroBorder.bottom &&
        enemyBorder.bottom >= heroBorder.top
      )
      {
        this.isGameOver = true
      }
    }
  }
  bulletCollisionEnemies() {
    const enemies = this.dataStore.get('enemies')
    const bullets = this.dataStore.get('bullets')
    for(let i = 0; i < bullets.length ;i++) {
      const bullet = bullets[i]
      const bulletBorder = bullet.border()
      for(let j = 0; j<enemies.length;j++) {
        const enemy = enemies[j]
        const enemyBorder = enemy.border()
        if(bulletBorder.right >= enemyBorder.left &&
           bulletBorder.left <= enemyBorder.right &&
           bulletBorder.top <= enemyBorder.bottom 
        )
        {
          enemies.splice(j,1)
          bullets.splice(i,1)
          break
        }
      }
    }
  }
  
  check() {
    this.enemiesCollisionWall()
    this.bulletCollisionEnemies()
    this.bulletCollisionWall()
    this.enemiesCollisionHero()
  }
  createBullet() {
    this.dataStore.get('bullets').push(new Bullets())
  }

  createEnemies() {
    
    this.dataStore.get('enemies').push(new Enemies())
  }

  run() {
    if(this.isGameOver){
      cancelAnimationFrame(this.rafId)

    }else{
      this.frame ++
      const background = this.dataStore.get('background')
      const bullets = this.dataStore.get('bullets')
      const enemies = this.dataStore.get('enemies')

      
      background.draw()
      if(this.frame % 20 === 0){
        this.createBullet()
      }
      if(this.frame % 30 === 0){
        this.createEnemies()
      }
      enemies.forEach((enemy) => {
        enemy.draw()
      })
      bullets.forEach((bullet) => {
        bullet.draw()
      })
      
      this.dataStore.get('hero').draw()


      this.check()
      this.rafId = requestAnimationFrame(() => {this.run()})
    }
  }
}