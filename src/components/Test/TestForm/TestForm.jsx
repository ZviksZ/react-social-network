import React              from 'react'
import {Field, reduxForm} from "redux-form";
import {FieldFile}        from "../../common/FormsControls/FormControls.js";
import s                  from "../../Login/Login.module.css";

const TestForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            <div>
                <Field name={'photo'}
                       placeholder={"file"}
                       component={FieldFile}
                       type={'file'}/>
            </div>
            <button>Upload</button>
        </form>
    )
}


export const TestFormRedux = reduxForm({
    form: 'upload-photo-form',
})(TestForm)