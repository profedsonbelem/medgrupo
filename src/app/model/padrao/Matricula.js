class  Matricula{ 

    constructor(key="matricula", value=0){
         this.key = key;
         this.value = value; 
     }
     
     toString(){
          
        return  `${this.key}: ${this.value} ` ;
    }

}

module.exports = Matricula;