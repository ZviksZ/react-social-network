import React, {useState}        from 'react';
import Preloader                from "../../common/Preloader/Preloader";
import ProfileData              from "./ProfileData.jsx";
import ProfileDataFormReduxForm from "./ProfileDataForm/ProfileDataForm";
import s                        from './ProfileInfo.module.css';
import userPhoto                from '../../../assets/images/default_ava.jpg'
import ProfileStatusWithHooks   from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    
    if (!profile) {
        return <Preloader/>
    }    
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        } 
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (

        <div>
            <img className={s.main_img}
                 src="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png"
                 alt=""/>
            <div className={s.content_info}>


                <div className={s.leftSide}>
                    <img className={s.avaImg} src={profile.photos.large || userPhoto} alt=""/>
                </div>

                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode ?
                    <ProfileDataFormReduxForm initialValues={profile} 
                                              profile={profile} 
                                              onSubmit={onSubmit}/>
                    :
                    <ProfileData profile={profile} 
                                 isOwner={isOwner}
                                 goToEditMode={ () => {setEditMode(true)} }/>
                }


            </div>

            <ProfileStatusWithHooks updateStatus={updateStatus}
                                    status={status}/>

        </div>
    );
}



export default ProfileInfo;