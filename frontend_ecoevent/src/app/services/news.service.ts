import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { News } from '../Components/News/Prototype/News';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = `${environment.API}/news`;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<News[]>(`${this.apiUrl}`);
  }

  crearNoticia(dto: News) {
    return this.http.post<News>(`${this.apiUrl}`, dto);
  }

  editarNoticia(dto: News) {
    return this.http.put<News>(`${this.apiUrl}`, dto);
  }

  eliminarNoticia(id: number) {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
