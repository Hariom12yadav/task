import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiformComponent } from './emiform.component';

describe('EmiformComponent', () => {
  let component: EmiformComponent;
  let fixture: ComponentFixture<EmiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
