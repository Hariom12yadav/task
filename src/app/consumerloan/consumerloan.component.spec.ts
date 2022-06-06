import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerloanComponent } from './consumerloan.component';

describe('ConsumerloanComponent', () => {
  let component: ConsumerloanComponent;
  let fixture: ComponentFixture<ConsumerloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
