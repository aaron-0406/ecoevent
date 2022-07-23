import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  inicio:String = "" ;
  eventos:String = "" ;
  noticias:String = "" ; 
  puntoAcopio:String = "" ;

  constructor(private route:Router) { }
  ngOnInit(): void {
       
    let user = JSON.parse(String(localStorage.getItem("User")))
    console.log(user);
    if (user == null) {
      this.inicio = ""; 
      this.eventos = "/ListEventoUser";  
      this.noticias = "/ListNewsUser";
      this.puntoAcopio = "/ListPuntosAcopioUser";
    }
    else if(user.type == "User"){
      this.inicio = ""; 
      this.eventos = "/ListEventoUser";  
      this.noticias = "/ListNewsUser";
      this.puntoAcopio = "/ListPuntosAcopioUser";
    }
    else if (user.type == "Administrador") {
      this.inicio = ""; 
      this.eventos = "/eventos";  
      this.noticias = "/newslist";
      this.puntoAcopio = "/puntoAcopio";
    }
      
    
  }
  
  NavegaPerfil(){
    let user = JSON.parse(String(localStorage.getItem("User")))
    this.route.navigate(['/profile',user.id]);
  }

}
