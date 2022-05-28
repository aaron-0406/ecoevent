import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Eventos } from './evento.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent implements OnInit {

  form: FormGroup;
  constructor(
    private _eventoService: EventoService,
    private rutaEvento: ActivatedRoute,
    private router: Router,
    private event: FormBuilder,
  ) {
    this.form = this.event.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      lugar: ['', Validators.required],
  })
  }
  index: number = this.rutaEvento.snapshot.params['id'];

  eventoMostrar: Eventos = this._eventoService.listEventos[this.index - 1];

  ngOnInit(): void {}

  crearEvento(){
    console.log(this.form);

    const event: Eventos = {
      titulo: this.form.value.titulo,
      descripcion: this.form.value.descripcion,
      lugar: this.form.value.lugar,
      fecha: this.eventoMostrar.fecha,
      hora: this.eventoMostrar.hora,
      id: this.eventoMostrar.id,
      foto: ''
    }
    console.log(event);

    this._eventoService.crearEvento(event);
  }
  editarEvento() {
    this._eventoService.editarEvento(this.eventoMostrar);
    this.router.navigate(['/eventos']);
  }
}
