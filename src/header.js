import React from "react"
import ReactDOM from "react-dom"
import logo from "./imgs/logo192.png"

export default function Header() {
    return (
        <nav id="header">
            <div id="pageName">
                <img src={logo}  alt="React's Logo"></img>
                <h1>ReactFacts</h1>
            </div>
            <ul className="navLinksList">
                <li className="navItem">Pricing</li>
                <li className="navItem">Plans</li>
                <li className="navItem">Others</li>
                <li className="navItem">Contact</li>
            </ul>
        </nav>
    )
}