class Posicao{
     
    constructor(key="posicao", value="none"){
         this.key = key;
         this.value = value; 
     }
     
     toString(){
          
        return  `${this.key} : ${this.value}  ` ;
    }
   

}

module.exports = Posicao;