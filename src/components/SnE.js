import React from "react";
import ReactDOM from "react-dom";

const currDate = new Date();
let beenCodingSince = 2020;

export default function SkillsandExperiencesSection() {
    return (
        <div className="Section" id="SnE">
            <div className="SectionTitle">
                    <h1>Skills</h1>
            </div>
            <div className="container">
                    <p><span className="spaces">___</span> I've been coding for {currDate.getFullYear() - beenCodingSince} years and learned various skills since 2020. I started learning <span className="skill">Python</span> as a starting language. And then, I switched to <span className="skill">C#</span> and learn <span className="skill">Unity</span> with <span className="skill">Blender</span> but were quickly discourage because I had no one around who were into Programming to share about it.</p>
            </div>
        </div>  
    )
}

