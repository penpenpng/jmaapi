interface JmaOverview {
  /** Name of the meteorological observatory. */
  publishingOffice: string;
  /** ISO 8601 format datetime when the meteorological observatory reports the forecast. */
  reportDatetime: string;
  /** Area name represented with human-readable string. */
  targetArea: string;
  /** Short overview text. */
  headlineText: string;
  /** Long overview text. */
  text: string;
}
