import React from "react";
import ReactDom from "react-dom";

const currDate = new Date();
let beenCodingSince = 2020;

export default function ExtraInfo() {
    return (
        <div id="extraInfo">
            <button>About me</button>
            <div className="wrapper">
                <p><span className="spaces">___</span> I've been coding for {currDate.getFullYear() - beenCodingSince} years and have learned various things since 2020. I started learning <span className="skill">Python</span> as a starting language. And then, I switched to <span className="skill">Unity</span> and learn <span className="skill">C#</span> with <span className="skill">Blender</span> in the dream of making games but were quickly discouraged. Because I had no one around who was into Programming to share about it and as a result, I quitted. Then, I came back to where I was, not having the gut to touch a single line of code for almost a year.</p>
                <p><span className="spaces">___</span>Trying to pass the National Highschool Exam in Viet Nam makes me tired and stressed out. So I started to find something else to relax. First thought, well, of course it's gonna be video games, but not for long. Soon after that, I went back on track and started learning <span className="skill">HTML, CSS and Javascript</span> as a way to ease my mind. And as a result, I am capable of summoning web elements by stuffing colorful lines of weird texts into packs of files, then do a little magic and *puff*, a little webpage just appeared out of nowhere.</p>
                <p><span className="spaces">___</span>Realizing just making prototypes are not enough, I started making some “real” projects. I have been a (kinda solo) Website Developer at <a className="dbf" href="https://donationboxfoundation.com">Donation Box Foundation</a>. And currently, I'm learning <span className="skill">React.js</span> and aiming to do some great stuffs with it.</p>
            </div>
        </div>
    )
}


