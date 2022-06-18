import { Injectable } from '@angular/core';
import { News } from '../Components/News/Model/News';


@Injectable({
  providedIn: 'root'
})


export class NewsService {
  listNews: News[] = [
    {id:'1',titulo:"Noticia1",descripcion:"da", autor: "dd"},
    {id:'2',titulo:"Noticia2",descripcion:"da", autor: "dd"},
    {id:'3',titulo:"Noticia3",descripcion:"da", autor: "dd"}
  ];

  constructor() { }

  getNews(){
    return this.listNews.slice();
  }

  crearNoticia(noticiaNueva: News){
    this.listNews.push(noticiaNueva);
  }

  editarNoticia(noticiaEditar: News){
    const listaNoticiasModificadas = this.listNews.map((news: News) => {
      if (news.id === noticiaEditar.id) {
        return noticiaEditar;
      }

      return news;
    });

    this.listNews = listaNoticiasModificadas;
  }

  eliminarNoticia(index: number) {
    this.listNews.splice(index, 1);
  }

}
