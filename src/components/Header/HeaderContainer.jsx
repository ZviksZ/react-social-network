import * as axios        from "axios";
import React,{Component} from 'react';
import {connect}         from "react-redux";
import {setAuthUserData}     from "../../redux/auth-reducer.js";
import Header            from "./Header.jsx";

class HeaderContainer extends Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login); 
                } 
                
            })
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

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)