import React, {Component}                             from 'react';
import {connect}                                      from "react-redux";
import {withRouter}                                   from "react-router-dom";
import {compose}                                      from "redux";
import {withAuthRedirect}                             from "../../hoc/withAuthRedirect.js";
import {getStatus, setUserProfileThunk, updateStatus} from "../../redux/profile-reducer.js";
import Profile                                        from "./Profile.jsx";

class ProfileContainer extends Component {

    componentDidMount() {
        let {userId} = this.props.match.params;

        if (!userId) {
            userId = 5131;
        }
        this.props.setUserProfileThunk(userId);        
        this.props.getStatus(userId);
    }


    render() {


        return (
            <Profile {...this.props} 
                     profile={this.props.profile}
                     updateStatus={this.props.updateStatus}
                     status={this.props.status}
            />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);