export class Usuario{
  type:String='';
  id:String=''; 
  nombres:String='';
  apellidos:String='';
  email:String='';
  contra:String='';

  constructor(type:String,id:String,nombres:String,apellidos:String,email:String,contra:String,){
    this.type = type; 
    this.id = id; 
    this.nombres = nombres; 
    this.apellidos = apellidos; 
    this.email = email; 
    this.contra = contra; 
  }
}
