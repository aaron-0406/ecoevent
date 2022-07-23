import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PuntoAcopio } from 'src/app/Components/PuntoAcopio/Prototype/PuntoAcopio';
import { PuntoService } from 'src/app/services/punto.service';
@Component({
  selector: 'app-lista-punto-acopio',
  templateUrl: './lista-punto-acopio.component.html',
  styleUrls: ['./lista-punto-acopio.component.css']
})
export class ListaPuntoAcopioComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  constructor(private _puntoService: PuntoService) { }


  direccion:String = '';
  horario:String = '';
  distrito:String = '';

  puntosList:PuntoAcopio = {
    direccion:'', 
    horario:'',
    distrito:'', 
  };

  ngOnInit(): void {
  }

  cargarPuntos() {
    this._puntoService.getPuntos().subscribe((data) =>
    this.puntosList.direccion = data[1].direccion);
  }

}
