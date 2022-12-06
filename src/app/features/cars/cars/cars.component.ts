import { Component, OnInit } from '@angular/core';
import { ICar } from '../../interfaces';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars!: ICar[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars;
        console.log(this.cars);
      }
    });
  }

}
