interface JmaForecast {
  publishingOffice: string;
  reportDatetime: DateString;
  timeSeries: JmaForecastMoment[];
}

interface JmaForecastMoment {
  timeDefines: DateString[];
  areas: JmaForecastTargetArea[];
}

interface JmaForecastTargetArea {
  area: {
    name: string;
    code: string;
  };

  weatherCodes: WeatherCode[];
  weathers: string[];
  winds: string[];
}
