class lightning{
    constructor(x,y){
        this.x=x
        this.y=y
        this.thunder1=loadImage("1.png")
        this.thunder2=loadImage("2.png")
        this.thunder3=loadImage("3.png")
        this.thunder4=loadImage("4.png")

    }
     display(){


    rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount
        thunder= createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
         case 1: thunder.addImage(this.thunder1)
         break;
         case 2: thunder.addImage(this.thunder2)
          break;
        default: break

        }
         thunder.scale=random(0.3,0.6)
    }
    }


    
}