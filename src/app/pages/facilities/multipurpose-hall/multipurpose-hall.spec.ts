import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipurposeHall } from './multipurpose-hall';

describe('MultipurposeHall', () => {
  let component: MultipurposeHall;
  let fixture: ComponentFixture<MultipurposeHall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipurposeHall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipurposeHall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
