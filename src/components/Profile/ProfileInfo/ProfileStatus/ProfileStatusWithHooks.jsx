import React, {useState,useEffect} from 'react';
import s                           from '../ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    
    const [editMode, setEditMode] = useState(false);   
    const [status, setStatus] = useState(props.status);
    
    
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
      
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.profileStatus}>
            {!editMode &&
                <div>
                    <b>Status<small>(dbl click to change)</small>: </b><span onDoubleClick={activateEditMode}>
                    {props.status || 'Enter your status'}
                </span>
                </div>
            
            }
            {editMode &&
            <input autoFocus={true}
                   onBlur={deactivateEditMode}
                   onChange={onStatusChange}
                   type="text"
                   value={status}/>
            }
        </div>
    )


}

export default ProfileStatusWithHooks;