import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  isLoading: boolean = false; // Initialize as false
  weatherData: any;

  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = '4f7058c84edb5450384f671a7c5cd107';

  constructor(private http: HttpClient) {}

  getWeather(location: string) {
    this.isLoading = true; 

    const url = `${this.apiUrl}?q=${location}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      tap((data: any) => {
        this.weatherData = data;
        this.isLoading = false; 
      }),
      catchError((error: any) => {
        this.isLoading = false; 
        return throwError(error); 
      })
    );
  }
}
