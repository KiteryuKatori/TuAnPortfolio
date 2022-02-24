import React from "react"
import ReactDOM from "react-dom"
// import logo from "./imgs/logo192.png"

export default function Header() {
    return (
        <nav id="header">
            <div id="pageName">
                {/* <img src={logo}  alt="React's Logo"></img> */}
                <h1>HOME</h1>
            </div>
            <ul className="navLinksList">
                <li className="navItem"><button>EN/US</button></li>
                <li className="navItem"><button>VIE</button></li>
                <li className="navItem"><button>LIGHT/DARK MODE</button></li>
            </ul>
        </nav>
    )
}