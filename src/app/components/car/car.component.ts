import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/car.model';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.carsService.deleteCar(this.car);
  }

  onBuy() {
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }

}
