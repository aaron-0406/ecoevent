import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/Components/User/Model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  usuarios: Usuario[] = [
    new Usuario("001","Luis","Silva","Balladares@hotmail.com","666"),
    new Usuario("002","Angie","Cabanillas","Cabanillas@hotmail.com","666"),
    new Usuario("003","Lurdes","Cornejo","Cornejo@hotmail.com","666"),
    new Usuario("004","Aaron","Paredes","Pares@hotmail.com","666"),
    new Usuario("005","Kiara","Requenes","Requenes@hotmail.com","666"),
  ];

  ResgistrarUserService(user:Usuario){
    this.usuarios.push(user); 
  }

  CapturarUserService(){

  }

  LoginUserService(email:String,contra:String){
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].email == email && this.usuarios[index].contra == contra) {
        console.log("Usuario encontrado: " + this.usuarios[index]);
        let respuestaPositiva = this.usuarios[index]; 
        this.route.navigate(['/profile']); 
        return respuestaPositiva;

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
