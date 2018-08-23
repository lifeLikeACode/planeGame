import { ResourceLoader } from "./base/ResourceLoader.js";
import {Canvas} from './base/Canvas.js'
import {DataStore} from './base/DataStore.js'
import { Camera } from "./Camera.js";
import { BackGround } from "./runtime/BackGround.js";


// 游戏主函数、入口函数
export class Main {
  constructor() {
    this.canvas = new Canvas()
    this.ctx = this.canvas.ctx
    this.dataStore = DataStore.getInstance()
    this.camera = Camera.getInstance()
    this.resourceLoader = new ResourceLoader()
    this.resourceLoader.onLoad( (map) => {
      this.onResourceFirstLoaded(map)
    })
  }

  onResourceFirstLoaded(map) {
    this.dataStore.canvas = this.canvas
    this.dataStore.ctx = this.ctx
    this.dataStore.resource = map
    console.log(this.dataStore)
    this.init()
  }

  //初始化游戏
  init() {
    this.dataStore.put('background', BackGround)
    this.camera.run()
  }
}