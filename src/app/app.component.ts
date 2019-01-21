import {Component, OnInit} from '@angular/core';
import {Car} from './models/car.model';
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {Observable} from 'rxjs/index';
import {Cars} from "./interfaces/cars.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [];
  public carsState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carsState = this.store.select('carPage');
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }
}
