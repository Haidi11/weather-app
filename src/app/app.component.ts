import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "test";
  isLoading: boolean = true;
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather('Maribor');
  }

  getWeather(location: string): void {
    this.weatherService.getWeather(location).subscribe(
      (data: any) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching weather data', error);
        this.isLoading = false;
      }
    );
  }
}
