interface JmaArea {
  centers: Record<JmaCenterCode, JmaCenter>;
  offices: Record<JmaOfficeCode, JmaOffice>;
  class10s: Record<JmaClass10Code, JmaClass10>;
  class15s: Record<JmaClass15Code, JmaClass15>;
  class20s: Record<JmaClass20Code, JmaClass20>;
}

type JmaAreaClass = keyof JmaArea;

type JmaCenterCode = string;
type JmaOfficeCode = string;
type JmaClass10Code = string;
type JmaClass15Code = string;
type JmaClass20Code = string;

interface JmaCenter {
  children: JmaOfficeCode[];
  enName: string;
  name: string;
  officeName: string;
}

interface JmaOffice {
  children: JmaClass10Code[];
  name: string;
  officeName: string;
  parent: JmaCenterCode;
}

interface JmaClass10 {
  children: JmaClass15Code[];
  enName: string;
  name: string;
  parent: JmaOfficeCode;
}

interface JmaClass15 {
  children: JmaClass20Code[];
  enName: string;
  name: string;
  parent: JmaClass10Code;
}

interface JmaClass20 {
  enName: string;
  kana: string;
  name: string;
  parent: JmaClass15Code;
}
