import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NewsService } from 'src/app/services/news.service';
import { News } from '../Prototype/News';


@Component({
  selector: 'app-news-list-component',
  templateUrl: './news-list-component.component.html',
  styleUrls: ['./news-list-component.component.css'],
})
export class NewsListComponentComponent {
  listNews: News[] = [];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'description',
    'autor',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private _newsService: NewsService) {}

  ngOnInit(): void {
    this.cargarNoticias();
  }
  crearNoticia(news: News) {
    this._newsService.crearNoticia(news);
  }

  cargarNoticias() {
    this._newsService.getNews().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminarNoticia(index: number) {
    this._newsService.eliminarNoticia(index).subscribe(() => {
      this.cargarNoticias();
    });
  }
}
