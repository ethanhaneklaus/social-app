import React, { useState } from "react"


function CommentBox() {

    const [posted, setPosted] = useState(null);

    let Comment = document.getElementById("com").value;
    document.getElementById("compop").innerHTML = x;

    return (

        <div style={{ width: "655px", border: "solid black 1px" }}>
            <div style={{ width: "100%" }}>
                <input
                    value="comment"
                    id="com"
                    size="72"
                    type="text"
                    placeholder="Like to leave a comment?">

                </input>
                <button
                    id="comsub"
                    type="submit"
                    disabled={comment.length < 1}

                >Submit</button>
            </div>
            <div
                value="posted"
                id="compop"
                style={{ width: "320", height: "100px" }}
                className="commentbox"
            ></div>
        </div>
    );
}
export default CommentBox;