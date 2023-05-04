import React from "react";
// import ReactDOM from "react-dom";
import { AiFillInfoCircle, AiFillFire } from "react-icons/ai";
import { IconContext } from "react-icons";
import avatar from "../../../imgs/lama1.jpg";

export default function BasicInfo() {
    return (
        <div id="basicInfo">
            <div className="imgContainer">
                {/* <img className="notYetPic" src="../../imgs/Avts/sun.jpg" alt="Tuấn Anh"></img> */}
                <img className="notYetPic myPic" src={avatar} alt="Tuấn Anh"></img>
            </div>
            <div className="txtContainer">
                <div className="title">
                    <h2>Hello, I am</h2>
                    <h1>Phan Vũ Tuấn Anh</h1>
                    <IconContext.Provider
                        value = {{color: 'blue', size: '50px'}}>
                            <div>
                                <AiFillFire />
                                <AiFillFire />
                                <AiFillFire />
                                <AiFillFire />
                            </div>
                    </IconContext.Provider>
                </div>
                <IconContext.Provider 
                    value={{color: '#faf', size: '16px', position: 'absolute', top: '60px', background: '#fea24a'}}
                    >
                    <div className="description">
                        <h3>And I am currently:</h3>
                        <p>
                            <AiFillInfoCircle className="infoIcon" />
                            A solo Website Developer of <a className="dbf" href="https://donationboxfoundation.com">asdasd Donation Box Foundation</a>.</p>
                        <p>
                            <AiFillInfoCircle className="infoIcon" />
                            A somophore at Ho Chi Minh's University of Pedagogy, major in Information Technology.</p>
                        <p>
                            <AiFillInfoCircle className="infoIcon" />
                            A self-taught Programmer.</p>
                        <p>
                            <AiFillInfoCircle className="infoIcon" />
                            And a remote assistant for a small company</p>
                        {/* <p>
                        <AiFillInfoCircle className="infoIcon" />
                        A friendly dude who wanted to expand his range of relationship.</p> */}
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}