import React, { useContext, useReducer, createContext } from "react";
import { State, Action } from "../types/context";
import Peer, { DataConnection } from "peerjs";
import { useRouter } from "next/router";
import { GameField } from "../gamefield/gameFileld.class";
import { makeUnit } from "../units";

const StateContext = createContext({} as { state: State; action: React.Dispatch<Action> });
type Props = {
  children: React.ReactNode;
};

export const StateContextProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const events = (state: State, action: Action): State => {
    switch (action.type) {
      case "TEST":
        console.log("TEST");
        return state;
      case "INIT":
        return { ...state, peer: action.peer, conn: action.conn };
      case "CONNECT":
        return { ...state, conn: action.conn };
      case "DEFINE_TEAM":
        return { ...state, team: action.team };
      case "EXEC_PROCESS":
        if (action.data.code === "play") {
          router.push("/play");
        }
        return state;
      case "CREATE_MAP":
        return { ...state, gameField: new GameField(action.mapData, action.firstAttack) };
      case "MAKE_UNIT":
        if (state.gameField) {
          state.gameField.fields[action.row][action.col].unit = makeUnit(action.name, state.team);
        }
        return { ...state };
      default:
        return state;
    }
  };
  const initializeState: State = {
    peer: {} as Peer,
    conn: {} as DataConnection,
    team: "",
    gameField: undefined,
  };
  const [state, action] = useReducer(events, initializeState);
  return <StateContext.Provider value={{ state, action }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
