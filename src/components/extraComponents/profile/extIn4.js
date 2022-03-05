import React from "react";
import ReactDom from "react-dom";

const currDate = new Date();
let beenCodingSince = 2020;

export default function ExtraInfo() {
    return (
        <div id="extraInfo">
            <button>About me</button>
            <div className="wrapper">
                <p><span className="spaces">___</span> I've been coding for {currDate.getFullYear() - beenCodingSince} years and learned various skills since 2020. I started learning <span className="skill">Python</span> as a starting language. And then, I switched to <span className="skill">Unity</span> and learn <span className="skill">C#</span>with<span className="skill">Blender</span> but were quickly discouraged.  because I had no one around who were into Programming to share about it. Then, I quitted. Back to where I was, being a normal highschool student.</p>
                <p><span className="spaces">___</span>Trying to pass the National Highschool Exam in Viet Nam makes me tired and stressed out. So I started learning <span className="skill">HTML, CSS and Javascirpt</span> as a way to ease my mind. And currently, I am capable of summoning websites by tucking colorful lines of weird texts, then do a little magic and *puff*, a little webpage just appeared out of nowhere. Event though they are nothing remarkable, but its truly hardwork.</p>
                <p><span className="spaces">___</span>Realizing just making prototypes are not enough, I started making some real projects and currently, I am a solo(kinda) Website Developer at <a className="dbf" href="donationboxfoundation.com">Donation Box Foundation</a>. And currently, I'm learning <span className="skill">React.js</span> and aiming to do some great stuffs with it.</p>
            </div>
        </div>
    )
}


