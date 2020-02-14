import React            from 'react'
import {connect}        from "react-redux";
import {Redirect}       from "react-router-dom";
import {loginMe}        from "../../redux/auth-reducer.ts";
import {LoginReduxForm} from "./LoginForm/LoginForm.jsx";


const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe, captcha} = formData;

        props.loginMe(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h2 className="text-center">Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {loginMe})(Login)
