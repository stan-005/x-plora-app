import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourReviewComponent } from './tour-review.component';

describe('TourReviewComponent', () => {
  let component: TourReviewComponent;
  let fixture: ComponentFixture<TourReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
