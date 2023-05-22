export type SystemPropConfig = {
  cssProperties: string[];
  values?: (string | number)[];
  tokenCategory?: string;
};

export type SystemPropList = Record<string, Record<string, SystemPropConfig>>;
