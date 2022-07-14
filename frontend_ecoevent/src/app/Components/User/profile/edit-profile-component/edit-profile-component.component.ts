import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Usuario } from '../../PrototypeUser/Usuario';

@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.css']
})
export class EditProfileComponentComponent implements OnInit {

  id:String = ''
  Nombres:String = ''
  Apellidos:String = ''
  Correo:String = ''
  Contraseña:String = ''
  UsuarioNew = ''

  constructor(private routeCaptureid:ActivatedRoute, private serviceAuth:AuthService,private route:Router) { }
  usuarioData: Usuario [] = this.serviceAuth.usuarios;
  
  ngOnInit(): void {
    this.id = this.routeCaptureid.snapshot.params['id'];
    let userId = this.serviceAuth.CapturarUserService(this.id);
    let id = Number(userId);

    this.Nombres = this.serviceAuth.usuarios[id].nombres
    this.Apellidos = this.serviceAuth.usuarios[id].apellidos
    this.Correo = this.serviceAuth.usuarios[id].email
  }

  ModificarInformacion(){
    this.id = this.routeCaptureid.snapshot.params['id'];
    let userId = this.serviceAuth.CapturarUserService(this.id);
    let id = Number(userId);
    
    this.serviceAuth.ModificarUserService(id,this.Nombres,this.Apellidos,this.Correo); 
    
  }
  RegresarPerfil(){
    this.id = this.routeCaptureid.snapshot.params['id'];
    let userId = this.serviceAuth.CapturarUserService(this.id);
    let id = Number(userId) + 1; // + 1 Debido a la generacion de valor 0 
    this.serviceAuth.CancelActionMod_Elim(id)
  }

}
