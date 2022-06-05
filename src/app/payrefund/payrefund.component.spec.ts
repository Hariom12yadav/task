import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrefundComponent } from './payrefund.component';

describe('PayrefundComponent', () => {
  let component: PayrefundComponent;
  let fixture: ComponentFixture<PayrefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
