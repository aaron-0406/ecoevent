import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evento } from 'src/app/Components/evento/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  constructor(private _eventoService: EventoService) { }

  id_event:String='';
  titulo:String = '';
  descripcion:String = '';
  lugar:String = '';
  hora:String = '';
  fecha:String = '';
  foto:String = '';

  eventosList: Evento = {
    id_event: 0,
    title:'',
    description:'',
    place:'', 
    hour:'',
    date:'',
    urlEventImage:'',
  };  

  ngOnInit(): void {
  }

  cargarEventos() {
    this._eventoService.getEventos().subscribe((data) => 
    this.eventosList.title = data[1].title);
  }

}
