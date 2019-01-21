import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {CarsFormComponent} from './components/cars-form/cars-form.component';
import {CarComponent} from './components/car/car.component';

import {carsReducer} from './redux/cars.reducer';
import {CarsService} from './services/cars.service';
import {CarsEffect} from './redux/cars.effect';
import {environment} from "../environments/environment";


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
    HttpClientModule,
    EffectsModule.forRoot([CarsEffect]),
    RouterModule.forRoot(
      [{
        path: '',
        component: AppComponent
      }]
    ),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
