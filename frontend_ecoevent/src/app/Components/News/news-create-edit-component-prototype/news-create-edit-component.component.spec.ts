import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCreateEditComponentComponent } from './news-create-edit-component.component';

describe('NewsCreateEditComponentComponent', () => {
  let component: NewsCreateEditComponentComponent;
  let fixture: ComponentFixture<NewsCreateEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCreateEditComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCreateEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
