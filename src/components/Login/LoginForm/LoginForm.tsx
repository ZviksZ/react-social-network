import React                from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {required, email}    from "../../../helpers/validators/validators";
import {createField, Input} from "../../common/FormsControls/FormControls";
import s                    from "../Login.module.css";
import styles               from './../../common/FormsControls/FormControls.module.css';
import Button               from '@material-ui/core/Button';
import {LoginFormValuesType, LoginFormValuesTypeKeys} from "../Login";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,  LoginFormOwnProps> &  LoginFormOwnProps> = ({captchaUrl, handleSubmit, error}) => {
   return (
      <form className={s.loginForm} onSubmit={handleSubmit}>

         <div>
            <h4>Use test account data</h4>
            <p>
               <strong>Email: </strong>
               <span>free@samuraijs.com</span>
               <br/>
               <strong>Password: </strong>
               <span>free</span>
            </p>
         </div>

         {createField<LoginFormValuesTypeKeys>("Login", 'email', [required, email], Input)}

         {createField<LoginFormValuesTypeKeys>("Password", 'password', [required], Input, {type: 'password'})}

         {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

         {captchaUrl &&
         <div>
            <img src={captchaUrl} alt=""/>
            {createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input)}
         </div>
         }

         {error ? <div className={styles.formSummaryError}> {error} </div> : null}


         <Button variant="contained" size="large" color="primary" type="submit" className={styles.loginBtn}>
            Log in
         </Button>

      </form>
   )
}

export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
   form: 'login',
})(LoginForm)
