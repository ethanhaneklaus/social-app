import socketIoClient from "socket.io-client";
import { useState, useCallback, useEffect, useRef } from "react";

const useSocket = (roomID, username) => {
    const [messages, setMessages] = useState([]);

    const socketRef = useRef();
    useEffect(() => {
        socketRef.current = socketIoClient("http://localhost:8080", {
            query: { username },
        });

        const sendMessage = useCallback(
            (body) => {
                socketRef.current.emit("message", { username, body });
            },
            [username]);
    });
    return { messages, sendMessage };
};

export default useSocket;