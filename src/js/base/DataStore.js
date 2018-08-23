export class DataStore {
  constructor() {
    this.map = new Map()
    this.instance = null
  }
  put(key, value) {
    
    if(typeof value === 'function'){
      value = new value()
    }
    this.map.set(key,value)
    return this
  }
  get (key) {
    return this.map.get(key)
  }
  destroy () {
    for(let value of this.map.values()){
      value = null
    }
  }

  static getInstance() {
    if(!this.instance){
      this.instance = new DataStore()
    }
    return this.instance
  }
}