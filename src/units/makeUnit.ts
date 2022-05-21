import { Unit, FootSoldier } from "./index";

export const makeUnit = (name: string, team: string): Unit => {
  switch (name) {
    case "footSoldier":
      return new FootSoldier(team);
    default:
      return new FootSoldier(team);
  }
};
