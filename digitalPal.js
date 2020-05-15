class DigitalPal {
    constructor(){ 
        this.hungry = false
        this.sleep = false
        this.bored = true
        this.age = 0
        this.outside = false
        this.houseCondition = 100

        this.feed = () => {
            if (this.hungry) {
                console.log('That was yummy!')
                this.hungry = false
                this.sleepy = true
            } else {
                console.log('No thanks!')
            }
        }
        this.sleep = () => {
            if (this.sleepy) {
                console.log('zzzzzzz')
                this.sleepy = false
                this.bored = true
                this.increaseAge()
            }   else {
                console.log('No way! I am not tired')
            }
        }
        this.play = () => {
            if (this.bored) {
                console.log('Yay! Lets play!')
                this.bored = false
                this.hungry = true
            }   else {
                console.log('not right now')
            }
        }
        this.increaseAge = () => {
            this.age += 1
            console.log(`Happy Birthday to me! I am ${this.age} years old`)
        }
        this.bark = () => {
            console.log('Woof!')
        }
        this.goOutside = () => {
            if (this.outside) {
                console.log('We are outside already')
            }   else {
                console.log('Yay, I love outdoors')
                this.outside = true
                this.bark()
            }
        }

        this.gotInside = () => {
            if (this.outside) {
                console.log('Do we have to? fine')
                this.outside = false
            } else {
                console.log('I am already inside')
            }
        }
        this.meow = () => {
            console.log('meow')
        }
        this.destroyFurniture = () => {
            if (this.houseCondition > 0) {
            this.houseCondition -= 10
            console.log('Take that furniture!')
            this.bored = false
            this.sleepy = true
            }
        }
        this.buyNewFurniture = () => {
            this.houseCondition += 50
            console.log('Your sure?')
        }
    }
}

const dog = new DigitalPal()
dog.bark()
dog.goOutside()
dog.feed()
dog.destroyFurniture()
dog.buyNewFurniture()