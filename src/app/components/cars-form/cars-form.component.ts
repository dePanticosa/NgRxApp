import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car.model';
import * as moment from 'moment';
import {AppState} from '../../redux/app.state';
import {Store} from '@ngrx/store';
import {AddCar} from '../../redux/cars.action';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  public carName: string;
  public carModel: string;
  private id: number = 2;

  constructor(private store: Store<AppState>,
              private carsService: CarsService) {
  }

  ngOnInit() {
  }

  onAdd() {
    if (!this.carName || !this.carModel) {
      return;
    }
    this.id += this.id;
    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );
    this.store.dispatch(new AddCar(car));
    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
