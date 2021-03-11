import * as JmaRawApi from "./api";
import { convertClass, convertCodeForOverviewWeek } from "./code";

export * as JmaRawApi from "./api";

interface JmaApiCache {
  area?: JmaArea;
}

/** JMA API client. */
export class JmaApi {
  private cache: JmaApiCache = {};

  /** Fetch areas data and cache it. */
  async getArea(): Promise<JmaArea> {
    if (!this.cache.area) this.cache.area = await JmaRawApi.getArea();

    return this.cache.area;
  }

  /** Fetch forecast overview. Office class or more detail class codes are available. */
  async getOverview(
    areaClass: JmaAreaClass,
    code: string,
    options?: ApiRequestOption
  ): Promise<JmaOverview> {
    const converted = convertClass(
      await this.getArea(),
      code,
      areaClass,
      "offices"
    );

    return JmaRawApi.getOverview(converted, options);
  }

  /** Fetch forecast week-overview. Available codes are in `AREA_FUKEN`. */
  async getWeekOverview(
    areaClass: JmaAreaClass,
    code: string,
    options?: ApiRequestOption
  ): Promise<JmaWeekOverview> {
    const converted = convertCodeForOverviewWeek(
      await this.getArea(),
      code,
      areaClass
    );

    return JmaRawApi.getWeekOverview(converted, options);
  }

  /** Fetch forecast. Office class or more detail class codes are available. */
  async getForecast(
    areaClass: JmaAreaClass,
    code: string,
    options?: ApiRequestOption
  ): Promise<JmaForecast> {
    const converted = convertClass(
      await this.getArea(),
      code,
      areaClass,
      "offices"
    );

    return JmaRawApi.getForecast(converted, options);
  }
}
