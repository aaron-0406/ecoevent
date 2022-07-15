import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PuntoService } from 'src/app/services/punto.service';
import { PuntoAcopio } from '../Prototype/PuntoAcopio';
@Component({
  selector: 'app-punto-list-component-prototype',
  templateUrl: './punto-list-component-prototype.component.html',
  styleUrls: ['./punto-list-component-prototype.component.css']
})
export class PuntoListComponentPrototypeComponent implements OnInit {
  listPuntos: PuntoAcopio[] = [];

  displayedColumns: string[] = [
    'id',
    'Distrito',
    'Direccion',
    'Horario',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private _puntoService: PuntoService) {}

  ngOnInit(): void {
    this.cargarPuntos();
  }
  crearPunto(punto: PuntoAcopio) {
    this._puntoService.crearPunto(punto);
  }
  cargarPuntos() {
    this._puntoService.getPuntos().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }


}
