import socketIoClient from "socket.io-client";
import { useState, useCallback, useEffect, useRef } from "react";

const useSocket = (username) => {
    const [comments, setComment] = useState([]);
    //! Each comment is an object that has the following keys:
    //! {username: "SOMETHING", body: "MESSAGE TO DISPLAY", color: "HEX COLOR CODE"}
    const socketRef = useRef();
    useEffect(() => {
        socketRef.current = socketIoClient("http://localhost:8080", {
            query: { username },
        });

        socketRef.current.on("user connect", ({ username }) => {
            let newComment = {
                username: "SERVER",
            };
            setComment((curr) => [...curr, newComment]);
        });

        socketRef.current.on("user disconnect", ({ username }) => {
            let newComment = {
                username: "SERVER",
            };
            setComment((curr) => [...curr, newComment]);
        });

        socketRef.current.on("comment", (comment) => {
            setComment((curr) => [...curr, comment]);
        });

        return () => socketRef.current.disconnect();
    }, [username]);

    const sendComment = useCallback(
        (body) => {
            socketRef.current.emit("comment", { username, body });
        },
        [username]
    );

    return { comments, setComment, sendComment };
};

export default useSocket;