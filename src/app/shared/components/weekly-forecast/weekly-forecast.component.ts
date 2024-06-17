import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectWeather } from '../../store/selector/weather.selector';
import moment from 'moment';
import { getWeeklyForecast } from '../../store/actions/weather.actions';


@Component({
  selector: 'app-weekly-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-forecast.component.html',
  styleUrl: './weekly-forecast.component.scss'
})
export class WeeklyForecastComponent {
  weather$: Observable<any>;

  constructor(private store: Store<{ weather: WeatherState }>) {
    this.weather$ = this.store.select(selectWeather);
  }

  ngOnInit(): void {
    this.fetchWeather(46.5547, 15.6459);
  }

  fetchWeather(lat: number, lon: number): void {
    this.store.dispatch(getWeeklyForecast({ lat, lon }));
  }

  formatDate(dateString: string): string {
    return moment(dateString).format('DD.MM.YYYY HH.00');
  }
}
