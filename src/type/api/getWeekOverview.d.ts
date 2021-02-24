interface JmaWeekOverview {
  publishingOffice: string;
  reportDatetime: DateString;
  headTitle: string;
  text: string;
}

/** `Date` constructor can take `DateString` value. */
type DateString = string;
