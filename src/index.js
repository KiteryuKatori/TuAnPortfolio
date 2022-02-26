import React from "react"
import ReactDOM from "react-dom"

// import "../public/logo192.png"
import "./style.css"

import Header from "./header.js"
import Body from "./body"
import Footer from "./footer"


function Page() {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<Page/>, document.querySelector("#root"));