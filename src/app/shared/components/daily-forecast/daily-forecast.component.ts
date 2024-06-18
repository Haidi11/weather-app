import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { CommonModule } from '@angular/common';
import { TranslationUtils } from '../../utils/translate-utils';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  weather$: Observable<any>;
  error$: Observable<string | null>;
  currentLang: string | undefined;

  constructor(private store: Store<{ weather: WeatherState }>, private translate: TranslateService) {
    this.weather$ = this.store.select(selectWeather);
    this.error$ = this.store.select(selectError);
    this.initializeTranslations();
  }

  ngOnInit() {
    this.switchLanguage('slo');
  }

  private initializeTranslations(): void {
    TranslationUtils.initializeTranslations(this.translate);
  }

  private switchLanguage(language: string): void {
    TranslationUtils.switchLanguage(language, this.translate);
    this.currentLang = language;
  }
}
