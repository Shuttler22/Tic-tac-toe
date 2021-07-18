class Form {

    constructor() {
      
      this.button = createButton('Next');
      this.reset = createButton("Reset")
      this.back = createButton("Back")
          
    }
    hide(){
      
      this.button.hide();
           
    }
  
    display(){
    
    this.button.position(150, 100);
    this.reset.position(windowWidth - 100, 100)
    this.back.position(210, 100)
    
    
    this.button.mousePressed(()=>{
        
        
        gameState += 1
        this.button.hide();
        
    
       
       
      });

      this.back.mousePressed(()=>{

        gameState = gameState - 1

      })

      this.reset.mousePressed(()=>{

        gameState = 0})
      if(gameState === 2){
        this.button.hide()
      }
    
  }
}