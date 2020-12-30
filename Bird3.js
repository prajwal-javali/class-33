class Bird3 extends BaseClass {
    constructor(x,y){
      super(x,y,70,70);
      this.image = loadImage("sprites/bird 3.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory =[];
      this.Visbility = 225;
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        push();
        this.Visbility -= 0.1;
        tint(225, this.Visbility);
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        pop();
      }
    }
  }
  