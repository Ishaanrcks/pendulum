class pendulum{
 constructor(){
     var options={
          friction:'0.01',
          density:'0.01'



     }
   this.body=Bodies.circle(400,0,20,options);
   World.add(world,this.body);
   this.x=200
   this.y=300

 }
 display(){
 var pos=this.body.position
 var angle=this.body.angle
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 ellipseMode(CENTER);
 ellipse(0,0,20,20)
 pop();  




 }




}