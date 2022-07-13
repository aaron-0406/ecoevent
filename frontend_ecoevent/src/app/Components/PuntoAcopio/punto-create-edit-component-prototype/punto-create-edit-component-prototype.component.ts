import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuntoService } from 'src/app/services/punto.service';
import { PuntoAcopio } from '../Prototype/PuntoAcopio';
@Component({
  selector: 'app-punto-create-edit-component-prototype',
  templateUrl: './punto-create-edit-component-prototype.component.html',
  styleUrls: ['./punto-create-edit-component-prototype.component.css']
})
export class PuntoCreateEditComponentPrototypeComponent implements OnInit {
  acto = 'Crear';
  
  constructor() { }

  ngOnInit(): void {
  }

}
