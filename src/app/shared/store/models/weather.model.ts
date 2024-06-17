export interface Weather {
  weatherData: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust?: number; 
    };
    visibility: number;
    pop?: number; 
    rain?: {
      '3h': number;
    };
    dt_txt: string;
  }>;
}
