import { useStateContext } from "../src/context/Statecontext";
import { useLayoutEffect } from "react";
import stage1 from "../src/map/stage1.json";
import { MapData } from "../src/types/gameField";
import Cell from "../src/components/Cell";

const Play: React.FC = () => {
  const {
    state: { conn, team, gameField },
    action,
  } = useStateContext();
  useLayoutEffect(() => {
    if (team === "RED_STAR") {
      conn.send({ code: "play", process: [] });
      action({ type: "CREATE_MAP", mapData: stage1.data as MapData, firstAttack: true });
    } else {
      action({ type: "CREATE_MAP", mapData: stage1.data as MapData, firstAttack: false });
    }
  }, [conn, team, action]);

  return (
    <div className="flex justify-center">
      <div>
        {gameField &&
          gameField.fields.map((cells, i) => {
            return (
              <div key={i} className="flex">
                {cells.map((cell, j) => {
                  return <Cell key={i + j} row={i} col={j} cell={cell} />;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Play;
