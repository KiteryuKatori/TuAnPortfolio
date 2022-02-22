import React from "react"
import ReactDOM from "react-dom"

// import "../public/logo192.png"
import "./style.css"

import Header from "./header.js"
import MainContent from "./mainContent"
import Footer from "./footer"


function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.querySelector("#root"));