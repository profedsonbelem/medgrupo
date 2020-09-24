class  Nota{ 

    constructor(key="nota", value=0){
         this.key = key;
         this.value = value; 
     }
     
     toString(){
          
        return  `${this.key}: ${this.value} ` ;
    }

}

module.exports = Nota;