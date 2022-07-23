import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Usuario } from '../PrototypeUser/Usuario';
import { AuthService } from '../../../services/auth-service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthService:AuthService) { }

  objetoUsuario: Usuario = {
    type:'',
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
    this.AuthService.RegistrarUserService(this.objetoUsuario);
    console.log(this.usuariosService);
  }

}
