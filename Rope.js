class Rope{
	constructor(pointA,bodyB)
	{

	//create rope constraint here
		var options={
			pointA:pointA,
			bodyB:bodyB,
			stiffness:1.3,
			length:290
		}
		this.rope= Constraint.create(options);
		World.add(world,this.rope);
	}


    //create display() here 
	display(){
		stroke("black");
		strokeWeight(2);

		line(this.rope.pointA.x,this.rope.pointA.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
	}

}
