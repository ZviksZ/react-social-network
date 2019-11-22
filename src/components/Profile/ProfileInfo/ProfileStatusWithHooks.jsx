import React, {useState,useEffect} from 'react';
import s                 from './ProfileInfo.module.css';

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
        <div>
            {!editMode &&
            <span onDoubleClick={activateEditMode}>
                    {props.status || 'Enter your status'}
                </span>
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