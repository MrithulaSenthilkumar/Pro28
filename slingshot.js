class Slingshot{
    constructor(bodyA,pointB){
    var options={
     
        bodyA:bodyA,
        pointB:pointB,
        length:1,
        striffness:0.004,
    }
    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot);
    this.bodyA=bodyA;
    this.pointB=pointB;
    }
    fly(){
        this.slingshot.bodyA = null;

    }
	    
attach(body){
this.slingshot.bodyA=body;
}

    display(){
if(this.slingshot.bodyA){
var pointA=this.bodyA.position;
var pointB=this.pointB;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
    }

    
}