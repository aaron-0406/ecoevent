import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPuntoAcopioComponent } from './lista-punto-acopio.component';

describe('ListaPuntoAcopioComponent', () => {
  let component: ListaPuntoAcopioComponent;
  let fixture: ComponentFixture<ListaPuntoAcopioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPuntoAcopioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPuntoAcopioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
