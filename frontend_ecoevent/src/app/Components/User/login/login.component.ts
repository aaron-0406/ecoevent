import { Component, OnInit } from '@angular/core';

import { Usuario } from '../Model/Usuario'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Datos de login
  email: string = '';
  contra: string = '';

  //Mostrar error
  showError: boolean = false;
  messageError: string = '';

  private profile: Usuario | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
