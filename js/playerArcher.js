class PlayerArcher {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h)

        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/playerArcher.png");
    
        World.add(world, this.body);
    }
    display(){
        if(keyIsDown(RIGHT_ARROW)&&this.angle<0.35){
            this.angle += 0.02
          }
          if(keyIsDown(LEFT_ARROW)&&this.angle>-1.45){
            this.angle -= 0.02
          }
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
    }
}