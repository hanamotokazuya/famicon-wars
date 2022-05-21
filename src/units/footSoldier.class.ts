import { Unit } from "./unit.class";

export class FootSoldier extends Unit {
  constructor(team: string) {
    super();
    this.name = "footSoldier";
    this.type = "soldier";
    this.atk = 1;
    this.def = 1;
    this.spd = 3;
    this.team = team;
  }
}
