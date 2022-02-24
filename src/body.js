import React from "react"
import ReactDOM from "react-dom"

export default function Body() {
    return (
        <div id="body">
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
                        <h3>I am</h3>
                        <h1>Phan Vũ Tuấn Anh</h1>
                    </div>
                    <div class="description">
                        <p>I'm a student at HCMUE</p>
                        <p>a short-ass shitty piece of self-description paragraph</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}