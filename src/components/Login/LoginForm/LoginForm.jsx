import React                from 'react'
import {reduxForm}   from "redux-form";
import {required}           from "../../../helpers/validators/validators.js";
import {createField, Input} from "../../common/FormsControls/FormControls.js";
import s                    from "../Login.module.css";
import styles               from './../../common/FormsControls/FormControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>

            {createField("Login", 'email', [required], Input)}

            {createField("Password", 'password', [required], Input, {type: 'password'})}

            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}

            {error ? <div className={styles.formSummaryError}> {error} </div> : null}
            
            <button>Log in</button>
            
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)