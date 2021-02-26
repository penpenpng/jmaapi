import * as API from "./api";
import { convertClass, convertCodeForOverviewWeek } from "./code";

export * as JmaRawApi from "./api";

interface JmaApiCache {
  area?: JmaArea;
}

export class JmaApi {
  private cache: JmaApiCache = {};

  async getArea(): Promise<JmaArea> {
    if (!this.cache.area) this.cache.area = await API.getArea();

    return this.cache.area;
  }

  async getOverview(
    areaClass: JmaAreaClass,
    code: string
  ): Promise<JmaOverview> {
    const converted = convertClass(
      await this.getArea(),
      code,
      areaClass,
      "offices"
    );

    return API.getOverview(converted);
  }

  async getWeekOverview(
    areaClass: JmaAreaClass,
    code: string
  ): Promise<JmaWeekOverview> {
    const converted = convertCodeForOverviewWeek(
      await this.getArea(),
      code,
      areaClass
    );

    return API.getWeekOverview(converted);
  }
}
