import { ResourceLoader } from "./base/ResourceLoader.js";
import { Canvas } from './base/Canvas.js'
import { DataStore } from './base/DataStore.js'
import { Camera } from "./Camera.js";
import { BackGround } from "./runtime/BackGround.js";
import { Hero } from "./player/Hero.js";
import { BackGroundMusic } from "./runtime/BackgroundMusic.js";
import bgm from '../audio/bgm.mp3'
import { Boom } from "./runtime/Boom.js";

// 游戏主函数、入口函数
export class Main {
    constructor() {
        this.canvas = new Canvas()
        this.ctx = this.canvas.ctx

        this.bgmAudio = new BackGroundMusic(bgm, true)
        this.dataStore = DataStore.getInstance()
        this.camera = Camera.getInstance()
        this.resourceLoader = new ResourceLoader()
        this.resourceLoader.onLoad((map) => {
            this.onResourceFirstLoaded(map)
        })
    }

    onResourceFirstLoaded(map) {
        this.dataStore.canvas = this.canvas
        this.dataStore.ctx = this.ctx
        this.dataStore.resource = map

        this.init()

    }

    //初始化游戏
    init() {
        this.dataStore.put('background', BackGround).put('hero', Hero).put('bullets', []).put('enemies', []).put('boom', Boom)
        this.camera.isGamerOver = false
        this.camera.run()
        this.bgmAudio.play()
        this.bindEvent()
    }

    bindEvent() {
        this.canvas.ctx.canvas.addEventListener('touchstart', (e) => {
            this.canvas.touchStart(e)
        }, false)
        this.canvas.ctx.canvas.addEventListener('touchmove', (e) => {
            this.canvas.touchMove(e)
        }, false)
        this.canvas.ctx.canvas.addEventListener('touchend', (e) => {
            this.canvas.touchEnd(e)
        }, false)
    }
}