import React, { useState } from "react"


function CommentBox() {

    const [posted, setPosted] = useState(null);
    const [comment, setComment] = useState("");

    return (

        <div style={{ width: "655px", border: "solid black 1px" }}>
            <div style={{ width: "100%" }}>
                <input
                    value=""
                    id="com"
                    size="72"
                    type="text"
                    placeholder="Like to leave a comment?"
                    onChange={(e) => { setComment(e.target.value) }}
                >

                </input>
                <button
                    id="comsub"
                    type="submit"
                    disabled={comment.length < 1}

                >Submit</button>
            </div>
            <div
                value="setComment"
                id="compop"
                style={{ width: "320", height: "100px" }}
                className="commentbox"
            ></div>
        </div>
    );
}
export default CommentBox;