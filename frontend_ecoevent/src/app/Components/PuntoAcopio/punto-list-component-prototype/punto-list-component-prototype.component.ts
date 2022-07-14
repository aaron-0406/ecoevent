import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-punto-list-component-prototype',
  templateUrl: './punto-list-component-prototype.component.html',
  styleUrls: ['./punto-list-component-prototype.component.css']
})
export class PuntoListComponentPrototypeComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'Distrito',
    'Direccion',
    'Horario',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {
    
  }


}
