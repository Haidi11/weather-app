import { ApplicationConfig } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { WeatherEffects } from './shared/store/effects/weather.effects';
import { weatherReducer } from './shared/store/reducers/weather.reducer';
import { provideTranslateModule } from './shared/translation/translate-provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    provideHttpClient(withFetch()),
    provideStore({ weather: weatherReducer }),
    provideEffects([WeatherEffects]),
    provideTranslateModule(),
  ]
};
