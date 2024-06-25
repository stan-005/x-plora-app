import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageToursComponent } from './manage-tours.component';

describe('ManageToursComponent', () => {
  let component: ManageToursComponent;
  let fixture: ComponentFixture<ManageToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
