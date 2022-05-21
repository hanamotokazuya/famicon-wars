import { useStateContext } from "../context/Statecontext";
import { Field } from "../types/gameField";

type Props = {
  row: number;
  col: number;
  cell: Field;
};
const Cell: React.FC<Props> = ({ row, col, cell }) => {
  const {
    state: { gameField },
    action,
  } = useStateContext();

  const clickGeo = () => {
    if (gameField && cell.name === "factory") {
      console.log("It's a Factory");
      action({ type: "MAKE_UNIT", name: "footSoldier", row, col });
    } else {
    }
  };
  const clickUnit = () => {
    console.log("I'm a Unit.");
  };
  return (
    <>
      {gameField?.isMyTurn === false && (
        <div className="fixed top-0 left-0 w-screen h-screen opacity-0 bg-black" />
      )}
      <div className="relative w-10 h-10">
        <div
          className="absolute w-full h-full top-0 left-0 bg-green-100 border border-black"
          onClick={clickGeo}
        >
          {cell.name}
        </div>
        {cell.unit && (
          <div className="absolute w-full h-full top-0 left-0 bg-white" onClick={clickUnit}>
            {cell.unit.name}
          </div>
        )}
      </div>
    </>
  );
};

export default Cell;
