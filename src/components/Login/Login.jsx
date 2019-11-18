import React            from 'react'
import {connect}        from "react-redux";
import {Redirect}       from "react-router-dom";
import {loginMe}        from "../../redux/auth-reducer.js";
import s                from './Login.module.css'
import {LoginReduxForm} from "./LoginForm/LoginForm.jsx";


const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData;

        props.loginMe(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginMe})(Login)