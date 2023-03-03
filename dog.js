export default class Dog{
    constructor(data){
        Object.assign(this, data)
    }

    liked(){
        this.hasBeenSwiped = true 
        this.hasBeenLiked = true
    }

    notLiked(){
        this.hasBeenSwiped = true 
    }
}


