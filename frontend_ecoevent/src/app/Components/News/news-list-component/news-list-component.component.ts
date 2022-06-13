import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  ];
  dataSource!: MatTableDataSource<any>;


  ngOnInit(): void {
    this.cargarNoticias();
  }
  cargarNoticias(){
    this.dataSource = new MatTableDataSource(this.listNews);
  } 
}

