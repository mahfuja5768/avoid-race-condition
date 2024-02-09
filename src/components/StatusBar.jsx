import { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const StatusBar = () => {
  const isOnline = useOnlineStatus()

  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"} </h1>
    </div>
  );
};

export default StatusBar;
