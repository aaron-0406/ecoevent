import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';


export interface News {
  id: string;
  title: string;
  description: string;
  autor: string;
}

@Component({
  selector: 'app-news-edit-component',
  templateUrl: './news-edit-component.component.html',
  styleUrls: ['./news-edit-component.component.css']
})
export class NewsEditComponentComponent implements OnInit {

  constructor( 
    private _newsService: NewsService,
  ) {}

  ngOnInit(): void {
  }

}
