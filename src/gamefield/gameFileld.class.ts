import { Field, MapData } from "../types/gameField";

export class GameField {
  fields: Field[][];
  isMyTurn: boolean;
  constructor(mapData: MapData, firstAttack: boolean) {
    this.fields = this.init(mapData);
    this.isMyTurn = firstAttack;
  }

  init(mapData: MapData): Field[][] {
    return mapData.map((row) => {
      return row.map((cell) => {
        switch (cell.name) {
          case "plain":
            return { name: cell.name, type: "land", advantage: 1, cost: 1, unit: null };
          case "mountain":
            return { name: cell.name, type: "land", advantage: 3, cost: 1, unit: null };
          case "river":
            return { name: cell.name, type: "land", advantage: 0, cost: 1, unit: null };
          case "forest":
            return { name: cell.name, type: "land", advantage: 2, cost: 1, unit: null };
          case "shallow":
            return { name: cell.name, type: "land", advantage: 0, cost: 1, unit: null };
          case "factory":
            return { name: cell.name, type: "land", advantage: 3, cost: 1, unit: null };
          case "city":
            return { name: cell.name, type: "land", advantage: 3, cost: 1, unit: null };
          case "head":
            return { name: cell.name, type: "land", advantage: 4, cost: 1, unit: null };
          case "harbor":
            return { name: cell.name, type: "land", advantage: 3, cost: 1, unit: null };
          case "airport":
            return { name: cell.name, type: "land", advantage: 3, cost: 1, unit: null };
          case "road":
            return { name: cell.name, type: "land", advantage: 0, cost: 1, unit: null };
          case "bridge":
            return { name: cell.name, type: "land", advantage: 0, cost: 1, unit: null };
          case "sea":
            return { name: cell.name, type: "sea", advantage: 0, cost: 1, unit: null };
          case "reef":
            return { name: cell.name, type: "sea", advantage: 1, cost: 1, unit: null };
          default:
            return { name: cell.name, type: "land", advantage: 1, cost: 1, unit: null };
        }
      });
    });
  }
}
