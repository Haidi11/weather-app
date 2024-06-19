import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { WeatherEffects } from './shared/store/effects/weather.effects';
import { weatherReducer } from './shared/store/reducers/weather.reducer';
import { provideTranslateModule } from './shared/translation/translate-provider';
import { loadingReducer } from './shared/store/reducers/loading.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    provideHttpClient(withFetch()),
    provideStore({ weather: weatherReducer, loading: loadingReducer }),
    provideEffects([WeatherEffects]),
    provideTranslateModule(),
  ]
};
