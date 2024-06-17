import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss'
})
export class DailyForecastComponent {
  weather$: Observable<any>;
  error$: Observable<string | null>;

  constructor(private store: Store<{ weather: WeatherState }>) {
    this.weather$ = this.store.select(selectWeather);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
  }

}
