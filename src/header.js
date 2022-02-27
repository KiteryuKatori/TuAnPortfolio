import React from "react"
import ReactDOM from "react-dom"

import {MdLanguage } from "react-icons/md"

export default function Header() {
    return (
        <nav id="header">
            <ul className="sectionNav">
                <li className="navItem"><a href="#About">About me</a></li>
                {/* <li className="navItem"><a href="#SnE">Skills and Experiences</a></li> will add in the future */} 
                <li className="navItem"><a href="#Projects">Projects</a></li>
                <li className="navItem"><a href="#Contact">Contact</a></li>
            </ul>
            <ul className="utilitiesNav">
                <li className="navItem"><button>EN/US</button></li>
                <li className="navItem"><button>VIE</button></li>
                <li className="navItem"><button>LIGHT/DARK MODE</button></li>
            </ul>
        </nav>
    )
}