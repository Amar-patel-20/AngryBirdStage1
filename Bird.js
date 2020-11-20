class Bird{
    constructor(x,y){
        var options={
          //isStatic: true
          restitution: 0.5,
          friction: 1.0,
          density: 1.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(myworld,this.body)
    }  
    display(){
        var pos = this.body.position;
        pos.y = mouseY
        pos.x = mouseX
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("blue")
        fill("red")
        rect(0,0,this.width,this.height);
        pop();
    }
  }