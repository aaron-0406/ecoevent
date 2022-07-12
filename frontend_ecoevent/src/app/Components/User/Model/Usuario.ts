export class Usuario{
  id:String=''; 
  nombres:String='';
  apellidos:String='';
  email:String='';
  contra:String='';

  constructor(id:String,nombres:String,apellidos:String,email:String,contra:String,){
    this.id = id; 
    this.nombres = nombres; 
    this.apellidos = apellidos; 
    this.email = email; 
    this.contra = contra; 
  }
}
