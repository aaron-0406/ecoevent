import { Injectable } from '@angular/core';
import { News } from '../Components/News/Model/News';


@Injectable({
  providedIn: 'root'
})


export class NewsService {
  listNews: News[] = [
    {id:'1',name:"Noticia1",description:"da"},
    {id:'2',name:"Noticia2",description:"da"},
    {id:'3',name:"Noticia3",description:"da"}
  ];


  constructor() { }

  getNews(){
    return this.listNews.slice();
  }
}
