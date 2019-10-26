import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.main_img}
                 src="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png"
                 alt=""/>

            <div className={s.content_info}>
                <img class={s.avaImg} src="https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png" alt=""/>
                <div className="content_user-data">

                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;