import { Component } from '@angular/core';
import { ForecastInfoComponent } from '../forecast-info/forecast-info.component';
import { DailyForecastComponent } from '../daily-forecast/daily-forecast.component';
import { WeeklyForecastComponent } from '../weekly-forecast/weekly-forecast.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherState } from '../../store/reducers/weather.reducer';
import { selectError, selectWeather } from '../../store/selector/weather.selector';
import { loadWeather } from '../../store/actions/weather.actions';


const MODULES = [ 
  CommonModule
];

const COMPONENTS = [ 
  DailyForecastComponent, 
  WeeklyForecastComponent, 
  ForecastInfoComponent, 
];

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [...MODULES, ...COMPONENTS],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  weather$: Observable<any>;
  error$: Observable<string | null>;

  constructor(private store: Store<{ weather: WeatherState }>) {
    this.weather$ = this.store.select(selectWeather);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather(): void {
    this.store.dispatch(loadWeather({ location: 'Maribor' }));
  }
}
