import {Field, reduxForm} from "redux-form";
import React              from 'react';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageText'} placeholder={'Enter your message'}/>
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