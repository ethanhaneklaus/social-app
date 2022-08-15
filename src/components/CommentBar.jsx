import React, { useState } from "react"
import useSocket from "../useSocket";


function CommentBar({ currentUser }) {

    const [comments, sendComment] = useSocket(
        currentUser,
    )
    const [comment, setComment] = useState("");


    return (

        <div style={{ width: "655px", border: "solid black 1px" }}>
            <div style={{ width: "100%" }}>
                <input
                    value={comment}
                    id="comment"
                    size="72"
                    type="text"
                    placeholder="Like to leave a comment?"
                    onChange={(e) => { setComment(e.target.value) }}
                >

                </input>
                <button
                    type="submit"
                    onClick={() => {
                        if (comment) {
                            sendComment(comment);
                            setComment("");
                        }
                        console.log(comment);
                    }}
                >Submit</button>
            </div>
            <div>
                {comments.map((val, idx) =>
                    <div key={idx}>
                        <b>{val.username}:</b>
                        {val.body}
                    </div>
                )}
            </div>
        </div>
    );
}
export default CommentBar;