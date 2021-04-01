class Paper {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.8 
        }
        this.xpos=x;
        this.ypos=y;
        this.radius=r;
        this.paperBody=Bodies.circle(x,y,r/2,options);
        World.add(world,this.paperBody);
        console.log(this.paperBody);
        

    }
    display() {
        push();
        translate(this.paperBody.position.x,this.paperBody.position.y);
        rectMode(CENTER);
        fill("blue");
       ellipse(0,0,this.r,this.r);
        pop();
   }

}