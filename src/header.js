import React from "react"

export default function Header() {
    return (
        <nav id="header">
            <ul className="sectionNav">
                <li className="navItem notYet"><a href="#About">About me</a></li>
                {/* <li className="navItem"><a href="#SnE">Skills and Experiences</a></li> will add in the future */} 
                <li className="navItem notYet"><a href="#Projects">Projects</a></li>
                <li className="navItem notYet"><a href="#Contact">Contact</a></li>
            </ul>
            <ul className="utilitiesNav">
                <li className="navItem notYet"><button>EN/US</button></li>
                <li className="navItem notYet"><button>VIE</button></li>
                <li className="navItem notYet"><button>LIGHT/DARK MODE</button></li>
            </ul>
        </nav>
    )
}