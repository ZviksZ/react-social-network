import React             from "react";
import {Field}           from "redux-form";
import styles            from './FormControls.module.css';


export const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            <div>
                { hasError && <span>{error}</span> }
            </div>

        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props} className="form-group">
        <textarea {...input} {...restProps} className="form-control"/>
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props} className="form-group">
        <input {...input} {...restProps} className="form-control"/>
    </FormControl>
}



export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div className="form-group">
            <Field name={name}
                   className="form-control"
                   placeholder={placeholder}
                   component={component}
                   {...props}
                   validate={validators}/>
            {text}
        </div>
    )
}

/*START   Input for download file */
export const FieldFile = ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value

    return (
        <div>
            <label htmlFor={input.name}>
                Choose File from your Computer
                <input {...input} type={type}/>
            </label>
        </div>
    )
}

/* END  Input for download file */