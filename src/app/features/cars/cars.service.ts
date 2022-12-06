import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ICar } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get<ICar[]>(`${environment.baseUrl}/cars`);
  }
}
