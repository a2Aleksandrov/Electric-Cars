import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarMarksComponent } from './car-marks.component';


describe('CarsMarkComponent', () => {
  let component: CarMarksComponent;
  let fixture: ComponentFixture<CarMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
