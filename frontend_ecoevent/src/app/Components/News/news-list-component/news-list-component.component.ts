import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NewsService } from 'src/app/services/news.service';
export interface News {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-news-list-component',
  templateUrl: './news-list-component.component.html',
  styleUrls: ['./news-list-component.component.css']
})

export class NewsListComponentComponent {
  listNews: News[] = [ 
    {id:'1',title:"Noticia1",description:"da"},
    {id:'2',title:"Noticia2",description:"da"},
    {id:'3',title:"Noticia3",description:"da"}
  ];

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;


  ngOnInit(): void {
    this.cargarNoticias();
  }
  crearNoticia(news: News){
    this.listNews.push(news);
  }

  cargarNoticias(){
    this.dataSource = new MatTableDataSource(this.listNews);
  } 
}
