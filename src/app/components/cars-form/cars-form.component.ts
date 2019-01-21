import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car.model';
import * as moment from 'moment';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  public carName: string;
  public carModel: string;

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  onAdd() {
    if (!this.carName || !this.carModel) {
      return;
    }
    const date = moment().format('DD.MM.YY');
    const car = new Car(
      this.carName,
      date,
      this.carModel
    );
    this.carsService.addCar(car);
    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
