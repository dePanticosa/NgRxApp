import {Car} from '../models/car.model';
import {Action} from '@ngrx/store';

const initialState = {
  cars: [
    new Car('Opel', '12.12.1990', 'Vectra A', true, 1),
    new Car('Opel', '12.12.1995', 'Vectra B', false, 2),
    new Car('Opel', '12.12.2000', 'Vectra C', false, 3)
  ]
};

export function carsReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
