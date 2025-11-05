import { HMSPrebuilt } from "@100mslive/roomkit-react";
import { useLocation } from "react-router";

const RoomPage100MS = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomCode = queryParams.get("roomCode");
  return (
    <div style={{ height: "100vh" }}>
      <HMSPrebuilt roomCode={roomCode} />
    </div>
  );
};

export default RoomPage100MS;
