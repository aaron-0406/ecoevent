import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

import { Usuario } from '../Model/Usuario'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private AuthService:AuthService) {}

  //Datos de login
  email: string = '';
  contra: string = '';

  //Mostrar error
  showError: boolean = false;
  messageError: string = '';

  ngOnInit(): void {
  }

  CreateSesion(){
    this.AuthService.LoginUserService(this.email,this.contra);    
  }
}
