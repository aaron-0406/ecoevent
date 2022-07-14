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
  
  constructor(
    private _puntoService: PuntoService,
    private rutaPuntos: ActivatedRoute,
    private _router: Router
  ) { }

  index: number = this.rutaPuntos.snapshot.params['id'];

  puntos: PuntoAcopio[] = [];

  ngOnInit(): void {
  }

  //para identificar 'editarPuntos'
  accion: boolean = this.puntos[this.index - 1] ? false : true;

  esEditar() {
    if (this.index === 0) {
      this.acto = 'Agregar';
    }
  }

  puntosMostrar: PuntoAcopio = {
    direccion: '',
    horario: '',
    distrito: '',
  };

  editarPunto() {
    this._puntoService.editarPunto(this.puntosMostrar).subscribe();
    this._router.navigate(['/puntoAcopio']);
  }
}
