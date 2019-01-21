import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CAR_ACTION} from './cars.action';
import {map, mergeMap} from 'rxjs/operators';
import {CarsService} from '../services/cars.service';


@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, public service: CarsService) {
  }

  @Effect() loadCar = this.actions$
    .pipe(ofType(CAR_ACTION.ADD_CAR),
      mergeMap((action =>
            this.service.preloadCars().pipe(
              map(data => ({type: CAR_ACTION.LOAD_CARS, payload: data})),
            )
        )
      )
    );
}
