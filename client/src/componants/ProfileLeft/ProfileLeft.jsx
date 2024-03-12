import React from "react";
import LogoSearch from "../logoSearch/LogoSearch";
import InfoCard from "../InfoCard/InfoCard";
import FollowersCard from "../followersCard/FollowersCard";
const ProfileLeft=()=>{
    return(
        <div className="ProfileSide">
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}
export default ProfileLeft;