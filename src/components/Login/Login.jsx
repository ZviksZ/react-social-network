import React              from 'react'
import {connect}          from "react-redux";
import {loginMe, logoutMe}          from "../../redux/auth-reducer.js";
import s                  from './Login.module.css'
import {LoginReduxForm}   from "./LoginForm/LoginForm.jsx";



const Login = (props) => {
    const onSubmit = (formData) => {
        const {login, password, rememberMe} = formData;
        
        props.loginMe(login, password, rememberMe)
    }   
    const onLogout = () => {
        props.logoutMe();
    }
    return (
        <div>
            <h1>Login</h1>
            {props.isAuth ?
                <button onClick={onLogout}>Log out</button>
                :
                <LoginReduxForm onSubmit={onSubmit} />
            }
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {logoutMe, loginMe})(Login)