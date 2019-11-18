import React              from 'react'
import {Field, reduxForm} from "redux-form";
import {required}         from "../../../helpers/validators/validators.js";
import {Input}            from "../../common/FormsControls/FormControls.js";
import s                  from "../Login.module.css";
import styles             from './../../common/FormsControls/FormControls.module.css';

const LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            <div>
                <Field name={'email'}
                       placeholder={"Login"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'}
                       placeholder={"Password"}
                       type={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={Input}
                       type={'checkbox'}/>remember me
            </div>
            {
                props.error ?
                    <div className={styles.formSummaryError}>
                        {props.error}
                    </div>
                    : 
                    null
            }
            <button>Log in</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)