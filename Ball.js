class Ball
{
    constructor(x,y,w)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.options={
            density:1.1,
            isStatic:false,
            friction:2.2,
            restitution:1.09
        }
        this.body=Bodies.circle(this.x,this.y,this.w/2,this.options);
        console.log(this.body.position);
        World.add(world,this.body);
    }
    display()
    {
        ellipseMode(RADIUS);
        fill("yellow");
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.w);
        pop();
    }
}