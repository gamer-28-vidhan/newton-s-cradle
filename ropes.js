class rope{
    constructor(body1, body2, offsetX, offsetY){
        
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: {x:this.offsetX, y:this.offsetY}
            
        }

       
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }


    display(){
       
        var pointA = this.string.bodyA.position
        var pointB = this.string.bodyB.position
       var a1x = pointA.x
       var a1y = pointA.y
var a2x = pointB.x + this.offsetX
var a2y = pointB.y + this.offsetY

        strokeWeight(4);
        line(a1x, a1y, a2x, a2y);
    }




}







