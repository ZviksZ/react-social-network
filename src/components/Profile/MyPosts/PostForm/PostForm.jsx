import React                        from 'react'
import {Field, reduxForm}           from "redux-form";
import s                            from './../MyPosts.module.css';
import {maxLengthCreator, required} from "../../../../helpers/validators/validators.ts";
import {Textarea}                   from "../../../common/FormsControls/FormControls.tsx";


const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea}
                   name={'newPostText'}
                   placeholder={'Enter your post'}/>


         </div>
         <div>
            <button type="submit" className={`${s.postBtn} btn btn-secondary`}>Add</button>
         </div>
      </form>
   )
}

export const AddNewPostFormRedux = reduxForm({
   form: 'profileAddNewPostForm'
})(AddNewPostForm)
