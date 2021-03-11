interface JmaWeekOverview {
  /** Name of the meteorological observatory. */
  publishingOffice: string;
  /** ISO 8601 format datetime when the meteorological observatory reports the forecast. */
  reportDatetime: string;
  /** Overview title. */
  headTitle: string;
  /** Overview text. */
  text: string;
}
