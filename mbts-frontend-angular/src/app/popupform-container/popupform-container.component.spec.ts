import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupformContainerComponent } from './popupform-container.component';

describe('PopupformContainerComponent', () => {
  let component: PopupformContainerComponent;
  let fixture: ComponentFixture<PopupformContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupformContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupformContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
