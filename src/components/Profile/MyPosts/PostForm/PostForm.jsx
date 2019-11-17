import React              from 'react'
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
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