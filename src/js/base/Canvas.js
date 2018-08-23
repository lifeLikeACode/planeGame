export class Canvas {
  constructor() {
    this.ctx = null
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
    this.ctx.width = window.innerWidth
    this.ctx.height = window.innerHeight
  }
}