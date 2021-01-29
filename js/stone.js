class Stone{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0.5,
            friction :1,
            density :0.5,
            }

        this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	
	}
            
 

        display()
        {
			var stonePos=this.body.position;
			push();
			translate (stonePos.x,stonePos.y);
			imageMode(CENTER);
			image(this.image,0,0,this.r,this.r);
			
			pop();
            
	 } 
	}       
    