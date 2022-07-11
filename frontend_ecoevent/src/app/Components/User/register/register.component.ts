import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Usuario } from '../Model/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthService:AuthService) { }

  objetoUsuario: Usuario = {
    id:'',
    nombres:'',
    apellidos:'',
    email:'',
    contra:'',
  };
  ngOnInit(): void {

  }
  usuariosService: Usuario[] = this.AuthService.usuarios; 


  registerService(){
    this.AuthService.ResgistrarUserService(this.objetoUsuario); 
    console.log(this.usuariosService);
  }

}
