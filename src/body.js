import React from "react";

import ProfileSection from "./components/profile";
import SkillsandExperiencesSection from "./components/SnE";
import ProjectsSection from "./components/projects";

export default function Body() {
    return (
        <div id="body">
            <ProfileSection />
            {/* <SkillsandExperiencesSection /> */}
            <ProjectsSection />
        </div>    
    )
}

