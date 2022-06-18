import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../Components/News/Model/News';
import { environment } from 'src/environments/environment';

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
