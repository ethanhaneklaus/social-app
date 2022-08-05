import React, { useState } from "react"


function CommentBox() {

    const [posted, setPosted] = useState([]);
    const [comment, setComment] = useState("");


    return (

        <div style={{ width: "655px", border: "solid black 1px" }}>
            <div style={{ width: "100%" }}>
                <input
                    value={comment}
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
                    onClick={(e) => {
                        { setPosted({ comment }); }
                    }}
                >Submit</button>
            </div>
            <div
                value="setComment"
                id="compop"
                style={{ width: "320", height: "100px" }}
                className="commentbox"
            >
                {posted.map((val, idx) => <div key={idx}>{val}</div>)}
            </div>
        </div>
    );
}
export default CommentBox;