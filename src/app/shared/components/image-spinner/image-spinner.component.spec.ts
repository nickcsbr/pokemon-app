import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSpinnerComponent } from './image-spinner.component';

describe('ImageSpinnerComponent', () => {
  let component: ImageSpinnerComponent;
  let fixture: ComponentFixture<ImageSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
