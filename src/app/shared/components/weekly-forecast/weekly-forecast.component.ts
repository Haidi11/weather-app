import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import moment from 'moment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { getWeeklyForecast } from '../../store/actions/weather.actions';
import { TranslationUtils } from '../../utils/translate-utils';

@Component({
  selector: 'app-weekly-forecast',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent implements OnInit {
  weather$: Observable<any>;
  error$: Observable<string | null>;
  currentLang: string | undefined;

  constructor(
    private store: Store<{ weather: WeatherState }>,
    private translate: TranslateService
  ) {
    this.weather$ = this.store.select(selectWeather);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.initializeTranslations();
    this.fetchWeather(46.5547, 15.6459);
    this.switchLanguage('slo');
  }

  fetchWeather(lat: number, lon: number): void {
    this.store.dispatch(getWeeklyForecast({ lat, lon }));
  }

  formatDate(dateString: string): string {
    return moment(dateString).format('DD.MM.YYYY HH:00');
  }

  private initializeTranslations(): void {
    TranslationUtils.initializeTranslations(this.translate);
  }

  private switchLanguage(language: string): void {
    TranslationUtils.switchLanguage(language, this.translate);
    this.currentLang = language;
  }
}
