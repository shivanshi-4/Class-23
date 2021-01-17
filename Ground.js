class Ground{
    constructor(){
        var options={
            isStatic:true
          }
          this.body=Bodies.rectangle(200,380,width,20,options);
          World.add(world,this.body);
        
    }

     display(){
        rectMode(CENTER)
        fill (255)
        rect(this.body.position.x,this.body.position.y,width,20) 

    }
}