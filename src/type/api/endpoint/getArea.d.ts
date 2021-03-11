interface JmaArea {
  /** Center class areas. */
  centers: Record<string, JmaCenter>;
  /** Office class areas. */
  offices: Record<string, JmaOffice>;
  /** Class10 areas. */
  class10s: Record<string, JmaClass10>;
  /** Class15 areas. */
  class15s: Record<string, JmaClass15>;
  /** Class20 areas. */
  class20s: Record<string, JmaClass20>;
}

type JmaAreaClass = keyof JmaArea;

interface JmaCenter {
  /** Code of offices which belongs to this center. */
  children: string[];
  /** Name of the area in English. */
  enName: string;
  /** Name of the area. */
  name: string;
  /** Name of the meteorological observatory. */
  officeName: string;
}

interface JmaOffice {
  /** Code of class10 areas which belongs to this office. */
  children: string[];
  /** Name of the area. */
  name: string;
  /** Name of the meteorological observatory. */
  officeName: string;
  /** Code of the center area which is the parent of this area. */
  parent: string;
}

interface JmaClass10 {
  /** Code of class15 areas which belongs to this class10 area. */
  children: string[];
  /** Name of the area in English. */
  enName: string;
  /** Name of the area. */
  name: string;
  /** Code of the office area which is the parent of this area. */
  parent: string;
}

interface JmaClass15 {
  /** Code of class20 areas which belongs to this class15 area. */
  children: string[];
  /** Name of the area in English. */
  enName: string;
  /** Name of the area. */
  name: string;
  /** Code of the class10 area which is the parent of this area. */
  parent: string;
}

interface JmaClass20 {
  /** Name of the area in English. */
  enName: string;
  /** Name of the area in Hiragana. */
  kana: string;
  /** Name of the area. */
  name: string;
  /** Code of the class15 area which is the parent of this area. */
  parent: string;
}
