class Heading {

    constructor() {
      
      this.button = createButton("PLAY");
    }
  
    display(){
      this.title.html("WELCOME TO THE FANTASY RUNNER");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      
  
      this.button.mousePressed(()=>{
        this.button.hide();
       
      })
  
      
     }
    }