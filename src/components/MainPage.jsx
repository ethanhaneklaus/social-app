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
                <div className="test">Content insert

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