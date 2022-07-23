import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from './evento';
export interface Eventos {
  id: string;
  titulo: string;
  descripcion: string;
  lugar: string;
  hora: string;
  fecha: string;
  foto: string;
}

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  listEventos: Evento[] = [];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'descripcion',
    'lugar',
    'hora',
    'fecha',
    'foto',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private _eventoService: EventoService) {}

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos() {
    this._eventoService.getEventos().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.listEventos = data;
    });
  }

  eliminarEvento(index: number) {
    this._eventoService.eliminarEvento(index).subscribe(() => {
      this.cargarEventos();
    });
  }
}
