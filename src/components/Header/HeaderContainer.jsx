import React, {Component}               from 'react';
import {connect}                        from "react-redux";
import {logoutMe} from "../../redux/auth-reducer.js";
import Header                           from "./Header.jsx";

class HeaderContainer extends Component {    

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

export default connect(mapStateToProps, { logoutMe })(HeaderContainer)