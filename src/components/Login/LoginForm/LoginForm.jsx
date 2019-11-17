import React              from 'react'
import {Field, reduxForm} from "redux-form";
import s                  from "../Login.module.css";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            <Field name={'login'} placeholder={"Login"} component={"input"} />
            <Field name={'password'} placeholder={"Password"} component={"input"} />
            <Field name={'rememberMe'} component={"input"} type={'checkbox'}/>remember me
            <button>Log in</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)