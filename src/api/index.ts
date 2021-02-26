import * as JmaRawApi from "./api";
import { convertClass, convertCodeForOverviewWeek } from "./code";

export * as JmaRawApi from "./api";

interface JmaApiCache {
  area?: JmaArea;
}

export class JmaApi {
  private cache: JmaApiCache = {};

  async getArea(): Promise<JmaArea> {
    if (!this.cache.area) this.cache.area = await JmaRawApi.getArea();

    return this.cache.area;
  }

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

  async getForecast(
    areaClass: JmaAreaClass,
    code: string,
    options?: ApiRequestOption
  ): Promise<JmaForecast[]> {
    // TODO: getForecast の引数の制約を調べる

    return JmaRawApi.getForecast(code, options);
  }
}
