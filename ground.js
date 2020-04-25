class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.ground = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.ground);
     this.width = width;
     this.height = height;
    
    }
    display(){
        var Pos = this.ground.position;
       rectMode(CENTER);
       rect(Pos.x,Pos.y,this.width,this.height);
    }
}