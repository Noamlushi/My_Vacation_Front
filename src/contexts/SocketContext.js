import { createContext, useContext, useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [numClients, setNumClients] = useState(0);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io();
    socketRef.current.on("users", (count) => {
      setNumClients(count);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={{ numClients }}>
      {children}
    </SocketContext.Provider>
  );
};

export const Socket = () => {
  return useContext(SocketContext);
};
