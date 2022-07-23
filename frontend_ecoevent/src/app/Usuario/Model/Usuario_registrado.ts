import { News } from "src/app/Components/News/Prototype/News";
import { Evento } from "src/app/Components/evento/evento";
export class Usuario_Registrado{
    type:String =''; 
    id:String=''; 
    nombres:String='';
    apellidos:String='';
    email:String='';
    contra:String='';
    NewsReaccion:News[] = [];
    EventosReaccion:Evento[] =[]; 
  
    constructor(type:String,id:String,nombres:String,apellidos:String,email:String,contra:String,NewsReaccion:News[],EventosReaccion:Evento[]){
      this.NewsReaccion = NewsReaccion; 
      this.EventosReaccion = EventosReaccion; 
      this.type = type; 
      this.id = id; 
      this.nombres = nombres; 
      this.apellidos = apellidos; 
      this.email = email; 
      this.contra = contra; 
    }
  }
  