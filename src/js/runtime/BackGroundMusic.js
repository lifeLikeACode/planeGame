import { Camera } from "../Camera";

export class BackGroundMusic {
    constructor(src, loop = false) {
        // const camera = new Camera()
        this.src = src
            // this.id = camera.frame
        this.el = null
        this.loop = loop
        this.initAudio()
    }

    initAudio() {
        this.el = document.createElement('audio')
        document.body.appendChild(this.el)
        this.el.loop = this.loop
            // this.el.id = this.id
        this.el.src = this.src

    }
    play() {
        this.el.play()
    }
    shootPlay() {
        this.el.currentTime = 0
        this.el.play()
    }
}