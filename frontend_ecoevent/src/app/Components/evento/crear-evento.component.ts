import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Eventos } from './evento.component';

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

  eventoMostrar: Eventos = this._eventoService.listEventos[this.index - 1];

  ngOnInit(): void {}

  editarEvento() {
    this._eventoService.editarEvento(this.eventoMostrar);
    this.router.navigate(['/eventos']);
  }
}
