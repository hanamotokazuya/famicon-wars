import Peer, { DataConnection } from "peerjs";
import { GameField } from "../gamefield/gameFileld.class";
import { MapData } from "./gameField";

export type State = {
  peer: Peer;
  conn: DataConnection;
  team: string;
  gameField: GameField | undefined;
};

export type Data = {
  code: string;
  process: string[];
};

export type Action = TEST | INIT | CONNECT | DEFINE_TEAM | EXEC_PROCESS | CREATE_MAP | MAKE_UNIT;

type TEST = {
  type: "TEST";
};
type INIT = {
  type: "INIT";
  peer: Peer;
  conn: DataConnection;
};
type CONNECT = {
  type: "CONNECT";
  conn: DataConnection;
};
type DEFINE_TEAM = {
  type: "DEFINE_TEAM";
  team: string;
};
type EXEC_PROCESS = {
  type: "EXEC_PROCESS";
  data: Data;
};
type CREATE_MAP = {
  type: "CREATE_MAP";
  mapData: MapData;
  firstAttack: boolean;
};
type MAKE_UNIT = {
  type: "MAKE_UNIT";
  name: string;
  row: number;
  col: number;
};
