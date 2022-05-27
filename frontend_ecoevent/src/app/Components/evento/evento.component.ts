import { Component, OnInit } from '@angular/core';
export interface Eventos {
  id:string;
  titulo:string;
  descripcion:string;
  lugar:string;
  hora:string;
  fecha:string;
  foto:string;
}

const ELEMENT_DATA: Eventos[] = [
  {id: '1', titulo: 'Recojo de basura en las playas', descripcion: '', lugar: 'Trujillo', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '2', titulo: 'Campaña de reciclaje', descripcion: '', lugar: 'Laredo', hora:'',fecha:'01/02/2001',foto:'url'},
  {id: '3', titulo: 'Recojo de basura en las playas', descripcion: '', lugar: 'El porvenir', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '4', titulo: 'Campaña de reciclaje', descripcion: '', lugar: 'Trujillo', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '5', titulo: 'Recojo de basura en las playas', descripcion: '', lugar: 'La esperanza', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '6', titulo: 'Campaña de reciclaje', descripcion: '', lugar: 'Trujillo', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '7', titulo: 'Recojo de basura en las playas', descripcion: '', lugar: 'N', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '8', titulo: 'Campaña de reciclaje', descripcion: '', lugar: 'Huanchaco', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '9', titulo: 'Recojo de basura en las playas', descripcion: '', lugar: 'Florencia de Mora', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '10', titulo: 'Campaña de reciclaje', descripcion: '', lugar: 'Trujillo', hora:'21',fecha:'01/02/2001',foto:'url'},
];
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id','titulo','descripcion','lugar','hora','fecha','foto','botones'];
  dataSource = ELEMENT_DATA;
}
