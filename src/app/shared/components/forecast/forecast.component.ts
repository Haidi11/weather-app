import { Component } from '@angular/core';
import { ForecastInfoComponent } from '../forecast-info/forecast-info.component';
import { DailyForecastComponent } from '../daily-forecast/daily-forecast.component';
import { WeeklyForecastComponent } from '../weekly-forecast/weekly-forecast.component';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../service/weather.service';

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
  isLoading: boolean = true;
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather('Maribor').subscribe(
      (data: any) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching weather data', error);
        this.isLoading = false;
      }
    );
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1000);
  }
}
