import { xthrow } from "@/lib/error";
import { AREA_FUKEN } from "./consts";

const toSafeCode = (code: string) => {
  if (code === "014030") return "014100";
  if (code === "460040") return "460100";
  return code;
};

export const convertClass = (
  area: JmaArea,
  code: string,
  fromClass: JmaAreaClass,
  toClass: JmaAreaClass
): string => {
  const hierarchy: ReadonlyArray<JmaAreaClass> = [
    "centers",
    "offices",
    "class10s",
    "class15s",
    "class20s",
  ];
  const fromDepth = hierarchy.findIndex((c) => c === fromClass);
  const toDepth = hierarchy.findIndex((c) => c === toClass);

  if (fromDepth < toDepth) throw "`toClass` must be an ancestor of `fromClass`";

  let curCode = toSafeCode(code);

  for (let depth = fromDepth; toDepth < depth; depth--) {
    const jmaclass = area[hierarchy[depth]][curCode];

    if (jmaclass === undefined) throw "Invalid code";
    if (!("parent" in jmaclass)) throw "`fromClass` must not be `centers`";

    curCode = jmaclass.parent;
  }

  return curCode;
};

export const convertCodeForOverviewWeek = (
  area: JmaArea,
  code: string,
  fromClass: JmaAreaClass
): string => {
  const converted = convertClass(area, code, fromClass, "offices");

  return (
    AREA_FUKEN.find((e) => e.offices.includes(converted))?.center ?? xthrow()
  );
};
