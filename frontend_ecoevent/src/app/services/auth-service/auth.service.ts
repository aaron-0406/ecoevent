import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Usuario } from 'src/app/Components/User/PrototypeUser/Usuario';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router,private dialogRef:MatDialog) { }

  usuarios: Usuario[] = [
    new Usuario("1","Luis","Silva","Balladares@hotmail.com","666"),
    new Usuario("2","Angie","Cabanillas","Cabanillas@hotmail.com","666"),
    new Usuario("3","Lurdes","Cornejo","Cornejo@hotmail.com","666"),
    new Usuario("4","Aaron","Paredes","Pares@hotmail.com","666"),
    new Usuario("5","Kiara","Requenes","Requenes@hotmail.com","666"),
  ];

  RegistrarUserService(user:Usuario){
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

  ModificarUserService(idRecibido:number,Nombres:String,Apellidos:String,Correo:String,){
    this.usuarios[idRecibido].nombres = Nombres; 
    this.usuarios[idRecibido].apellidos = Apellidos;
    this.usuarios[idRecibido].email = Correo; 
    let id = this.usuarios[idRecibido].id;
    this.route.navigate(['/profile',id]);
  }
  CancelActionMod_Elim(id:number){
    this.route.navigate(['/profile',id]);
  }

  EliminacionUser(id:number){
    this.usuarios.splice(id,id+1) 
    console.log(id);
    
    console.log(this.usuarios)
  }
}
