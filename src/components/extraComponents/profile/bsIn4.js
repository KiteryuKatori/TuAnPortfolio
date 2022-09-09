import React from "react";
// import ReactDOM from "react-dom";
import {AiFillInfoCircle} from "react-icons/ai";
import { IconContext } from "react-icons";
import avatar from "../../../imgs/Avts/sun.jpg";

export default function BasicInfo() {
    return (
        <div id="basicInfo">
            <div className="imgContainer">
                {/* <img className="notYetPic" src="../../imgs/Avts/sun.jpg" alt="Tuấn Anh"></img> */}
                <img className="notYetPic" src={avatar} alt="Tuấn Anh"></img>
            </div>
            <div className="txtContainer">
                <div className="title">
                    <h2>Hello, I am</h2>
                    <h1>Phan Vũ Tuấn Anh</h1>
                </div>
                <IconContext.Provider 
                    value={{color: '#fff', size: '16px', position: 'absolute', top: '16px'}}
                    >
                    <div className="description">
                        <h3>And I am currently:</h3>
                        <p><AiFillInfoCircle className="infoIcon" />A solo Website Developer of <a className="dbf" href="https://donationboxfoundation.com">Donation Box Foundation</a>.</p>
                        <p><AiFillInfoCircle className="infoIcon" />A somophore at Ho Chi Minh's University of Education, major in Information Technology.</p>
                        <p><AiFillInfoCircle className="infoIcon" />A self-taught developer.</p>
                        <p><AiFillInfoCircle className="infoIcon" />And a freelance multi-purpose assistant for a small company</p>
                        {/* <p><AiFillInfoCircle className="infoIcon" />A friendly dude who wanted to expand his range of relationship.</p> */}
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}