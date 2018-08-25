import { Camera } from "../Camera";

export class BackGroundMusic {
  constructor(src) {
    const camera = new Camera()
    this.src = src
    this.id = camera.frame
    this.el = null
    this.initAudio() 
  }

  initAudio() {
    debugger
    this.el = document.createElement('audio')
    document.body.appendChild(this.el)
    // this.el.id = this.id
    this.el.src = this.src
    
  }
  play(){
    this.el.play()
  }
}