import React            from 'react'
import {connect}        from "react-redux";
import {Redirect}       from "react-router-dom";
import {loginMe}        from "../../redux/auth-reducer";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    loginMe: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {loginMe})(Login)
