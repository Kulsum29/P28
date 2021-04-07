class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(x , y , 22 , options);
        this.radius=22;
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("mediumpurple")
        imageMode(CENTER)
        image(this.image,0,0,this.radius*3,this.radius*3)
        pop();
    }
}