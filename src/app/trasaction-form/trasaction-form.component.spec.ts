import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasactionFormComponent } from './trasaction-form.component';

describe('TrasactionFormComponent', () => {
  let component: TrasactionFormComponent;
  let fixture: ComponentFixture<TrasactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasactionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
