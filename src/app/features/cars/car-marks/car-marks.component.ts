import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from '../../interfaces';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-marks',
  templateUrl: './car-marks.component.html',
  styleUrls: ['./car-marks.component.scss']
})
export class CarMarksComponent implements OnInit {

  cars!: ICar[];

  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    const mark = this.activatedRoute.snapshot.params['mark'];
    this.carsService.getCarsByMark(mark).subscribe({
      next: (cars) => {
        if (cars.length == 0) {
          this.router.navigateByUrl('404');
        }
        this.cars = cars;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
