import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';

import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { TranslationUtils } from '../../utils/translate-utils';

@Component({
  selector: 'app-forecast-info',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {
  weather$: Observable<any>;
  error$: Observable<string | null>;
  retrievedDate: string | undefined;
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
    this.switchLanguage('slo');
  }

  formatDate(dateTimeString: string): string {
    return moment(dateTimeString).format('DD.MM.YYYY');
  }

  private initializeTranslations(): void {
    TranslationUtils.initializeTranslations(this.translate);
  }

  private switchLanguage(language: string): void {
    TranslationUtils.switchLanguage(language, this.translate,);
    this.currentLang = language;
  }
}
