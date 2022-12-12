import { Component, OnInit } from '@angular/core';
import { ICar, IMark } from '../../interfaces';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  marks!: IMark[];

  constructor(private carsService: CarsService) { }
 

  ngOnInit(): void {
    this.carsService.getAllMarks().subscribe({
      next: (marks) => {
       this.marks = marks;
      }
    });
  }
}
