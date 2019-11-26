import React   from 'react';
import Contact from "./Contact/Contact";
import s       from './ProfileInfo.module.css';


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


export default ProfileData;