import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms'; //Trabajar con formularios

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EventoComponent } from './Components/evento/evento.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './Components/layouts/navbar/navbar.component';
import { LayoutComponent } from './Components/layouts/layout/layout.component';
import { FooterComponent } from './Components/layouts/footer/footer.component';
import { CrearEventoComponent } from './Components/evento/crear-evento.component';

const routes:Routes=[
  { path: '', redirectTo: '/eventos', pathMatch: 'full'},
  { path: 'eventos', component: EventoComponent},
  { path: 'eventos/nuevo', component: CrearEventoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CrearEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule, 
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
