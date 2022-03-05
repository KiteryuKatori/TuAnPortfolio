import React from "react";
import ReactDOM from "react-dom";

import DBFLogo from "../imgs/PJs/DBFLogo.png";
import Loto from "../imgs/PJs/Loto.png";
import TTT from "../imgs/PJs/TTT.png";
import BB from "../imgs/PJs/BB.png";
import Playground from "../imgs/PJs/Playground.png";

// import BasicInfo from "./extraComponents/profile/bsIn4";
// import ExtraInfo from "./extraComponents/profile/extIn4";

// const divStyle = {
//     WebkitTransition: 'all', // note the capital 'W' here
//     msTransition: 'all' // 'ms' is the only lowercase vendor prefix
//   };
  
//   function ComponentWithTransition() {
//     return <div style={divStyle}>This should work cross-browser</div>;
//   }

export default function ProjectsSection() {
    return (
        <div className="Section" id="Projects">
            <div className="SectionTitle">
                    <h1>websites</h1>
            </div>

            <ul className="sortBtnList">
                <li className="sortBtn"><button>All</button></li>
                <li className="sortBtn notYet"><button>Games</button></li>
                <li className="sortBtn notYet"><button>Others</button></li>
            </ul>

            <div className="pjContainer">
                <a className="cell" href="https://donationboxfoundation.com">
                    <div style={{ backgroundColor: '#ffffff'}} className="cellHeader">
                        <div className="imgContainer">
                            <img style={{ transform: 'translateX(-50%), translateY(-50%)' }} src={DBFLogo} alt="Donation Box Foundation's Logo"></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <h2 className="title">Donation Box Foundation</h2>
                        <p className="description">A non-profit charity Organization, created by a group of students in hope of providing helps to the suffered ones from the Covid-19 Pandemic.</p>
                    </div>
                </a>
                <a className="cell" href="https://kiteryukatori.github.io/Lo_To-Demo">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img style={{ transform: 'translateX(-50%) translateY(-50%) scale(1.5)' }} src={Loto} alt="Loto(Mobile)'s gameplay"></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <h2 className="title">Loto</h2>
                        <p className="description">One of the most iconic game in Viet Nam on Tet holidays. Its like Bingo, when you have to listen to a number and scan the paper to fill them in(if they exist on the paper) </p>
                    </div>
                </a>
                <a className="cell" href="https://kiteryukatori.github.io/TicTacToe">
                    <div className="cellHeader">
                        <div className="imgContainer">
                            <img style={{ transform: 'translateX(-50%), translateY(-50%)' }} src={TTT} alt="Tic Tac Toe's gameplay"></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <h2 className="title">Tic Tac Toe</h2>
                        <p className="description">A well-known game for it's name. With the help of Kyle Cook a.k.a Web Dev Simplified's tutorial, I was able to made this game.</p>
                    </div>
                </a>
                <a className="cell" href="https://kiteryukatori.github.io/Breaky-Bricks">
                    <div  className="cellHeader">
                        <div className="imgContainer">
                            <img style={{ transform: 'translateX(-50%) translateY(-42.5%) scale(1.15)' }} src={BB} alt="Breaky Bricks's gameplay"></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <h2 className="title">Breaky Brick</h2>
                        <p className="description">Another replica of the famous Brick Breaker genre. I followed MDN Web Docs's tutorial to make this game and I customized the game a bit to my preference.</p>
                    </div>
                </a>
                <a className="cell" href="https://kiteryukatori.github.io/Playground">
                    <div  className="cellHeader">
                        <div className="imgContainer">
                            <img style={{ transform: 'translateX(-50%) translateY(-50%) scale(0.75)' }} src={Playground} alt="Interactive Playground"></img>
                        </div>
                    </div>
                    <div className="cellContent">
                        <h2 className="title">Interactive Playground</h2>
                        <p className="description">A Gallery of buttons with animations that I have seen from other people's buttons and implemented them into mine.</p>
                    </div>
                </a>
            </div>
        </div>  
    )
}

