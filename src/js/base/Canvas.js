import { DataStore } from "./DataStore.js";
import { Camera } from "../Camera.js";

export class Canvas {
  constructor() {
    this.ctx = null
    // this.x = null
    // this.y = null
    this.hero = null
    this.create()
    this.init () 
  }
  create(){
    const root = document.createElement('canvas')
    root.id = 'canvas_game'
    document.body.appendChild(root)
    this.ctx = root.getContext('2d')
  }

  init () {
    // debugger
    // this.ctx.style.width = window.innerWidth + 'px'
    // this.ctx.style.height = window.innerHeight + 'px'
    this.ctx.canvas.width = window.innerWidth * 2
    this.ctx.canvas.height = window.innerHeight * 2
  }

  touchStart(e) {
    this.hero = DataStore.getInstance().get('hero')
    const x = e.targetTouches[0].clientX
    const y = e.targetTouches[0].clientY
    this.hero.isTouchingIn(x,y)
  }

  touchMove(e) {
    e.preventDefault()
    if(this.hero.isTouchHero){
      this.hero.cX = e.targetTouches[0].clientX - this.hero.cWidth / 2
      this.hero.cY = e.targetTouches[0].clientY - this.hero.cHeight / 2
    }
    Camera.getInstance().heroCollisionWall() 
  }

  touchEnd(e){
    if(!this.hero.isTouchHero){
      return  
    }
    this.hero.isTouchHero = false
    
  }
}