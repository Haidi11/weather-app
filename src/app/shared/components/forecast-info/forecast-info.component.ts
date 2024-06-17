import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { WeatherState } from '../../store/reducers/weather.reducer';
import { CommonModule } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-forecast-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-info.component.html',
  styleUrl: './forecast-info.component.scss'
})
export class ForecastInfoComponent {
  weather$: Observable<any>;
  error$: Observable<string | null>;
  retrievedDate: string | undefined;

  constructor(private store: Store<{ weather: WeatherState }>) {
    this.weather$ = this.store.select(selectWeather);
    this.error$ = this.store.select(selectError);
  }
  
  formatDate(dateTimeString: string): string {
    return moment(dateTimeString).format('DD.MM.YYYY');
  }
}