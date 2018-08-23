import {Resource} from './Resource'
import { DataStore } from './DataStore';
export class ResourceLoader {
  constructor() {
    this.res = new Resource().imgList

    this.map = new Map(this.res)

    for(let [key,value] of this.map){
      const img = new Image()
      img.src = value
      this.map.set(key, img)
    }
    
  }

  onLoad(callback) {
    let count = 0
    for(let value of this.map.values()){
      
      value.onload = () => {
        count ++
        if(count === this.map.size ){
          callback(this.map)
        }
      }
    }
  }
}