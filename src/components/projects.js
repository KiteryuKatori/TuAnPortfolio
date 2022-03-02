import React from "react";
import ReactDOM from "react-dom";
// import BasicInfo from "./extraComponents/profile/bsIn4";
// import ExtraInfo from "./extraComponents/profile/extIn4";

export default function ProjectsSection() {
    return (
        <div className="Section" id="Projects">
            <div className="SectionTitle">
                    <h1>websites</h1>
            </div>

            <ul className="sortBtnList">
                <li className="sortBtn"><button>All</button></li>
                <li className="sortBtn"><button>Ecommerce</button></li>
                <li className="sortBtn"><button>Games</button></li>
                <li className="sortBtn"><button>Others</button></li>
            </ul>

            <div className="pjContainer">
                <div className="cell">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <div className="title">TicTacToe</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit.</div>
                    </div>
                </div>
                <div className="cell">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <div className="title">TicTacToe</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit.</div>
                    </div>
                </div>
                <div className="cell">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <div className="title">TicTacToe</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit.</div>
                    </div>
                </div>
                <div className="cell">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <div className="title">TicTacToe</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit.</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

