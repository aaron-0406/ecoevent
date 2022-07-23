import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'; //Trabajar con formularios

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EventoComponent } from './Components/evento/evento.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './Components/layouts/navbar/navbar.component';
import { LayoutComponent } from './Components/layouts/layout/layout.component';
import { FooterComponent } from './Components/layouts/footer/footer.component';
import { CrearEventoComponent } from './Components/evento/crear-evento.component';
import { EventoService } from './services/evento.service';
import { NewsListComponentComponent } from './Components/News/news-list-component-prototype/news-list-component.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { NewsEditComponentComponent } from './Components/News/news-edit-component-prototype/news-edit-component.component';
import { NewsCreateEditComponentComponent } from './Components/News/news-create-edit-component-prototype/news-create-edit-component.component';
import { HomeComponentComponent } from './Components/Home/home-component/home-component.component';

// Card material

import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginComponent } from './Components/User/login/login.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { EditProfileComponentComponent } from './Components/User/profile/edit-profile-component/edit-profile-component.component';
import { AuthService } from './services/auth-service/auth.service';
import { PuntoCreateEditComponentPrototypeComponent } from './Components/PuntoAcopio/punto-create-edit-component-prototype/punto-create-edit-component-prototype.component';
import { PuntoListComponentPrototypeComponent } from './Components/PuntoAcopio/punto-list-component-prototype/punto-list-component-prototype.component';

//Modal material 
import {MatDialogModule} from '@angular/material/dialog';
import { ListaEventoComponent } from './Usuario/Evento-User/lista-evento/lista-evento.component';
import { ListaHorarioComponent } from './Usuario/Horario-User/lista-horario/lista-horario.component';
import { ListaNewsComponent } from './Usuario/News-User/lista-news/lista-news.component';
import { ListaPuntoAcopioComponent } from './Usuario/PuntoAcopio-User/lista-punto-acopio/lista-punto-acopio.component';

const routes: Routes = [

//TODO ADMIN  
  // Eventos
  { path: 'eventos', component: EventoComponent },
  { path: 'eventos/create', component: CrearEventoComponent },
  { path: 'eventos/nuevo/:id', component: CrearEventoComponent },
  // News
  { path: 'newslist', component: NewsListComponentComponent },
  { path: 'nuevaNoticia', component: NewsCreateEditComponentComponent },
  { path: 'editar/:id', component: NewsCreateEditComponentComponent },
  // Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponentComponent },
  //register
  { path: 'register', component: RegisterComponent },
  //login
  { path: 'login', component: LoginComponent},
  //profile
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'edit-profile/:id', component: EditProfileComponentComponent},
  // Puntos de Acopio
  { path: 'puntoAcopio', component: PuntoListComponentPrototypeComponent },
  { path: 'nuevoPunto', component: PuntoCreateEditComponentPrototypeComponent },
  { path: 'editarPunto/:id', component: PuntoCreateEditComponentPrototypeComponent },

  //TODO USER

  {path: "ListNewsUser", component:ListaNewsComponent},
  {path: "ListHorarioUser", component:ListaHorarioComponent},
  {path: "ListEventoUser", component:ListaEventoComponent},
  {path: "ListPuntosAcopioUser", component:ListaPuntoAcopioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CrearEventoComponent,
    NewsListComponentComponent,
    NewsEditComponentComponent,
    NewsCreateEditComponentComponent,
    HomeComponentComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponentComponent,
    PuntoCreateEditComponentPrototypeComponent,
    PuntoListComponentPrototypeComponent,

    //TODO USER 

    ListaEventoComponent,
    ListaHorarioComponent,
    ListaNewsComponent,
    ListaPuntoAcopioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [MatTableModule, MatIconModule],
  providers: [EventoService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
