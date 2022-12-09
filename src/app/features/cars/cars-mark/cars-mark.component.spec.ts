import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsMarkComponent } from './cars-mark.component';

describe('CarsMarkComponent', () => {
  let component: CarsMarkComponent;
  let fixture: ComponentFixture<CarsMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
