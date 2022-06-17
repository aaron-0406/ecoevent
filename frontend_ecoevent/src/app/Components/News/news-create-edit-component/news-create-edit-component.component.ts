import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from 'src/app/services/news.service';
import {News} from '../Model/News';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-news-create-edit-component',
  templateUrl: './news-create-edit-component.component.html',
  styleUrls: ['./news-create-edit-component.component.css']
})
export class NewsCreateEditComponentComponent implements OnInit {

  acto = 'Editar';

  constructor(
    private _newsService: NewsService,
    private rutaNews: ActivatedRoute,
    private _router: Router,
  ) {}
  
  index: number = this.rutaNews.snapshot.params['id'];

  ngOnInit(): void {
    this.esEditar;
  }

  newCreado: News = {
  id: '',
  titulo: '',
  descripcion: '',
};

accion: boolean = this._newsService.listNews[this.index - 1]
? false 
: true;

esEditar(){
  if(this.index === 0){
    this.acto = 'Agregar'
  }
}

newMostrar: News = this._newsService.listNews[this.index - 1]
? this._newsService.listNews[this.index - 1] 
: this.newCreado;

crearNoticia(){
  if (this.newCreado.titulo){
    this._newsService.crearNoticia({
      ...this.newMostrar,
      id: String(this._newsService.listNews.length + 1),
    });
    this._router.navigate(['/newslist']);
  }
}

editarNoticia(){
  this._newsService.editarNoticia(this.newMostrar);
  this._router.navigate(['/newslist']);
}
}
