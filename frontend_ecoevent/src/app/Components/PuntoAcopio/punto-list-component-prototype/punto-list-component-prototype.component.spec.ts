import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoListComponentPrototypeComponent } from './punto-list-component-prototype.component';

describe('PuntoListComponentPrototypeComponent', () => {
  let component: PuntoListComponentPrototypeComponent;
  let fixture: ComponentFixture<PuntoListComponentPrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoListComponentPrototypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoListComponentPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
