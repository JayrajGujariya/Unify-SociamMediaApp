import React from "react";
import './Profile.css'
import ProfileLeft from "../../componants/ProfileLeft/ProfileLeft";
import ProfileCard from "../../componants/profileCard/ProfileCard";
import PostSide from "../../componants/postSide/PostSide";
import RightSide from "../../componants/rightSide/RightSide";
const Profile=()=>{
    return(
        <div className="Profile">
            <ProfileLeft/>
            <div className="Profile-center">
                <ProfileCard location="profilePage"/>
                <PostSide/>
            </div>

            <RightSide/>
        </div>
    )
}
export default Profile;