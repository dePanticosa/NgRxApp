import {Injectable} from '@angular/core';
import {AppState} from '../redux/app.state';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {LoadCars} from '../redux/cars.action';
import {Car} from '../models/car.model';

@Injectable()
export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
  }

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }

}
