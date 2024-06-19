import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  isLoading: boolean = false;
  weatherData: any;

  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = '4f7058c84edb5450384f671a7c5cd107';

  private weatherDataSubject = new BehaviorSubject<any>(null);
  weatherData$: Observable<any> = this.weatherDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}?q=${location}&units=metric&appid=${this.apiKey}`;
    return this.http.get<Weather>(url);
  }


  getWeeklyForecast(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

