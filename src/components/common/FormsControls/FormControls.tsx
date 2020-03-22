import React             from "react"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"
import styles            from './FormControls.module.css'
import {FieldValidatorType} from "../../../helpers/validators/validators"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    className: string
}



export const FormControl: React.FC<FormControlPropsType>  = ({meta: {touched, error}, children}) => {
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


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props} className="form-group">
        <textarea {...input} {...restProps} className="form-control"/>
    </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props} className="form-group">
        <input {...input} {...restProps} className="form-control"/>
    </FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType, validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>, props = {}, text = "")  {
    return <div className={`${styles.formGroup} form-group`}>
            <Field name={name}
                   className={`${styles.formControl} form-control`}
                   placeholder={placeholder}
                   component={component}
                   {...props}
                   validate={validators}/>
            <span className={styles.inputText}>{text}</span>
        </div>

}

/*START   Input for download file */
/*export const FieldFile = ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value

    return (
        <div>
            <label htmlFor={input.name}>
                Choose File from your Computer
                <input {...input} type={type}/>
            </label>
        </div>
    )
}*/

/* END  Input for download file */
