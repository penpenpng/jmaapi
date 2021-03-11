type JmaForecast = [JmaDetailForecast, JmaSummaryForecast];

interface JmaDetailForecast {
  /** Name of the meteorological observatory. */
  publishingOffice: string;
  /** ISO 8601 format datetime when the meteorological observatory reports the forecast. */
  reportDatetime: string;
  /** Forecast content. */
  timeSeries: [
    JmaTimeSeries<{
      /** Array of weathers represented with code, which has the same length which `timeDefines` has. */
      weatherCodes: WeatherCode[];
      /** Array of weathers represented with human-readable string, which has the same length which `timeDefines` has. */
      weathers: string[];
      /** Array of winds represented with human-readable string, which has the same length which `timeDefines` has. */
      winds: string[];
      /** Array of waves represented with human-readable string, which has the same length which `timeDefines` has. */
      waves: string[];
    }>,
    JmaTimeSeries<{
      /** Array of chance of rain, which has the same length which `timeDefines` has. **Format is number, but type is string**. */
      pops: string[];
    }>,
    JmaTimeSeries<{
      /** Array of temperatures, which has the same length which `timeDefines` has. **Format is number, but type is string**. */
      temps: string[];
    }>
  ];
}

interface JmaSummaryForecast {
  /** Name of the meteorological observatory. */
  publishingOffice: string;
  /** ISO 8601 format datetime when the meteorological observatory reports the forecast. */
  reportDatetime: string;
  /** Forecast content. */
  timeSeries: [
    JmaTimeSeries<{
      /** Array of weathers represented with code, which has the same length which `timeDefines` has. */
      weatherCodes: WeatherCode[];
      /** Array of chance of rain, which has the same length which `timeDefines` has. **Format is number, but type is string**. */
      pops: string[];
      /** Array of reliabilities of the forecast, which has the same length which `timeDefines` has.*/
      reliabilities: "A" | "B" | "C" | "";
    }>,
    JmaTimeSeries<{
      /** Array of lowest temperatures, which has the same length which `timeDefines` has. **Format is number, but type is string**. */
      tempsMin: string[];
      tempsMinUpper: string[];
      tempsMinLower: string[];
      /** Array of highest temperatures, which has the same length which `timeDefines` has. **Format is number, but type is string**. */
      tempsMax: string[];
      tempsMaxUpper: string[];
      tempsMaxLower: string[];
    }>
  ];

  /** Climatological normal values about temperature. */
  tempAverage: (JmaWeatherArea & {
    /** Climatological normal of the lowest temperature. */
    min: string;
    /** Climatological normal of the highest temperature. */
    max: string;
  })[];
  /** Climatological normal values about precipitation amount. */
  precipAverage: (JmaWeatherArea & {
    /** Climatological normal of the lowest precipitation amount. */
    min: string;
    /** Climatological normal of the highest precipitation amount. */
    max: string;
  })[];
}

interface JmaTimeSeries<T> {
  /** ISO 8601 format datetimes associated with observed values. */
  timeDefines: string[];
  /** Observed values in every areas. */
  areas: (JmaWeatherArea & T)[];
}

interface JmaWeatherArea {
  /** Area name represented with human-readable string. */
  name: string;
  /** Area code. **Maybe** Class10 or more detail class. */
  code: string;
}
