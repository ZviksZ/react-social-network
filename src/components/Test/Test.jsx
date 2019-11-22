import {downloadPhotoThunk, savePhotoThunk} from "../../redux/test-reducer.js";
import styles                               from './Test.module.css'
import React                                from 'react'
import {connect}                            from "react-redux";
import {compose}                            from "redux";
import Preloader                            from "../common/Preloader/Preloader.jsx";
import {TestFormRedux}                      from "./TestForm/TestForm.jsx";


const Test = (props) => {
    const onChangePhoto = (formData) => {
        if(formData.photo) {
            props.savePhotoThunk(formData.photo[0]);
        }
    };

    return(
        <TestFormRedux onSubmit={onChangePhoto}/>
    )


}

let mapStateToProps = (state) => {
    return {
        
    }
}

export default compose(
    connect(mapStateToProps, {savePhotoThunk})
)(Test);