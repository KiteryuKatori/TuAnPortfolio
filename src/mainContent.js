import React from "react"
import ReactDOM from "react-dom"

export default function MainContent() {
    return (
        <div id="mainContent">
            <h1 className="title">Facts about React that TuAn've learned</h1>
            <ul className="list">
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has more than 100k Stars on Github</li>
                <li>Is being maintained by Facebook?</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>    
    )
}