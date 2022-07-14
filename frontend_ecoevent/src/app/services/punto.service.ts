import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { PuntoAcopio } from '../Components/PuntoAcopio/Prototype/PuntoAcopio';
@Injectable({
  providedIn: 'root'
})
export class PuntoService {
  private apiUrl = `${environment.API}/puntos`;

  constructor(private http: HttpClient) { }

  getPuntos() {
    return this.http.get<PuntoAcopio[]>(`${this.apiUrl}`);
  }

  editarPunto(dto: PuntoAcopio) {
    return this.http.put<PuntoAcopio>(`${this.apiUrl}`, dto);
  }
}
