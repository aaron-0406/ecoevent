import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditComponentComponent } from './news-edit-component.component';

describe('NewsEditComponentComponent', () => {
  let component: NewsEditComponentComponent;
  let fixture: ComponentFixture<NewsEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEditComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
