import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Usuario } from 'src/app/Components/User/Model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  usuarios: Usuario[] = [
    new Usuario("1","Luis","Silva","Balladares@hotmail.com","666"),
    new Usuario("2","Angie","Cabanillas","Cabanillas@hotmail.com","666"),
    new Usuario("3","Lurdes","Cornejo","Cornejo@hotmail.com","666"),
    new Usuario("4","Aaron","Paredes","Pares@hotmail.com","666"),
    new Usuario("5","Kiara","Requenes","Requenes@hotmail.com","666"),
  ];

  ResgistrarUserService(user:Usuario){
    this.usuarios.push(user); 
  }

  CapturarUserService(id:String){
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].id == id) { 
        return index; 
      }
      else{
        console.log("No lo encontre");
        
      }
    }
    return "UsuarioProfile"
  }

  LoginUserService(email:String,contra:String){
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].email == email && this.usuarios[index].contra == contra) {
        console.log("Usuario encontrado: " + this.usuarios[index]);
        let id = this.usuarios[index].id; 
        this.route.navigate(['/profile',id]); 
        return id;

      }
      else{
        let respuestaNegativa =console.log("Usuario no encontrado");
        return respuestaNegativa;   
      }
    }
  }

  ModificarUserService(){

  }
}
