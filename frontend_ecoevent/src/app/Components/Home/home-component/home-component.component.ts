import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { News } from '../../News/Model/News';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
    listNews: News[] = [];

    displayedColumns: string[] = [
      'id',
      'titulo',
      'description',
      'autor',
      'botones',
    ];
    dataSource!: MatTableDataSource<any>;

}
