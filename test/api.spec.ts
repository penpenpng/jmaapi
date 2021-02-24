import assert from "assert";
import { describe, it } from "mocha";
import * as API from "@/api";

describe("getArea()", function () {
  let area: JmaArea = (undefined as unknown) as JmaArea;

  const isCenterCode = (x: string) => Object.keys(area.centers).includes(x);
  const isOfficeCode = (x: string) => Object.keys(area.offices).includes(x);
  const isClass10Code = (x: string) => Object.keys(area.class10s).includes(x);
  const isClass15Code = (x: string) => Object.keys(area.class15s).includes(x);
  const isClass20Code = (x: string) => Object.keys(area.class20s).includes(x);

  before(async function () {
    const { data } = await API.getArea();

    area = data;
  });

  it("returns a tree which has valid children", function () {
    for (const center of Object.values(area.centers)) {
      for (const officeCode of center.children) {
        assert(isOfficeCode(officeCode));
      }
    }

    for (const office of Object.values(area.offices)) {
      for (const c10Code of office.children) {
        assert(isClass10Code(c10Code));
      }
    }

    for (const c10 of Object.values(area.class10s)) {
      for (const c15Code of c10.children) {
        assert(isClass15Code(c15Code));
      }
    }

    for (const c15 of Object.values(area.class15s)) {
      for (const c20Code of c15.children) {
        assert(isClass20Code(c20Code));
      }
    }
  });

  it("returns a tree which has a valid parent", function () {
    for (const office of Object.values(area.offices)) {
      assert(isCenterCode(office.parent));
    }

    for (const c10 of Object.values(area.class10s)) {
      assert(isOfficeCode(c10.parent));
    }

    for (const c15 of Object.values(area.class15s)) {
      assert(isClass10Code(c15.parent));
    }

    for (const c20 of Object.values(area.class20s)) {
      assert(isClass15Code(c20.parent));
    }
  });
});
