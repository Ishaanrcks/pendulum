class constraints{
    constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1,
          length:100
  
  
      }
      this.pointB=pointB
      this.j=Constraint.create(options);
      World.add(world,this.j);
      
     }
  display(){
      var a=this.j.bodyA.position;
      var b=this.pointB;
      fill(0);
      
     line(a.x,a.y,b.x,b.y);
  
  }
  
  }