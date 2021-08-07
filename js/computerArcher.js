class ComputerArcher {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h)

        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/computerArcher.png");
    
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
    }
}