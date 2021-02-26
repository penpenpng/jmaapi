type JmaTelop = Record<
  WeatherCode,
  [string, string, string, WeatherLabel, WeatherLabelEn]
>;
type WeatherCode = string;
type WeatherLabel = string;
type WeatherLabelEn = string;

// TODO: 本当に JmaOfficeCode か確かめる
type JmaAreaFuken = Array<{ center: JmaOfficeCode; offices: JmaOfficeCode[] }>;

type JmaWeekAreas = Record<string, string>;
