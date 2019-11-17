import React, {Component}     from 'react';
import {connect}              from "react-redux";
import {setAuthUserDataThunk} from "../../redux/auth-reducer.js";
import Header                 from "./Header.jsx";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.setAuthUserDataThunk()        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isAuth !== this.props.isAuth) {
            this.props.setAuthUserDataThunk() 
        }         
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { setAuthUserDataThunk })(HeaderContainer)