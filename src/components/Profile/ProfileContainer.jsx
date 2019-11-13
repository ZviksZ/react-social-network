import React,{Component} from 'react';
import {connect}         from "react-redux";
import {withRouter}      from "react-router-dom";
import {profileAPI}      from "../../api/api.js";
import {setUserProfile}  from "../../redux/profile-reducer.js";
import Profile           from "./Profile.jsx";

class ProfileContainer extends Component{
    
    componentDidMount() {
        let {userId} = this.props.match.params;
        
        if(!userId) {
            userId = 2;
        }
        profileAPI.getUserProfile(userId).then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    
    render() {        
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
    
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)