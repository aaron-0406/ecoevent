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
import { NewsListComponentComponent } from './Components/News/news-list-component/news-list-component.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { NewsEditComponentComponent } from './Components/News/news-edit-component/news-edit-component.component';
import { NewsCreateEditComponentComponent } from './Components/News/news-create-edit-component/news-create-edit-component.component';
import { HomeComponentComponent } from './Components/Home/home-component/home-component.component';

// Card material

import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginComponent } from './Components/User/login/login.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { EditProfileComponentComponent } from './Components/User/profile/edit-profile-component/edit-profile-component.component';
import { AuthService } from './services/auth-service/auth.service';

const routes: Routes = [
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
  { path: 'profile', component: ProfileComponent},
  { path: 'edit-profile', component: EditProfileComponentComponent}


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
    MatCardModule
  ],
  exports: [MatTableModule, MatIconModule],
  providers: [EventoService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
