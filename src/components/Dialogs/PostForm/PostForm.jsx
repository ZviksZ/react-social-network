import {Field, reduxForm}           from "redux-form";
import React                        from 'react';
import {maxLengthCreator, required} from "../../../helpers/validators/validators.js";
import {Textarea}                   from "../../common/FormsControls/FormControls.js";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                       name={'newMessageText'} 
                       placeholder={'Enter your message'}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)