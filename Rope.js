class Rope
{
    constructor(bodyA,bodyB,xOff,yOff)
    {
        this.xOff=xOff;
        this.yOff=yOff;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.xOff,y:this.yOff}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        var PointA=this.rope.bodyA.position;
        var PointB=this.rope.bodyB.position;

        var anc1AX=PointA.x;
        var anc1AY=PointA.y;

        var anc2AX=PointB.x+this.xOff;
        var anc2AY=PointB.y+this.yOff;

        line(anc1AX,anc1AY,anc2AX,anc2AY);
    }
}