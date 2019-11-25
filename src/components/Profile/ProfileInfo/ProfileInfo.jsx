import React, {useState}        from 'react';
import Preloader                from "../../common/Preloader/Preloader.jsx";
import Contact                  from "./Contact/Contact.jsx";
import ProfileDataFormReduxForm from "./ProfileDataForm.jsx";
import s                        from './ProfileInfo.module.css';
import userPhoto                from '../../../assets/images/default_ava.jpg'
import ProfileStatusWithHooks   from "./ProfileStatusWithHooks.jsx";

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

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    let contacts = profile.contacts;

    return (
        <div className={s.rightSide}>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>
            }


            <div className={s.content_user_data}>

                <h2 className={s.fullName}>{profile.fullName}</h2>

                <div>
                    <div className={s.description}>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {
                        profile.lookingForAJob &&
                        <div className={s.description}>
                            <b>My professional skills</b>: {profile.lookingForAJobDescription}
                        </div>
                    }
                    {
                        profile.aboutMe &&
                        <div className={s.description}>
                            <b>About me</b>: {profile.aboutMe}
                        </div>
                    }


                </div>

                <ul className={s.socials}>
                    {
                        Object.keys(contacts).map(key => {
                            if (contacts[key]) {
                                return <Contact key={key}
                                                contactTitle={key}
                                                contactValue={contacts[key]}/>

                            }
                        })
                    }
                </ul>

            </div>

        </div>
    )
}



export default ProfileInfo;