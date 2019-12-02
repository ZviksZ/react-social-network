import {Field, reduxForm}           from "redux-form";
import React                        from 'react';
import {maxLengthCreator, required} from "../../../helpers/validators/validators.js";
import {Textarea}                   from "../../common/FormsControls/FormControls.js";
import s                            from './../Dialogs.module.css';
import Button                       from '@material-ui/core/Button';


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.addMessageForm}>
         <div>
            <Field component={Textarea}
                   name={'newMessageText'}
                   placeholder={'Enter your message'}
                   />

         </div>
         <div className={s.formButtons}>
            <Button variant="contained" type='submit'>Add</Button>
            <Button variant="contained" color="secondary" onClick={props.reset}>
               Clear Values
            </Button>
         </div>
      </form>
   )
}

export const AddMessageFormRedux = reduxForm({
   form: 'dialogAddMessageForm'
})(AddMessageForm)