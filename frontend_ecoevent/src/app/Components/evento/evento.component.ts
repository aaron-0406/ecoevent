import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventoService } from 'src/app/services/evento.service';
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
  

  listEventos: Eventos[] = [];

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

  constructor(private _eventoService: EventoService) {
  }

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos() {
    this.listEventos = this._eventoService.getEventos();
    this.dataSource = new MatTableDataSource(this.listEventos);
  }

  editarEvento(id:string, eventoEditar: Eventos){
    console.log(id);
    this._eventoService.editarEvento(id, eventoEditar);
  }

  eliminarEvento(index: number) {
    console.log(index);
    this._eventoService.eliminarEvento(index);
    this.cargarEventos();
  }
}
