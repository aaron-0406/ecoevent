import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Usuario } from '../Model/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  usuarios: Usuario[] = [];

  objetoUsuario: Usuario = {
    nombres:'',
    apellidos:'',
    email:'',
    contra:'',
  };

  register(u : Usuario){

    this.usuarios.push(u);
    console.log(u.nombres);
    this.objetoUsuario.nombres="";
    this.objetoUsuario.apellidos="";
    this.objetoUsuario.email="";
    this.objetoUsuario.contra="";

  }
}
