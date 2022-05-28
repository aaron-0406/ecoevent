import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Eventos } from './evento.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent implements OnInit {
  constructor(
    private _eventoService: EventoService,
    private rutaEvento: ActivatedRoute,
    private router: Router
  ) {}
  index: number = this.rutaEvento.snapshot.params['id'];

  ngOnInit(): void {}

  eventoCreado: Eventos = {
    id: '',
    titulo: '',
    descripcion: '',
    lugar: '',
    fecha: '',
    hora: '',
    foto: '',
  };

  accion: boolean = this._eventoService.listEventos[this.index - 1]
    ? false
    : true;

  eventoMostrar: Eventos = this._eventoService.listEventos[this.index - 1]
    ? this._eventoService.listEventos[this.index - 1]
    : this.eventoCreado;

  crearEvento() {
    console.log({ dd: this.eventoMostrar });
    if (this.eventoCreado.titulo) {
      this._eventoService.crearEvento({
        ...this.eventoMostrar,
        id: String(this._eventoService.listEventos.length + 1),
      });
      this.router.navigate(['/eventos']);
    }
  }

  editarEvento() {
    this._eventoService.editarEvento(this.eventoMostrar);
    this.router.navigate(['/eventos']);
  }
}
