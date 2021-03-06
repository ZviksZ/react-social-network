import React, {Component}                                                     from 'react';
import {connect}                                                              from "react-redux";
import {withRouter}                                                           from "react-router-dom";
import {compose}                                                              from "redux";
import {getStatus, savePhoto, saveProfile, setUserProfileThunk, updateStatus} from "../../redux/profile-reducer";
import Profile                                                                from "./Profile.jsx";

class ProfileContainer extends Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.setUserProfileThunk(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     updateStatus={this.props.updateStatus}
                     status={this.props.status}
                     saveProfile={this.props.saveProfile}
                     savePhoto={this.props.savePhoto}
            />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setUserProfileThunk,
            getStatus,
            updateStatus,
            saveProfile,
            savePhoto
        }),
    withRouter
)(ProfileContainer);
