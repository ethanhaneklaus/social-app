import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="fullbg">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="John" style={{ width: "100%" }} />
                <h1>Users Name</h1>
                <h1>Users Handle</h1>
                <p className="title">Biography</p>
                <p>Follow My Socials</p>
                <a href="#"><i className="bi bi-snapchat"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <p><button className="button">Contact</button></p>
            </div>,

            <>
                <div style={{ display: "flex", flexFlow: "row wrap", width: "100%" }}>

                    <div className="leftcontainer">
                        <h8>Suggested for you</h8>
                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            <div style={{ display: "flex", flexFlow: "row wrap" }}>
                                <>
                                    <iframe
                                        height="615"
                                        width="325"
                                        src="https://www.tiktok.com/embed/7119842526156033326"
                                        allowfullscreen
                                        scrolling="no"
                                        allow="encrypted-media;"
                                    ></iframe>
                                </>
                                <>
                                    <div className="card" style={{ display: "flex" }}>
                                        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="John" style={{ width: "100%" }} />
                                        <h1>Users Name</h1>
                                        <h1>Users Handle</h1>
                                        <p className="title">Biography</p>
                                        <p>Follow My Socials</p>
                                        <a href="#"><i className="bi bi-snapchat"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <p><button className="button">Contact</button></p>
                                    </div>
                                </>
                            </div>
                            <div>
                                <div className="100%">
                                    <input type="text" placeholder="Like to leave a comment?"></input>
                                    <button type="submit">Submit</button>
                                </div>
                                <div>
                                    populate submited text here
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            <div style={{ display: "flex", flexFlow: "row wrap" }}>
                                <>
                                    <iframe
                                        height="615"
                                        width="325"
                                        src="https://www.tiktok.com/embed/7119518658820394282"
                                        allowfullscreen
                                        scrolling="no"
                                        allow="encrypted-media;"
                                    ></iframe>
                                </>
                                <>
                                    <div className="card" style={{ display: "flex" }}>
                                        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="John" style={{ width: "100%" }} />
                                        <h1>Users Name</h1>
                                        <h1>Users Handle</h1>
                                        <p className="title">Biography</p>
                                        <p>Follow My Socials</p>
                                        <a href="#"><i className="bi bi-snapchat"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <p><button className="button">Contact</button></p>
                                    </div>
                                </>
                            </div>
                            <div width="100%">
                                <input type="text" placeholder="Like to leave a comment?"></input>
                                <button type="submit">Submit</button>
                                <div>
                                    populate submited text here
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="leftcontainer">
                        <h8>Suggested for you</h8>

                    </div>
                </div>
            </>
        </div>
    );

};

export default ProfilePage;