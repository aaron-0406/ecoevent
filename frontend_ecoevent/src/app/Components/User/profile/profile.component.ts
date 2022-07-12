import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Usuario } from '../Model/Usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  id:String='';
  Nombres:String='';
  Apellidos:String=''; 
  Correo:String=''; 
  

  constructor(private routeCaptureid:ActivatedRoute, private serviceAuth:AuthService){ }
  usuarioData: Usuario [] = this.serviceAuth.usuarios;
  
  ngOnInit(): void {
    this.id = this.routeCaptureid.snapshot.params['id'];
    let userId = this.serviceAuth.CapturarUserService(this.id);
    let id = Number(userId);
    console.log(id);
    
    this.Nombres = this.usuarioData[id].nombres; 
    this.Apellidos = this.usuarioData[id].apellidos; 
    this.Correo = this.usuarioData[id].email; 
  }


  

}
