import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NewsService } from 'src/app/services/news.service';
export interface News {
  id: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-news-list-component',
  templateUrl: './news-list-component.component.html',
  styleUrls: ['./news-list-component.component.css']
})

export class NewsListComponentComponent {
  listNews: News[] = [];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'description',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private _newsService: NewsService){}

  ngOnInit(): void {
    this.cargarNoticias();
  }
  crearNoticia(news: News){
    this.listNews.push(news);
  }

  cargarNoticias(){
    this.listNews = this._newsService.getNews();
    this.dataSource = new MatTableDataSource(this.listNews);
  }

  eliminarNoticia(index: number) {
    console.log(index);
    this._newsService.eliminarNoticia(index);
    this.cargarNoticias();
  }
}

