import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHomepageComponent } from './movies-homepage.component';

describe('MoviesHomepageComponent', () => {
  let component: MoviesHomepageComponent;
  let fixture: ComponentFixture<MoviesHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
