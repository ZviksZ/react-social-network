import React                        from 'react'
import {Field, reduxForm}           from "redux-form";
import {maxLengthCreator, required} from "../../../../helpers/validators/validators.js";
import {Textarea}                   from "../../../common/FormsControls/FormControls.js";


const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       placeholder={'Enter your post'}
                       validate={[required, maxLength50]}/>       
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)