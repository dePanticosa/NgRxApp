import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {CarsFormComponent} from './components/cars-form/cars-form.component';
import {CarComponent} from './components/car/car.component';

import {carsReducer} from './redux/cars.reducer';
import {CarsService} from './services/cars.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
