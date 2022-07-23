import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import { NewsListComponentComponent } from 'src/app/Components/News/news-list-component-prototype/news-list-component.component';
import { News } from 'src/app/Components/News/Prototype/News';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css']
})
export class ListaNewsComponent implements OnInit {

  constructor(private _newsService: NewsService) { }

  title:String = 'dsad'; 
  description:String ='';
  autor:String=''; 

  newsList:News = {
    title:'', 
    description:'',
    autor:'', 
  };  

  ngOnInit(): void {
    //this.newsList = this._newsService.getNews
  }


  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  cargarNoticias() {
    this._newsService.getNews().subscribe((data) =>
    this.newsList.title = data[1].title);
  }
}
