import React from "react";
import ReactDOM from "react-dom";
import BasicInfo from "./extraComponents/profile/bsIn4";
import ExtraInfo from "./extraComponents/profile/extIn4";

export default function ProjectsSection() {
    return (
        <div className="Section" id="Projects">
            <div className="title">
                    <h1>websites</h1>
            </div>
            <div className="pjContainer">
                <div className="cell">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <div className="title">TicTacToe</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit.</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

