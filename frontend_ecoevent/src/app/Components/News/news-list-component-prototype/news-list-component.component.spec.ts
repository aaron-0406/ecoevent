import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponentComponent } from './news-list-component.component';

describe('NewsListComponentComponent', () => {
  let component: NewsListComponentComponent;
  let fixture: ComponentFixture<NewsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
