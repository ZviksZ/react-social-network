import React, {Component}     from 'react';
import {connect}              from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {setUserProfileThunk}  from "../../redux/profile-reducer.js";
import Profile                from "./Profile.jsx";

class ProfileContainer extends Component {

    componentDidMount() {
        let {userId} = this.props.match.params;

        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfileThunk(userId)
    }

    render() {
        
        
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect  to={"/login"} />;    
    return <ProfileContainer {...props}/>
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {setUserProfileThunk})(WithUrlDataContainerComponent)