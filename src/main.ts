import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { weatherReducer } from './app/shared/store/reducers/weather.reducer';
import { WeatherEffects } from './app/shared/store/effects/weather.effects';
import { provideEffects } from '@ngrx/effects';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app/shared/translation/translate-http-loader.factory';
import { HttpClient } from '@angular/common/http';
import { provideTranslateModule } from './app/shared/translation/translate-provider';
import { loadingReducer } from './app/shared/store/reducers/loading.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideHttpClient(),
    provideStore({
      weather: weatherReducer,
      loading: loadingReducer
    }),
    provideEffects([WeatherEffects]),
    {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    TranslateService,
    provideTranslateModule()
  ]
}).catch(err => console.error(err));
