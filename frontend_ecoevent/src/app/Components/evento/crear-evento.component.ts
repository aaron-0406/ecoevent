import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from './evento';

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

  events: Evento[] = [];

  ngOnInit(): void {
    //get data from news
    this._eventoService.getEventos().subscribe((data) => {
      data.forEach((eventsData) => {
        if (eventsData.id_event == this.index) {
          this.eventoMostrar = eventsData;
        }
      });
    });
  }

  //para identificar 'editarNew'
  accion: boolean = this.events[this.index - 1] ? false : true;

  eventoMostrar: Evento = {
    id_event: 0,
    title: '',
    description: '',
    place: '',
    date: '',
    hour: '',
    urlEventImage: '',
  };

  crearEvento() {
    console.log({ ff: this.eventoMostrar });
    this._eventoService.crearEvento(this.eventoMostrar).subscribe();
    this.router.navigate(['/eventos']);
  }

  editarEvento() {
    this._eventoService.editarEvento(this.eventoMostrar);
    this.router.navigate(['/eventos']);
  }
}
