class Password{
     
    constructor(key="password", value="none"){
         this.key = key;
         this.value = value; 
     }
     
     toString(){
          
        return  `${this.key}:   ${this.value} ` ;
    }
   

}

module.exports = Password;