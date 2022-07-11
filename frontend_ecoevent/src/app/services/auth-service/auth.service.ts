import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Components/User/Model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
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

  LoginUserService(){
    
  }

  ModificarUserService(){

  }
}
