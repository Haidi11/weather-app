import { createReducer, on, Action } from '@ngrx/store';
import { loadWeather, loadWeatherSuccess, loadWeatherFailure } from '../actions/weather.actions';
import { Weather } from '../models/weather.model';

export interface WeatherState {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
};

const _weatherReducer = createReducer(
  initialState,
  on(loadWeather, state => ({ ...state, loading: true })),
  on(loadWeatherSuccess, (state, { weather }) => ({ ...state, loading: false, weather })),
  on(loadWeatherFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return _weatherReducer(state, action);
}
