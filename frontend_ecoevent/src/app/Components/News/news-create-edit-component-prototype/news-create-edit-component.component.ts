import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from '../Prototype/News';


@Component({
  selector: 'app-news-create-edit-component',
  templateUrl: './news-create-edit-component.component.html',
  styleUrls: ['./news-create-edit-component.component.css'],
})
export class NewsCreateEditComponentComponent implements OnInit {
  acto = 'Crear';

  constructor(
    private _newsService: NewsService,
    private rutaNews: ActivatedRoute,
    private _router: Router
  ) {}

  index: number = this.rutaNews.snapshot.params['id'];

  news: News[] = [];

  ngOnInit(): void {
    //get data from news
    this._newsService.getNews().subscribe((data) => {
      data.forEach((newsData) => {
        if (newsData.id_news == this.index) {
          this.newMostrar = newsData;
        }
      });
    });

    this.esEditar;
    if (this.index) {
      this.acto = 'Editar';
    }
  }

  //para identificar 'editarNew'
  accion: boolean = this.news[this.index - 1] ? false : true;

  esEditar() {
    if (this.index === 0) {
      this.acto = 'Agregar';
    }
  }

  newMostrar: News = {
    title: '',
    description: '',
    autor: '',
  };

  crearNoticia() {
    if (this.newMostrar.title) {
      this._newsService.crearNoticia(this.newMostrar).subscribe();
      this._router.navigate(['/newslist']);
    }
  }

  editarNoticia() {
    this._newsService.editarNoticia(this.newMostrar).subscribe();
    this._router.navigate(['/newslist']);
  }
}
