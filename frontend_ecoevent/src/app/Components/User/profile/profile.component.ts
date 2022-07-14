import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Usuario } from '../PrototypeUser/Usuario';
import { MatDialog } from '@angular/material/dialog';

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
  

  constructor(private routeCaptureid:ActivatedRoute, private serviceAuth:AuthService,private route:Router, private dialogRef:MatDialog){ }
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

  NavigateeditProfileUser(){
    this.id = this.routeCaptureid.snapshot.params['id'];
    let userId = this.serviceAuth.CapturarUserService(this.id);
    let id = Number(userId) + 1;
    this.route.navigate(['/edit-profile',id]);
  }

    DeleteUser(){
    this.id = this.routeCaptureid.snapshot.params['id'];
    let userId = this.serviceAuth.CapturarUserService(this.id);
    let id = Number(userId);
    this.serviceAuth.EliminacionUser(id)
    this.route.navigate(['/login']);
    console.log(this.usuarioData);
    
  }

  

}
