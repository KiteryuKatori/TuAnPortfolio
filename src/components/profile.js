import React from "react";
import ReactDOM from "react-dom";

import BasicInfo from "./extraComponents/profile/bsIn4";
import ExtraInfo from "./extraComponents/profile/extIn4";

export default function ProfileSection() {
    return (
        <div className="Section" id="Profile">
            <BasicInfo />
            {/* <ExtraInfo /> */}
        </div>  
    )
}

