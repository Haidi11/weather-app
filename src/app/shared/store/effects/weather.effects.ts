import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as WeatherActions from '../actions/weather.actions';
import { Weather } from '../models/weather.model'; // Adjust import path as per your structure
import { WeatherService } from '../../service/weather.service';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeather),
      mergeMap(action =>
        this.weatherService.getWeather(action.location).pipe(
          map(response => WeatherActions.loadWeatherSuccess({ weather: response })),
          catchError(error => of(WeatherActions.loadWeatherFailure({ error: error.message })))
        )
      )
    )
  );

  getWeeklyForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeeklyForecast),
      mergeMap(action =>
        this.weatherService.getWeeklyForecast(action.lat, action.lon).pipe(
          map((weather: Weather) => WeatherActions.loadWeatherSuccess({ weather })),
          catchError(error => of(WeatherActions.loadWeatherFailure({ error: error.message })))
        )
      )
    )
  );
}
