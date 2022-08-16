import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useSocket from "../useSocket";
import CommentBar from "./CommentBar";
import ProfileCard from "./ProflieCard";




function MainPage() {
    const { loggedInUser } = useContext(UserContext);
    const { comments, sendComment } = useSocket(
        loggedInUser.username
    )

    return (
        <div className="wholebg">
            <div style={{ display: "flex", flexFlow: "row wrap", width: "100%" }}>
                <h4 className="header">Suggested for you</h4>
                <h4 className="header">You're Following</h4>
            </div>

            <div style={{ display: "flex", flexFlow: "row wrap", width: "100%" }}>

                <div className="leftcontainer scroll-container">

                    <div style={{ display: "flex", flexFlow: "row wrap" }}>
                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            <>
                                <iframe
                                    title="ran1"
                                    height="615"
                                    width="325"
                                    src="https://www.tiktok.com/embed/7119842526156033326"
                                    allowFullScreen
                                    scrolling="no"
                                    allow="encrypted-media;"
                                ></iframe>
                            </>
                            <>
                                <ProfileCard />
                            </>
                        </div>
                        <CommentBar comments={comments} sendComment={sendComment} />
                    </div>

                    <div style={{ display: "flex", flexFlow: "row wrap" }}>
                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            <>
                                <iframe
                                    title="ran2"
                                    height="615"
                                    width="325"
                                    src="https://www.tiktok.com/embed/7119518658820394282"
                                    allowFullScreen
                                    scrolling="no"
                                    allow="encrypted-media;"
                                ></iframe>
                            </>
                            <>
                                <ProfileCard />
                            </>
                        </div>
                        <CommentBar comments={comments} sendComment={sendComment} />
                    </div>
                </div>

                <div className="middlecontainer scroll-container">

                    <div style={{ display: "flex", flexFlow: "row wrap" }}>
                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            <>
                                <iframe
                                    title="ran3"
                                    height="615"
                                    width="325"
                                    src="https://www.tiktok.com/embed/7119842526156033326"
                                    allowFullScreen
                                    scrolling="no"
                                    allow="encrypted-media;"
                                ></iframe>
                            </>
                            <>
                                <ProfileCard />
                            </>
                        </div>
                        <CommentBar comments={comments} sendComment={sendComment} />
                    </div>

                    <div style={{ display: "flex", flexFlow: "row wrap" }}>
                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            <>
                                <iframe
                                    title="ran4"
                                    height="615"
                                    width="325"
                                    src="https://www.tiktok.com/embed/7119518658820394282"
                                    allowFullScreen
                                    scrolling="no"
                                    allow="encrypted-media;"
                                ></iframe>
                            </>
                            <>
                                <ProfileCard />
                            </>
                        </div>
                        <CommentBar comments={comments} sendComment={sendComment} />
                    </div>
                </div>

            </div>
        </div>

    );
};
export default MainPage;