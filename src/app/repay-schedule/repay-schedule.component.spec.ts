import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepayScheduleComponent } from './repay-schedule.component';

describe('RepayScheduleComponent', () => {
  let component: RepayScheduleComponent;
  let fixture: ComponentFixture<RepayScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepayScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
