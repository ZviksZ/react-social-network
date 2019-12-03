import React                from 'react'
import {reduxForm}          from "redux-form";
import {required}           from "../../../helpers/validators/validators.js";
import {createField, Input} from "../../common/FormsControls/FormControls.js";
import s                    from "../Login.module.css";
import styles               from './../../common/FormsControls/FormControls.module.css';
import Button               from '@material-ui/core/Button';

const LoginForm = ({captchaUrl, handleSubmit, error}) => {
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

         {createField("Login", 'email', [required], Input)}

         {createField("Password", 'password', [required], Input, {type: 'password'})}

         {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}

         {captchaUrl &&
         <div>
            <img src={captchaUrl} alt=""/>
            {createField('Symbols from image', 'captcha', [required], Input)}
         </div>
         }

         {error ? <div className={styles.formSummaryError}> {error} </div> : null}


         <Button variant="contained" size="large" color="primary" type="submit" className={styles.loginBtn}>
            Log in
         </Button>

      </form>
   )
}

export const LoginReduxForm = reduxForm({
   form: 'login',
})(LoginForm)