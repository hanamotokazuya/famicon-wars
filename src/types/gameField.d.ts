import Unit from "../units/unit.class";

export type MapData = { id: number; name: FieldName }[][];

export type Field = {
  name: FieldName;
  type: FieldType;
  advantage: number;
  cost: number;
  unit: Unit | null;
};

export type FieldType = "land" | "sky" | "sea";

export type FieldName =
  | "plain"
  | "mountain"
  | "forest"
  | "river"
  | "sea"
  | "reef"
  | "shallow"
  | "factory"
  | "city"
  | "head"
  | "harbor"
  | "airport"
  | "road"
  | "bridge";
