import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Evento } from '../Components/evento/evento';
import { Eventos } from '../Components/evento/evento.component';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private apiUrl = `${environment.API}/event`;

  constructor(private http: HttpClient) {}

  getEventos() {
    return this.http.get<Evento[]>(`${this.apiUrl}`);
  }

  crearEvento(dto: Evento) {
    return this.http.post<Evento>(`${this.apiUrl}`, dto);
  }

  editarEvento(dto: Evento) {
    return this.http.put<Evento>(`${this.apiUrl}`, dto);
  }

  eliminarEvento(id: number) {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
