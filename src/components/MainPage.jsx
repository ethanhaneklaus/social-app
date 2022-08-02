import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function MainPage() {
    const navigate = useNavigate();

    return (
        <div className="maincontainer">

            <div className="leftcontainer">
                <div className="test">Suggested

                </div>
            </div>

            <div className="middlecontainer">

                <div ClassName="tiktokdiv">
                    <iframe
                        src="https://www.tiktok.com/embed/7115393853708094254"
                        allowfullscreen
                        scrolling="no"
                        allow="encrypted-media;"
                    ></iframe>
                </div>



                <div>
                    Comment Section
                </div>
            </div>

            <div className="leftcontainer">
                <div className="test">User Info

                </div>
            </div>

        </div>
    );

};

export default MainPage;