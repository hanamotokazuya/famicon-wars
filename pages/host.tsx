import { useEffect } from "react";
import { useStateContext } from "../src/context/Statecontext";
import Link from "next/link";

const Host: React.FC = () => {
  const {
    state: { conn },
    action,
  } = useStateContext();
  useEffect(() => {
    action({ type: "DEFINE_TEAM", team: "RED_STAR" });
    import("peerjs").then(({ default: Peer }) => {
      const peer = new Peer("RED_STAR");
      peer.on("open", () => {
        console.log("OPEN HOST");
      });
      peer.on("connection", (conn) => {
        action({ type: "CONNECT", conn });
        console.log("他のクライアントからの接続あり");
        conn.on("data", (data) => {
          console.log("Blueからのメッセージ: ", data);
          action({ type: "EXEC_PROCESS", data });
        });
      });
    });
  }, [action]);
  return (
    <>
      <div className="w-screen h-10 bg-green-500">Hello, Famicon Wars HOST</div>
      {conn.peer && (
        <Link href="/play">
          <a>始める</a>
        </Link>
      )}
    </>
  );
};
export default Host;
