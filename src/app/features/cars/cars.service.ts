import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ICar, IMark } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getAllMarks() {
    return this.http.get<IMark[]>(`${environment.baseUrl}/cars`);
  }

  getCarsByMark(mark: string) {
    return this.http.get<ICar[]>(`${environment.baseUrl}/cars/${mark}`);
  }

  getCarByModel() {

  }
}
