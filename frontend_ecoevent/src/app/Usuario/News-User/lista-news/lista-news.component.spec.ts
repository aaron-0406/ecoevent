import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNewsComponent } from './lista-news.component';

describe('ListaNewsComponent', () => {
  let component: ListaNewsComponent;
  let fixture: ComponentFixture<ListaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
