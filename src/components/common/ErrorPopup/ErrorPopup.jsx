import React from 'react';
import s     from './ErrorPopup.module.css';


const ErrorPopup = (props) => {
    return (
        <div className={s.errorWrap}>
            <div className={s.errorBody}>
                <span>
                    { props.globalError }
                </span>
                
            </div>
        </div>
    )
}

export default ErrorPopup;