import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/car.model';
import {AppState} from '../../redux/app.state';
import {Store} from '@ngrx/store';
import {DeleteCar} from '../../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }

  onBuy() {
    this.car.isSold = true;
  }

}
