import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../reducers/weather.reducer';

export const selectWeatherState = createFeatureSelector<WeatherState>('weather');

export const selectWeather = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.weather
);

export const selectLoading = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.loading
);

export const selectError = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.error
);
