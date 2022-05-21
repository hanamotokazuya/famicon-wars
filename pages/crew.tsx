import { useEffect } from "react";
import { useStateContext } from "../src/context/Statecontext";

const Crew: React.FC = () => {
  const { action } = useStateContext();
  useEffect(() => {
    action({ type: "DEFINE_TEAM", team: "BLUE_MOON" });
    import("peerjs").then(({ default: Peer }) => {
      const peer = new Peer("BLUE_MOON");
      peer.on("connection", () => {
        console.log("他のクライアントからの接続あり");
      });
      peer.on("open", () => {
        console.log("OPEN BLUE_MOON");
        const conn = peer.connect("RED_STAR");
        console.log(conn);
        conn.on("open", () => {
          console.log("ホストに接続しました");
          action({ type: "CONNECT", conn });
          conn.on("data", (data) => {
            console.log("Redからのメッセージ: ", data);
            action({ type: "EXEC_PROCESS", data });
          });
        });
      });
    });
  }, [action]);
  return <div className="w-screen h-10 bg-green-500">Hello, Famicon Wars Crew</div>;
};
export default Crew;
