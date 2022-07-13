import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoCreateEditComponentPrototypeComponent } from './punto-create-edit-component-prototype.component';

describe('PuntoCreateEditComponentPrototypeComponent', () => {
  let component: PuntoCreateEditComponentPrototypeComponent;
  let fixture: ComponentFixture<PuntoCreateEditComponentPrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoCreateEditComponentPrototypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoCreateEditComponentPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
