import { Resource } from './Resource'
import { DataStore } from './DataStore';
export class ResourceLoader {
    constructor() {
        this.res = new Resource().imgList

        this.map = new Map(this.res)
        this.imgListLen = 0
        for (let [key, value] of this.map) {
            if (typeof value === 'object') {
                value.forEach((item) => {
                    this.imgListLen += 1
                    const img = new Image()
                    img.src = value
                    this.map.get(key).push(img)
                })
            } else {
                this.imgListLen += 1
                const img = new Image()
                img.src = value
                this.map.set(key, img)
            }

        }


    }

    onLoad(callback) {
        let count = 0
        for (let value of this.map.values()) {
            if (value instanceof Array) {
                value.forEach((item) => {
                    item.onload = () => {
                        count++
                        if (count === this.imgListLen) {
                            callback(this.map)
                        }
                    }
                })

            } else {
                value.onload = () => {
                    count++
                    if (count === this.imgListLen) {
                        callback(this.map)
                    }
                }
            }
        }
    }
}