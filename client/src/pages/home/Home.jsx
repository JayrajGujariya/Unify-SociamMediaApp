import React from "react";
import './Home.css'
import ProfileSide from '../../componants/profileSide/ProfileSide'
import PostSide from "../../componants/postSide/PostSide";
import RightSide from "../../componants/rightSide/RightSide";
const Home=()=>{
    return(
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}
export default Home;