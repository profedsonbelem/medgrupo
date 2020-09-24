const Nome = require("./padrao/Nome");
const Email = require("./padrao/Email");
const Password = require("./padrao/Password");
const Matricula = require("./padrao/Matricula");

class User{ 
 

     constructor(matricula =0 ,  nome = "", password="", email=""){
         this.matricula = new Matricula("matricula",matricula);
         this.nome = new Nome("nome", nome);
         this.password = new Password("password",password);
         this.email =new Email("email", email);
     }

     setMatricula(value=0){
        this.matricula.key="matricula";
        this.matricula.value=value;
     }

     getMatricula(){
        return this.matricula.value; 
     }

     getNome(){
          return this.nome.value; 
    }

      setNome(value=""){
        this.nome.key="nome";
        this.nome.value=value;
      }

     getNome(){
          return this.nome.value; 
       }

       setEmail(value=""){
        this.email.key="email";
        this.email.value=value;
     }


     getEmail(){
          return this.email.value; 
       }

       setEmail(value=""){
        this.email.key="email";
        this.email.value=value;
     }


     getEmail(){
          return this.email.value; 
       }

       setPassword(value=""){
        this.email.key="password";
        this.email.value=value;
     }


     getPassword(){
          return this.password.value; 
       }


    toString(){ 
     
      return  {  "dados": [this.matricula, this.nome, this.email, this.password ]    }   
      
   }

 
 


}

module.exports=User;