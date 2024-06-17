// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import { weatherReducer } from './app/shared/store/reducers/weather.reducer';
import { WeatherEffects } from './app/shared/store/effects/weather.effects';
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideHttpClient(withFetch()),
    provideStore({
      weather: weatherReducer
    }),
    provideEffects([WeatherEffects])
  ]
}).catch(err => console.error(err));
