import React from "react";
import ReactDOM from "react-dom";
import {AiFillInfoCircle} from "react-icons/ai";
import { IconContext } from "react-icons";

export default function ProfileSection() {
    return (
        <div className="Section" id="Profile">
            {/* <div class="title Mobile">
                <h3>I am</h3>
                <h1>Phan Vũ Tuấn Anh</h1>
            </div> */}
            <div className="imgContainer">
                <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/250727039_1991284891035495_412886337879382020_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=XgtOG17kJT8AX_RV_ss&_nc_ht=scontent.fsgn5-14.fna&oh=03_AVKV4LvMK1jO_BhdtsIS-oR0PW1CwHo7o2UCaucUud5UtA&oe=623E16FE" alt="Tuấn Anh"></img>
            </div>
            <div className="txtContainer">
                <div class="title">
                    <h2>Hello, my name is</h2>
                    <h1>Phan Vũ Tuấn Anh</h1>
                </div>
                <IconContext.Provider 
                    value={{color: '#fff', size: '16px', position: 'absolute', top: '16px'}}>
                <div class="description">
                    <h3>And I am:</h3>
                    <p><AiFillInfoCircle />A student, major in Information Technology at Ho Chi Minh's University of Education.</p>
                    <p><AiFillInfoCircle />A self-taught website developer.</p>
                </div>
                </IconContext.Provider>
            </div>
        </div>  
    )
}

