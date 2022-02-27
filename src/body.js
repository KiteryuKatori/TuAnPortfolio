import React from "react";
import ReactDOM from "react-dom";
import ProfileSection from "./components/profile"
import SkillsandExperiencesSection from "./components/SnE";

export default function Body() {
    return (
        <div id="body">
            <ProfileSection />
            <SkillsandExperiencesSection />
        </div>    
    )
}

