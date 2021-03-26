class Wall
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.height=height;
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.height,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        fill("red");
        noStroke();
        rect(pos.x,pos.y,this.w,this.height);
    }
}