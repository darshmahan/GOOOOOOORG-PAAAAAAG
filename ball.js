class Ball{

constructor(x,y,radius){
var options={
restitution:0.2,
density:1.3

}
 this.body=Bodies.circle(x,y,radius,options)  
 this.radius=radius
 World.add(world,this.body)
 
}
display(){
var pos=this.body.position
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)

}

}