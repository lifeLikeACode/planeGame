import bg from '../../res/bg.jpg'
import bullet from '../../res/bullet.png'
import enemy from '../../res/enemy.png'
import hero from '../../res/hero.png'
import boom from '../../res/boom.png'
export class Resource {
    constructor() {

        this.imgList = [
            ['background', bg],
            ['bullet', bullet],
            ['enemies', enemy],
            ['hero', hero],
            ['boom', boom]
        ]
    }
}