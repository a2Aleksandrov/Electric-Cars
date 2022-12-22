import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from '../../interfaces';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {


  car!: ICar;
  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    const car = this.activatedRoute.snapshot.params;
    this.carsService.getCarByModel(car['mark'], car['model']).subscribe({
      next: (car) => {
        this.car = car;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
