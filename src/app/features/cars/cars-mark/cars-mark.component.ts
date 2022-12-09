import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from '../../interfaces';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-mark',
  templateUrl: './cars-mark.component.html',
  styleUrls: ['./cars-mark.component.scss']
})
export class CarsMarkComponent implements OnInit {

  cars!: ICar[];
  
  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
     const mark = this.activatedRoute.snapshot.params['mark'];
    console.log(this.activatedRoute.snapshot.params);
    this.carsService.getCarsByMark(mark).subscribe({
      next: (cars) => {
        this.cars = cars;
      }
    })
  }

}
