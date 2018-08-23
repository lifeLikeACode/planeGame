import { DataStore } from "./base/DataStore";

//控制游戏逻辑的函数
export class Camera {
  constructor() {
    this.instance = null
    this.isGameOver = false
    this.dataStore  = DataStore.getInstance()
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new Camera()
    }
    return this.instance
  }

  run() {
    this.dataStore.get('background').draw()
  }


}