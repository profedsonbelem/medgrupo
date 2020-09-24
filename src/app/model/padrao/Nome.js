class  Nome{
     
    constructor(key="nome", value="none"){
         this.key = key;
         this.value = value; 
     }
     
     toString(){
          
        return  `${this.key}:    ${this.value}   ` ;
    }
   
   
   

}

module.exports = Nome;