import { Injectable } from '@angular/core';
import { Eventos } from '../Components/evento/evento.component';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  listEventos: Eventos[] = [
    {
      id: '1',
      titulo: 'Recojo de basura en las playas',
      descripcion: '',
      lugar: 'Trujillo',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '2',
      titulo: 'Campaña de reciclaje',
      descripcion: '',
      lugar: 'Laredo',
      hora: '',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '3',
      titulo: 'Recojo de basura en las playas',
      descripcion: '',
      lugar: 'El porvenir',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '4',
      titulo: 'Campaña de reciclaje',
      descripcion: '',
      lugar: 'Trujillo',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '5',
      titulo: 'Recojo de basura en las playas',
      descripcion: '',
      lugar: 'La esperanza',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '6',
      titulo: 'Campaña de reciclaje',
      descripcion: '',
      lugar: 'Trujillo',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '7',
      titulo: 'Recojo de basura en las playas',
      descripcion: '',
      lugar: 'N',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '8',
      titulo: 'Campaña de reciclaje',
      descripcion: '',
      lugar: 'Huanchaco',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '9',
      titulo: 'Recojo de basura en las playas',
      descripcion: '',
      lugar: 'Florencia de Mora',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
    {
      id: '10',
      titulo: 'Campaña de reciclaje',
      descripcion: '',
      lugar: 'Trujillo',
      hora: '21',
      fecha: '01/02/2001',
      foto: 'url',
    },
  ];

  constructor() {}

  getEventos() {
    return this.listEventos.slice();
  }

  crearEvento(eventNew: Eventos) {
    this.listEventos.push(eventNew);
  }

  editarEvento(eventoEditar: Eventos) {
    const listaEventosModificados = this.listEventos.map((evento: Eventos) => {
      if (evento.id === eventoEditar.id) {
        return eventoEditar;
      }

      return evento;
    });

    this.listEventos = listaEventosModificados;
  }

  eliminarEvento(index: number) {
    this.listEventos.splice(index, 1);
  }
}
