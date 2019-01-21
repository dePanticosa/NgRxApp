import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {Observable} from 'rxjs/index';
import {Cars} from './interfaces/cars.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carsState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carsState = this.store.select('carPage');
  }
}
