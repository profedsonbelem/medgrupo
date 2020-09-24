class Especialidade{
     
    constructor(key="email", value="none"){
         this.key = key;
         this.value = value; 
     }
     
     toString(){
          
        return  `${this.key} : ${this.value}  ` ;
    }
   

}

module.exports = Especialidade;