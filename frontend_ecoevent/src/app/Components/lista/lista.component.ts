import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  id:string;
  titulo:string;
  descripcion:number;
  lugar:string;
  hora:string;
  fecha:string;
  foto:string;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', titulo: 'Hydrogen', descripcion: 1.0079, lugar: 'H', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '2', titulo: 'Helium', descripcion: 4.0026, lugar: 'He', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '3', titulo: 'Lithium', descripcion: 6.941, lugar: 'Li', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '4', titulo: 'Beryllium', descripcion: 9.0122, lugar: 'Be', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '5', titulo: 'Boron', descripcion: 10.811, lugar: 'B', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '6', titulo: 'Carbon', descripcion: 12.0107, lugar: 'C', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '7', titulo: 'Nitrogen', descripcion: 14.0067, lugar: 'N', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '8', titulo: 'Oxygen', descripcion: 15.9994, lugar: 'O', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '9', titulo: 'Fluorine', descripcion: 18.9984, lugar: 'F', hora:'21',fecha:'01/02/2001',foto:'url'},
  {id: '10', titulo: 'Neon', descripcion: 20.1797, lugar: 'Ne', hora:'21',fecha:'01/02/2001',foto:'url'},
];
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id','titulo','descripcion','lugar','hora','fecha','foto','botones'];
  dataSource = ELEMENT_DATA;
}
