import {Car} from '../models/car.model';
import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  cars: [
    new Car('Opel', '12.12.1990', 'Vectra A', true, 1),
    new Car('Opel', '12.12.1995', 'Vectra B', false, 2),
    new Car('Opel', '12.12.2000', 'Vectra C', false, 3)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {

  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const idx = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[idx].isSold = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
