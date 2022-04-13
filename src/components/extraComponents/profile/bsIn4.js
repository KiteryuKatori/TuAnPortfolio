import React from "react";
import ReactDOM from "react-dom";
import {AiFillInfoCircle} from "react-icons/ai";
import { IconContext } from "react-icons";
import avatar from "../../../imgs/Avts/sun.jpg";

export default function BasicInfo() {
    return (
        <div id="basicInfo">
            <div className="imgContainer">
                {/* <img className="notYetPic" src="../../imgs/Avts/sun.jpg" alt="Tuấn Anh"></img> */}
                <img className="notYetPic" src="avatar" alt="Tuấn Anh"></img>
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
                        <p><AiFillInfoCircle />A solo Website Developer of <a className="dbf" href="https://donationboxfoundation.com">Donation Box Foundation</a>.</p>
                        <p><AiFillInfoCircle />A freshman at Ho Chi Minh's University of Education, major in Information Technology.</p>
                        <p><AiFillInfoCircle />A self-taught developer.</p>
                        <p><AiFillInfoCircle />I'll leave this for future me to fill the shits.</p>
                        {/* <p><AiFillInfoCircle />A friendly dude who wanted to expand his range of relationship.</p> */}
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}