import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io();

const SocketIO = () => {
  const [numClients, setNumClients] = useState(0);

  useEffect(() => {
    socket.on("users", (count) => {
      setNumClients(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>Number of connected clients: {numClients}</p>
    </div>
  );
};

export default SocketIO;
