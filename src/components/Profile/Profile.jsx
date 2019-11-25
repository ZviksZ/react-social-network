import React            from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo      from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {  
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         updateStatus={props.updateStatus}
                         isOwner={!props.match.params.userId}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         status={props.status}/>
            <MyPostsContainer />
        </div>

    );
}


export default Profile;