export interface Weather {
  city: string;
  temperature: number;
  list: Array<{
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    dt_txt: string;
  }>;
}
  