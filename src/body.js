import React from "react";
import ReactDOM from "react-dom";
import ProfileSection from "./bodyComponents/profile";
import SkillsandExperiencesSection from "./bodyComponents/SnE";

export default function Body() {
    return (
        <div id="body">
            <ProfileSection />
            <SkillsandExperiencesSection />
        </div>    
    )
}

