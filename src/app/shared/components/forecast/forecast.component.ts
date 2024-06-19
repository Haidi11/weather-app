import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { getWeeklyForecast, loadWeather } from '../../store/actions/weather.actions';
import { TranslationUtils } from '../../utils/translate-utils';

import { DailyForecastComponent } from '../daily-forecast/daily-forecast.component';
import { WeeklyForecastComponent } from '../weekly-forecast/weekly-forecast.component';
import { ForecastInfoComponent } from '../forecast-info/forecast-info.component';
import { setLoading } from '../../store/actions/loading.actions';

const MODULES = [
  CommonModule,
  TranslateModule,
];

const COMPONENTS = [
  DailyForecastComponent,
  WeeklyForecastComponent,
  ForecastInfoComponent
];

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [...MODULES, ...COMPONENTS],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  weather$: Observable<any>;
  error$: Observable<string | null>;
  currentLang: string | undefined;

  constructor(
    private store: Store<{ weather: WeatherState }>,
    private translate: TranslateService,
  ) {
    this.weather$ = this.store.select(selectWeather);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.initializeTranslations();
    this.fetchWeather();
    this.switchLanguage('slo');
  }

  fetchWeather(): void {
    this.store.dispatch(loadWeather({ location: 'Maribor' }));
  }

  onLanguageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.switchLanguage(language);
  }

  refreshWeather(): void {
    this.store.dispatch(setLoading(true));
    setTimeout(() => {
      this.store.dispatch(setLoading(false));
    }, 2000);
    this.store.dispatch(loadWeather({ location: 'Maribor' }));
    this.store.dispatch(getWeeklyForecast({ lat: 46.5547, lon: 15.6459 }));
  }

  private initializeTranslations(): void {
    TranslationUtils.initializeTranslations(this.translate);
  }

  private switchLanguage(language: string): void {
    TranslationUtils.switchLanguage(language, this.translate,);
    this.currentLang = language;
  }
}
