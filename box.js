class Box {
    constructor(x, y, width, height){

    var options = {
    
        isStatic:true
        
    }
    this.image=loadImage("DUSTBIN.png");
    this.body=Bodies.rectangle(x, y, width-100, height-100,options);
    this.width=width;
    this.height=height;

    World.add(world, this.body);
    }
     display(){
     push();
     imageMode(CENTER);
     fill("red");
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
     }
}
